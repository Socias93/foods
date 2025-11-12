import { SortColumn } from "../pages/FoodsPage";
import { Columns } from "./utils";

interface Props {
  columns: Columns[];
  sortColumn: SortColumn;
  setSortColumn(sortColumn: SortColumn): void;
}

function TableHeader({ columns, sortColumn, setSortColumn }: Props) {
  function handleSort(path: string) {
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    setSortColumn({ ...sortColumn });
  }

  return (
    <thead>
      <tr>
        {columns.map((column) =>
          "path" in column ? (
            <th
              onClick={() => handleSort(sortColumn.path)}
              key={column.path}
              scope="col">
              {column.label}
            </th>
          ) : (
            <th key={column.key}> </th>
          )
        )}
      </tr>
    </thead>
  );
}

export default TableHeader;
