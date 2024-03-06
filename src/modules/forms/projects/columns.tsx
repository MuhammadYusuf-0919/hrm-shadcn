import { priorities } from '@/data';
import { projectType } from '@/data/types';
import Iconify from '@/components/iconify';
import Label from '@/components/custom-label';
import { projectStatus } from '@/data/status';
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
    accessorKey: 'projectName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Project Name" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('projectName')}</div>,
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
    accessorKey: 'projectType',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Project Type" />
    ),
    cell: ({ row }) => {
      const type = projectType.find(
        (type) => type.value === row.getValue('projectType')
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
      const status = projectStatus.find(
        (status) => status.value === row.getValue('status')
      );

      if (!status) {
        return null;
      }
      return (
        <div className="flex items-center">
          <Label color={statusColors(status.value)}>{status.label}</Label>
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
