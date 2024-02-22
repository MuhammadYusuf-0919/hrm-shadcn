import { Column } from '@tanstack/react-table';

import { cn } from '@/lib/utils';
import Iconify from '@/components/iconify';
import { Button } from '@/components/ui/button';

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Button
        size="sm"
        variant="ghost"
        className="-ml-3 h-8 data-[state=open]:bg-accent"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        <span>{title}</span>
        <Iconify icon="radix-icons:caret-sort" className="ml-2 h-4 w-4" />
      </Button>
      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {column.getIsSorted() === 'desc' ? (
              <Iconify icon="radix-icons:arrow-down" className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === 'asc' ? (
              <Iconify icon="radix-icons:arrow-up" className="ml-2 h-4 w-4" />
            ) : (
              <Iconify icon="radix-icons:caret-sort" className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
            <Iconify
              width={20}
              icon="radix-icons:arrow-up"
              className="mr-2 text-muted-foreground/70"
            />
            Asc
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
            <Iconify
              width={20}
              icon="radix-icons:arrow-down"
              className="mr-2 text-muted-foreground/70"
            />
            Desc
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex items-center"
            onClick={() => column.toggleVisibility(false)}
          >
            <Iconify
              width={20}
              icon="radix-icons:eye-none"
              className="mr-2 text-muted-foreground/70"
            />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  );
}
