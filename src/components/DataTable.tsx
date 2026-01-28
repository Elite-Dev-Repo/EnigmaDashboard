"use client";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const currentPage = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  return (
    <div className="w-full">
      <div className="rounded-md border bg-foreground overflow-x-auto">
        <div className="min-w-[800px]">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="hover:bg-red-500">
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="text-primary/70 hover:bg-background"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex flex-1 flex-col md:flex-row items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-2  text-sm text-primary">
          <span>Showing</span>
          <select
            className="bg-foreground p-2 rounded-md font-bold outline-none"
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {[10, 20, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          <span>out of {data.length}</span>
        </div>

        <Pagination className="justify-center md:justify-end flex-1">
          <PaginationContent>
            <PaginationItem>
              <Button
                variant="ghost"
                className="hover:bg-foreground text-primary"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <PaginationPrevious href="#" className="hover:bg-transparent" />
              </Button>
            </PaginationItem>

            <div className="hidden sm:flex items-center text-primary">
              {Array.from({ length: pageCount }).map((_, pageIdx) => {
                if (
                  pageIdx === 0 ||
                  pageIdx === pageCount - 1 ||
                  (pageIdx >= currentPage - 1 && pageIdx <= currentPage + 1)
                ) {
                  return (
                    <PaginationItem key={pageIdx}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          table.setPageIndex(pageIdx);
                        }}
                        isActive={currentPage === pageIdx}
                        className={
                          currentPage === pageIdx ? "font-bold" : "opacity-60"
                        }
                      >
                        {pageIdx + 1}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
                if (pageIdx === 1 || pageIdx === pageCount - 2) {
                  return <PaginationEllipsis key={pageIdx} />;
                }
                return null;
              })}
            </div>

            <PaginationItem>
              <Button
                variant="ghost"
                className="hover:bg-foreground text-primary"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <PaginationNext href="#" className="hover:bg-transparent" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
