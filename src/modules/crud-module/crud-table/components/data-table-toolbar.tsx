import { Table } from '@tanstack/react-table';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import Iconify from '@/components/iconify';
import { priorities, reasonBug, roles, types, userStatus } from '../data/data';
import { DataTableFacetedFilter } from './data-table-faceted-filter';
import { Link } from 'react-router-dom';
import { setConfig } from '@/redux/config';
import { useDispatch } from 'react-redux';

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
          placeholder="Filter tasks..."
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
          {table.getColumn('type') && (
            <DataTableFacetedFilter
              column={table.getColumn('type')}
              title="Type"
              options={types}
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
              options={userStatus}
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
      {/* <DataTableViewOptions table={table} /> */}
      <Link to={`/${config.entity}/create`} className='contents'>
        <Button onClick={handleConfig}>
          <Iconify icon="radix-icons:plus" width={20} className="mr-2" />
          {config.CREATE_ENTITY}
        </Button>
      </Link>
    </div>
  );
}
