"use client";

import type { Selection, SortDescriptor } from "@heroui/react";
import { Button, Checkbox, Pagination, Table, cn } from "@heroui/react";
import { ChevronUp } from "lucide-react";
import { useMemo, useState } from "react";

export interface ColumnDef<T> {
  id: string;
  label: React.ReactNode;
  allowsSorting?: boolean;
  isRowHeader?: boolean;
  className?: string;
  render?: (row: T) => React.ReactNode;
}

export interface ActionItem<T> {
  icon: React.ReactNode;
  label?: string;
  variant?: "tertiary" | "danger-soft" | "ghost" | "secondary" | "primary";
  onClick: (row: T) => void;
  className?: string;
}

interface PaginationProps {
  page: number;
  totalPages: number;
  totalItems: number;
  rowsPerPage: number;
  onPageChange: (page: number) => void;
}

interface CustomTableProps<T extends { id: string | number }> {
  columns: ColumnDef<T>[];
  data: T[];
  actions?: ActionItem<T>[];
  selectable?: boolean;
  defaultSort?: SortDescriptor;
  ariaLabel?: string;
  className?: string;
  emptyContent?: React.ReactNode;
  onSelectionChange?: (keys: Selection) => void;
  onSortChange?: (descriptor: SortDescriptor) => void;
  pagination?: PaginationProps;
  disableClientSort?: boolean;
}

function SortableColumnHeader({
  children,
  sortDirection,
}: {
  children: React.ReactNode;
  sortDirection?: "ascending" | "descending";
}) {
  return (
    <span className="flex items-center gap-2 relative">
      {!!sortDirection && (
        <ChevronUp
          className={cn(
            "size-3 absolute right-14",
            sortDirection === "descending" ? "rotate-180" : "",
          )}
        />
      )}
      {children}
    </span>
  );
}

export function CustomTable<T extends { id: string | number }>({
  columns,
  data,
  actions,
  selectable = false,
  defaultSort,
  ariaLabel = "Custom table",
  className,
  emptyContent,
  onSelectionChange,
  onSortChange,
  pagination,
  disableClientSort,
}: CustomTableProps<T>) {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>(
    defaultSort ?? { column: columns[0]?.id ?? "", direction: "ascending" },
  );

  const sortedData = useMemo(() => {
    if (disableClientSort) return data;
    if (!sortDescriptor.column) return data;

    return [...data].sort((a, b) => {
      const col = sortDescriptor.column as keyof T;
      const first = String(a[col] ?? "");
      const second = String(b[col] ?? "");
      let cmp = first.localeCompare(second, undefined, { numeric: true });
      if (sortDescriptor.direction === "descending") cmp *= -1;
      return cmp;
    });
  }, [data, sortDescriptor, disableClientSort]);

  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys);
    onSelectionChange?.(keys);
  };

  const handleSortChange = (descriptor: SortDescriptor) => {
    setSortDescriptor(descriptor);
    onSortChange?.(descriptor);
  };

  const start = pagination
    ? (pagination.page - 1) * pagination.rowsPerPage + 1
    : 0;
  const end = pagination
    ? Math.min(pagination.page * pagination.rowsPerPage, pagination.totalItems)
    : 0;

  const pages = pagination
    ? Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
    : [];

  return (
    <Table variant="secondary" className={className}>
      <Table.ScrollContainer>
        <Table.Content
          dir="ltr"
          aria-label={ariaLabel}
          className="min-w-200"
          selectedKeys={selectedKeys}
          selectionMode={selectable ? "multiple" : "none"}
          sortDescriptor={sortDescriptor}
          onSelectionChange={handleSelectionChange}
          onSortChange={handleSortChange}
        >
          <Table.Header dir="ltr">
            {selectable && (
              <Table.Column className="pr-0">
                <Checkbox aria-label="Select all" slot="selection">
                  <Checkbox.Control>
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                </Checkbox>
              </Table.Column>
            )}

            {columns.map((col, idx) => (
              <Table.Column
                key={col.id}
                allowsSorting={col.allowsSorting}
                isRowHeader={col.isRowHeader ?? idx === (selectable ? 0 : 0)}
                className={cn(
                  "text-right ",
                  col.allowsSorting ? "text-neutral-700" : "after:hidden",
                  col.className,
                )}
                id={col.id}
              >
                {col.allowsSorting
                  ? ({
                      sortDirection,
                    }: {
                      sortDirection?: "ascending" | "descending";
                    }) => (
                      <SortableColumnHeader sortDirection={sortDirection}>
                        <span className="w-full text-right">{col.label}</span>
                      </SortableColumnHeader>
                    )
                  : col.label}
              </Table.Column>
            ))}

            {actions && actions.length > 0 && (
              <Table.Column className="text-end">Actions</Table.Column>
            )}
          </Table.Header>

          <Table.Body
            dir="rtl"
            items={sortedData}
            renderEmptyState={() => emptyContent}
          >
            {(row) => (
              <Table.Row key={row.id} id={row.id}>
                {selectable && (
                  <Table.Cell className="pr-0 ">
                    <Checkbox
                      aria-label={`Select row ${row.id}`}
                      slot="selection"
                      variant="secondary"
                    >
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                    </Checkbox>
                  </Table.Cell>
                )}

                {columns.map((col) => (
                  <Table.Cell key={col.id} className={col.className}>
                    {col.render
                      ? col.render(row)
                      : String((row as any)[col.id] ?? "")}
                  </Table.Cell>
                ))}

                {actions && actions.length > 0 && (
                  <Table.Cell>
                    <div className="flex items-center gap-1">
                      {actions.map((action, idx) => (
                        <Button
                          key={idx}
                          isIconOnly
                          size="sm"
                          variant={action.variant ?? "tertiary"}
                          aria-label={action.label}
                          className={action.className}
                          onPress={() => action.onClick(row)}
                        >
                          {action.icon}
                        </Button>
                      ))}
                    </div>
                  </Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>

      {pagination && pagination.totalPages > 1 && (
        <Table.Footer>
          <Pagination dir="ltr" size="sm" className="mt-3">
            <Pagination.Content dir="rtl">
              <Pagination.Item>
                <Pagination.Previous
                  isDisabled={pagination.page === 1}
                  onPress={() =>
                    pagination.onPageChange(Math.max(1, pagination.page - 1))
                  }
                >
                  <Pagination.NextIcon />
                  قبلی
                </Pagination.Previous>
              </Pagination.Item>
              {pages.map((p) => (
                <Pagination.Item key={p}>
                  <Pagination.Link
                    isActive={p === pagination.page}
                    onPress={() => pagination.onPageChange(p)}
                  >
                    {p}
                  </Pagination.Link>
                </Pagination.Item>
              ))}
              <Pagination.Item>
                <Pagination.Next
                  isDisabled={pagination.page === pagination.totalPages}
                  onPress={() =>
                    pagination.onPageChange(
                      Math.min(pagination.totalPages, pagination.page + 1),
                    )
                  }
                >
                  بعدی
                  <Pagination.PreviousIcon />
                </Pagination.Next>
              </Pagination.Item>
            </Pagination.Content>
          </Pagination>
        </Table.Footer>
      )}
    </Table>
  );
}
