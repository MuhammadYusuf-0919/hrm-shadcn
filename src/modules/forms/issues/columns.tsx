import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@/components/ui/checkbox';

import Iconify from '@/components/iconify';
import {
  priorities,
  reasonBug,
  types,
} from '@/data';
import { DataTableRowActions } from '@/modules/crud-module/crud-table/components/data-table-row-actions';
import { DataTableColumnHeader } from '@/modules/crud-module/crud-table/components/data-table-column-header';
import { IssuesFormTypes } from '@/lib/schema';

export const columns: ColumnDef<IssuesFormTypes>[] = [
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
    accessorKey: 'projectTask',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Project Task" />
    ),
    cell: ({ row }) => <div className="w-[30%]">{row.getValue('projectTask')}</div>,
  },
  {
    accessorKey: 'bugCode',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bug Code" />
    ),
    cell: ({ row }) => <div className="w-[20%]">{row.getValue('bugCode')}</div>,
    // enableSorting: false,
    // enableHiding: false,
  },
  {
    accessorKey: 'reasonBug',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reason bug" />
    ),
    cell: ({ row }) => {
      const reason = reasonBug.find(
        (reason) => reason.value === row.getValue('reasonBug')
      );

      if (!reason) {
        return null;
      }
      return (
        <div className="flex items-center">
          {reason.icon && (
            <Iconify
              width={20}
              icon={`radix-icons:${reason.icon}`}
              className="mr-2 h-4 w-4 text-muted-foreground"
            />
          )}
          <span>{reason.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'titleBug',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title Bug" />
    ),
    cell: ({ row }) => <div className="w-[30%]">{row.getValue('titleBug')}</div>,
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
