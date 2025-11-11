import { Food } from "../services/fakeFoodService";
import { Favorite, TableBody, TableHeader } from "./types";
import { Columns } from "./utils";

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
    {
      key: "favorite",
      content: (food) => (
        <Favorite
          isFavored={Boolean(food.isFavored)}
          onFavored={() => onFavor(food._id)}
        />
      ),
    },
    {
      key: "delete",
      content: (food) => (
        <button
          onClick={() => onDelete(food._id)}
          className="btn btn-outline-danger">
          Delete
        </button>
      ),
    },
  ];

  return (
    <table className="table">
      <TableHeader columns={columns} />
      <TableBody foods={foods} columns={columns} />
    </table>
  );
}

export default Table;
