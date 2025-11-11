import { Columns } from "./Table";

interface Props {
  columns: Columns[];
}

function TableHeader({ columns }: Props) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.path} scope="col">
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;
