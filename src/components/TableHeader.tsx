import { SortColumn } from "../pages/FoodsPage";
import { Columns, TextColumn } from "./utils";

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

  const sortUp = <i className="fa-solid fa-sort-up"></i>;
  const sortDown = <i className="fa-solid fa-sort-down"></i>;

  function renderSortIcon(column: TextColumn) {
    if (column.path !== sortColumn.path) return null;

    return sortColumn.order === "asc" ? sortUp : sortDown;
  }

  return (
    <thead>
      <tr>
        {columns.map((column) =>
          "path" in column ? (
            <th
              className="clickable"
              onClick={() => handleSort(column.path)}
              key={column.path}
              scope="col">
              {column.label}
              {renderSortIcon(column)}
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
