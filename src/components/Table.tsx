import { Food } from "../services/fakeFoodService";
import { TableBody, TableHeader } from "./types";

export interface Columns {
  path: string;
  label: string;
}

interface Props {
  foods: Food[];
  onFavor(id: string): void;
  onDelete(id: string): void;
}

function Table({ foods, onDelete, onFavor }: Props) {
  const columns: Columns[] = [
    {
      path: "name",
      label: "Name",
    },
    {
      path: "category.name",
      label: "Category",
    },
    {
      path: "price",
      label: "Price",
    },
    {
      path: "numberInStock",
      label: "Stock",
    },
  ];

  return (
    <table className="table">
      <TableHeader columns={columns} />
      <TableBody foods={foods} onDelete={onDelete} onFavor={onFavor} />
    </table>
  );
}

export default Table;
