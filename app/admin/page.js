"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    _id: "661fa08f11820b53672eaf81",
    ownerName: "Savita",
    email: "asd@gmail.com",
    product: "Veggie Migo",
    subscriptionTitle: "One Time",
    subscriptionAmt: 506,
    unitPerOrder: 600,
  },
  {
    _id: "661fa08f11820b53672eaf81",
    ownerName: "Savita",
    email: "asd@gmail.com",
    product: "Veggie Migo",
    subscriptionTitle: "One Time",
    subscriptionAmt: 506,
    unitPerOrder: 600,
  },
];

export const columns = [
  {
    id: "ownerName",

    accessorKey: "ownerName",
    header: "Owner Name",
    cell: ({ row }) => <div>{row.getValue("ownerName")}</div>,
  },
  {
    id: "email",

    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="">{row.getValue("email")}</div>,
  },
  {
    id: "product",

    accessorKey: "product",
    header: "Product",
    cell: ({ row }) => <div>{row.getValue("product")}</div>,
  },
  {
    id: "subscriptionTitle",

    accessorKey: "subscriptionTitle",
    header: "Subscription Title",
    cell: ({ row }) => <div>{row.getValue("subscriptionTitle")}</div>,
  },
  {
    id: "subscriptionAmt",

    accessorKey: "subscriptionAmt",
    header: "Subscription Amount",
    cell: ({ row }) => <div>{row.getValue("subscriptionAmt")}</div>,
  },
  {
    id: "unitPerOrder",

    accessorKey: "unitPerOrder",
    header: "Unit Per Order",
    cell: ({ row }) => <div>{row.getValue("unitPerOrder")}</div>,
  },
  {
    id: "actions",

    accessorKey: "actions",
    header: "",
    cell: ({ row }) => (
      <div className="flex justify-center">
        <Button
          variant="outline"
          size="sm"
          className="mr-2"
          onClick={() => console.log("Edit button clicked")}
        >
          Edit
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="mr-2"
          onClick={() => console.log("Delete button clicked")}
        >
          Delete
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="mr-2"
          onClick={() => console.log("Stripe button clicked")}
        >
          Stripe
        </Button>
      </div>
    ),
  },
];

export default function DataTableDemo() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  console.log(table.getRowModel().rows);
  return (
    <div className="w-full p-10">
      <div className="flex items-center py-4 gap-5">
        <Input
          placeholder="Filter emails..."
          value={
            (table.getColumn("email") &&
              table.getColumn("email").getFilterValue()) ||
            ""
          }
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <Input
          placeholder="Filter products..."
          value={
            (table.getColumn("product") &&
              table.getColumn("product").getFilterValue()) ||
            ""
          }
          onChange={(event) =>
            table.getColumn("product")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <Input
          placeholder="Filter subscription..."
          value={
            (table.getColumn("subscriptionTitle") &&
              table.getColumn("subscriptionTitle").getFilterValue()) ||
            ""
          }
          onChange={(event) =>
            table
              .getColumn("subscriptionTitle")
              ?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : header.column.columnDef.header}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.column.columnDef.cell({ row })}
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
