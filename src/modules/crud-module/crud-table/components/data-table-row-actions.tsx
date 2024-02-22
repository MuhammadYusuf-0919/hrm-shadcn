import { Row } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import Iconify from '@/components/iconify';
import { useDeleteEntityMutation } from '@/redux/crud';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux';
import { setConfig } from '@/redux/config';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const dispatch = useDispatch();
  const config = useSelector((state: RootState) => state.config);
  const [deleteEntity, { isLoading }] = useDeleteEntityMutation();
  const { entity } = config;

  const handleDelete = async () => {
    try {
      await toast.promise(deleteEntity({ entity, id: row.original?.id }), {
        loading: 'Deleting item...',
        success: 'Item deleted successfully',
        error: 'Failed to delete item',
      });
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleUpdate = async () => {
    dispatch(
      setConfig({ ...config, initialState: row.original, create: false })
    );
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <Iconify icon="radix-icons:dots-horizontal" className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <Link to={`/${entity}/update`}>
          <DropdownMenuItem onClick={handleUpdate} disabled={isLoading}>
            Edit
          </DropdownMenuItem>
        </Link>
        <Link to={`/projects/${row.original.id}/tasks`}>
          <DropdownMenuItem disabled={isLoading}>Open Task</DropdownMenuItem>
        </Link>
        <Link to={`/projects/${row.original.id}/issues`}>
          <DropdownMenuItem disabled={isLoading}>Open Issue</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDelete}>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}