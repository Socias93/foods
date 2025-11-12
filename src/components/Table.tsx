import { Link } from "react-router-dom";
import { Food } from "../services/fakeFoodService";
import { Favorite, TableBody, TableHeader } from "./types";
import { Columns } from "./utils";
import { SortColumn } from "../pages/FoodsPage";

interface Props {
  foods: Food[];
  onFavor(id: string): void;
  onDelete(id: string): void;
  sortColumn: SortColumn;
  setSortColumn(sortColumn: SortColumn): void;
}

function Table({ foods, onDelete, onFavor, setSortColumn, sortColumn }: Props) {
  const columns: Columns[] = [
    {
      content: (food) => (
        <Link style={{ color: "black" }} to={`/foods/${food._id}`}>
          {food.name}{" "}
        </Link>
      ),
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
      <TableHeader
        columns={columns}
        setSortColumn={setSortColumn}
        sortColumn={sortColumn}
      />
      <TableBody foods={foods} columns={columns} />
    </table>
  );
}

export default Table;
