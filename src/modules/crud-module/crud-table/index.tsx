import * as React from 'react';
import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from '@/components/ui/card';
import {
  ColumnDef,
  flexRender,
  SortingState,
  useReactTable,
  VisibilityState,
  getCoreRowModel,
  getSortedRowModel,
  ColumnFiltersState,
  getFacetedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getFacetedUniqueValues,
} from '@tanstack/react-table';
import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
} from '@/components/ui/table';
import { Payment } from '@/types';
import { useDispatch } from 'react-redux';
import { setConfig } from '@/redux/config';
import { useFetchEntityQuery } from '@/redux/crud';
import { DataTableToolbar } from './components/data-table-toolbar';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { DataTableSkeleton } from './components/data-table-skeleton';
import { DataTablePagination } from './components/data-table-pagination';

interface CrudTableProps {
  config: {
    entity: string;
    columns: ColumnDef<Payment>[];
  };
}

const CrudTable: React.FC<CrudTableProps> = ({ config }) => {
  const dispatch = useDispatch();
  const { columns, entity } = config;
  const { data, isLoading } = useFetchEntityQuery(entity);
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const handleConfig = () => {
    dispatch(setConfig({ ...config }));
  };

  React.useEffect(() => {
    handleConfig()
  }, [])

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data: data || [],
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return isLoading ? (
    <DataTableSkeleton columnCount={4} filterableColumnCount={2} />
  ) : (
    <Card>
      <CardHeader className="p-4 md:p-6">
        <DataTableToolbar data={{ config, table }} />
      </CardHeader>
      <CardContent className="py-0 px-4 md:px-6">
        <ScrollArea className="w-full h-[52vh] md:h-[58vh] rounded-md border block flex-grow">
          <Table className="`relative`">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow className="h-[40h] md:h-[51.2vh]">
                  <TableCell
                    colSpan={columns.length}
                    className="h-full text-center items-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
      <CardFooter className="py-4">
        <DataTablePagination table={table} />
      </CardFooter>
    </Card>
  );
};
export default CrudTable;
