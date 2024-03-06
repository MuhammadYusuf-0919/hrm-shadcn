import { dayOffType } from '@/data/types';
import Iconify from '@/components/iconify';
import Label from '@/components/custom-label';
import { absenceStatus } from '@/data/status';
import { ProjectsFormTypes } from '@/lib/schema';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { statusColors } from '@/utils/statusColors';
import { DataTableRowActions } from '@/modules/crud-module/crud-table/components/data-table-row-actions';
import { DataTableColumnHeader } from '@/modules/crud-module/crud-table/components/data-table-column-header';

export const columns: ColumnDef<ProjectsFormTypes>[] = [
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
    accessorKey: 'inform',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Inform" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('inform')}</div>,
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
    accessorKey: 'reason',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reason" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('reason')}</div>,
  },
  {
    accessorKey: 'dayOffType',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Day Off Type" />
    ),
    cell: ({ row }) => {
      const type = dayOffType.find(
        (type) => type.value === row.getValue('dayOffType')
      );

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
          <span>{type.label}</span>
          {/* <Label color={statusColors(type.value)}>{type.label}</Label> */}
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
      const status = absenceStatus.find(
        (status) => status.value === row.getValue('status')
      );

      if (!status) {
        return null;
      }
      return (
        <div className="flex items-center">
          <Label
            startIcon={
              <Iconify
                width={20}
                icon={`radix-icons:${status.icon}`}
                className="mr-2 h-4 w-4 text-muted-foreground"
              />
            }
            color={statusColors(status.value)}
          >
            {status.label}
          </Label>
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
