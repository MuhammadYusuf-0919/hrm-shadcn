import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Iconify from '@/components/iconify';
import { setConfig } from '@/redux/config';
import { projectType } from '@/data/types';
import { Table } from '@tanstack/react-table';
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/button';
import { priorities, reasonBug, roles } from '@/data';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { cn } from '@/lib/utils';

interface Task {
  id: number;
  title: string;
  status: string;
  priority: string;
}

interface DataTableToolbarProps<TData> {
  data: {
    config: any;
    table: Table<TData>;
  };
}

export function DataTableToolbar<TData extends Task>({
  data,
}: DataTableToolbarProps<TData>) {
  const { config, table } = data;
  const dispatch = useDispatch();
  const isFiltered = table.getState().columnFilters.length > 0;
  const handleConfig = () => {
    dispatch(setConfig({ ...config, create: true }));
  };

  return (
    <div className="grid md:flex items-center justify-unset md:justify-between gap-y-2">
      <div className="grid sm:flex flex-1 items-center gap-2">
        <Input
          placeholder={`Filter ${config.entity}...`}
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('name')?.setFilterValue(event.target.value)
          }
          className="h-8 w-full md:w-[150px] lg:w-[250px]"
        />
        <div className="flex w-full md:w-unset gap-2">
          {table.getColumn('role') && (
            <DataTableFacetedFilter
              column={table.getColumn('role')}
              title="Role"
              options={roles}
            />
          )}
          {table.getColumn('projectType') && (
            <DataTableFacetedFilter
              column={table.getColumn('projectType')}
              title="Project Type"
              options={projectType}
            />
          )}
          {table.getColumn('reasonBug') && (
            <DataTableFacetedFilter
              column={table.getColumn('reasonBug')}
              title="Reason Bug"
              options={reasonBug}
            />
          )}
          {table.getColumn('status') && (
            <DataTableFacetedFilter
              column={table.getColumn('status')}
              title="Status"
              options={config.statusData}
            />
          )}
          {table.getColumn('priority') && (
            <DataTableFacetedFilter
              column={table.getColumn('priority')}
              title="Priority"
              options={priorities}
            />
          )}
          {isFiltered && (
            <Button
              variant="ghost"
              className="h-8 px-2 lg:px-3 text-destructive"
              onClick={() => table.resetColumnFilters()}
            >
              Reset
              <Iconify
                width={20}
                icon="radix-icons:cross-2"
                className="ml-2 !border-destructive"
              />
            </Button>
          )}
        </div>
      </div>
      <Link
        onClick={handleConfig}
        to={`/${config.entity}/create`}
        className={cn(buttonVariants({ variant: 'default' }))}
      >
        <Iconify icon="radix-icons:plus" width={20} className="mr-2" />
        {config.CREATE_ENTITY}
      </Link>
    </div>
  );
}
