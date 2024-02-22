import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@/components/ui/checkbox';

import Iconify from '@/components/iconify';
import Label from '@/components/custom-label';
import { statusColors } from '@/utils/statusColors';
import { Task } from '@/modules/crud-module/crud-table/data/schema';
import {
  priorities,
  projectStatus,
  types,
} from '@/modules/crud-module/crud-table/data/data';
import { DataTableRowActions } from '@/modules/crud-module/crud-table/components/data-table-row-actions';
import { DataTableColumnHeader } from '@/modules/crud-module/crud-table/components/data-table-column-header';

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div className="w-[25%]">{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'userId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="User ID" />
    ),
    cell: ({ row }) => <div className="w-[10%]">{row.getValue('userId')}</div>,
    // enableSorting: false,
    // enableHiding: false,
  },
  {
    accessorKey: 'type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      const type = types.find((type) => type.value === row.getValue('type'));

      if (!type) {
        return null;
      }

      return (
        <div className="flex w-[15%] items-center">
          {/* {type.icon && (
            <Iconify
              icon={`radix-icons:${type.icon}`}
              className="mr-2 h-4 w-4 text-muted-foreground"
            />
          )} */}
          {/* <span>{type.label}</span> */}
          <Label color={statusColors(type.value)}>{type.label}</Label>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = projectStatus.find(
        (status) => status.value === row.getValue('status')
      );

      if (!status) {
        return null;
      }
      return (
        <div className="flex items-center">
          {status.icon && (
            <Iconify
              width={20}
              icon={`radix-icons:${status.icon}`}
              className="mr-2 h-4 w-4 text-muted-foreground"
            />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue('priority')
      );

      if (!priority) {
        return null;
      }
      return (
        <div className="flex items-center">
          {priority.icon && (
            <Iconify
              width={20}
              icon={`radix-icons:${priority.icon}`}
              className="mr-2 h-4 w-4 text-muted-foreground"
            />
          )}
          <span>{priority.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: 'actions',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
