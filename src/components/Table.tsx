import { Food } from "../services/fakeFoodService";
import { TableBody, TableHeader } from "./types";

interface Props {
  foods: Food[];
  onFavor(id: string): void;
  onDelete(id: string): void;
}

function Table({ foods, onDelete, onFavor }: Props) {
  return (
    <table className="table">
      <TableHeader />
      <TableBody foods={foods} onDelete={onDelete} onFavor={onFavor} />
    </table>
  );
}

export default Table;
