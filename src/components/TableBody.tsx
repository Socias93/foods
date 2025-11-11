import { Food } from "../services/fakeFoodService";
import { Favorite } from "./types";

interface Props {
  foods: Food[];
  onFavor(id: string): void;
  onDelete(id: string): void;
}

function TableBody({ foods, onDelete, onFavor }: Props) {
  return (
    <tbody className="table-group-divider">
      {foods.map((food) => (
        <tr key={food._id}>
          <td> {food.name} </td>
          <td> {food.category.name} </td>
          <td> {food.price} </td>
          <td> {food.numberInStock} </td>
          <Favorite
            isFavored={Boolean(food.isFavored)}
            onFavored={() => onFavor(food._id)}
          />
          <td>
            <button
              onClick={() => onDelete(food._id)}
              className="btn btn-outline-danger">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
