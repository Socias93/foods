import { Columns } from "./utils";

interface Props {
  columns: Columns[];
}

function TableHeader({ columns }: Props) {
  return (
    <thead>
      <tr>
        {columns.map((column) =>
          "path" in column ? (
            <th key={column.path} scope="col">
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
