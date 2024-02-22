import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@/components/ui/checkbox';

import { roles, userStatus } from '@/modules/crud-module/crud-table/data/data';
import { Task } from '@/modules/crud-module/crud-table/data/schema';
import { DataTableColumnHeader } from '@/modules/crud-module/crud-table/components/data-table-column-header';
import { DataTableRowActions } from '@/modules/crud-module/crud-table/components/data-table-row-actions';
import Iconify from '@/components/iconify';
import { statusColors } from '@/utils/statusColors';
import Label from '@/components/custom-label';

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
    id: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No" />
    ),
    cell: ({ row }) => <div className="w-[10%]">{row.getValue('userId')}</div>,
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
    accessorKey: 'role',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
    cell: ({ row }) => {
      const role = roles.find((role) => role.value === row.getValue('role'));

      if (!role) {
        return null;
      }

      return (
        <div className="flex w-[15%] items-center">
          {/* {role.icon && (
            <Iconify
              icon={`radix-icons:${role.icon}`}
              className="mr-2 h-4 w-4 text-muted-foreground"
            />
          )} */}
          {/* <span>{role.label}</span> */}
          <Label color={statusColors(role.value)}>{role.label}</Label>
        </div> 
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'phoneNumber',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone number" />
    ),
    cell: ({ row }) => (
      <div className="w-[20%]">{row.getValue('phoneNumber')}</div>
    ),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => <div className="w-[20%]">{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = userStatus.find(
        (status) => status.value === row.getValue('status')
      );

      if (!status) {
        return null;
      }
      return (
        <div className="flex items-center">
          {status.icon && (
            <Iconify
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
    id: 'actions',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
