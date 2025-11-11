import _ from "lodash";
import { Food } from "../services/fakeFoodService";
import { Columns } from "./utils";

interface Props {
  foods: Food[];
  columns: Columns[];
}

function TableBody({ foods, columns }: Props) {
  return (
    <tbody className="table-group-divider">
      {foods.map((food) => (
        <tr key={food._id}>
          {columns.map((column) =>
            "content" in column ? (
              <td key={`${food._id}-${column.key}`}>{column.content(food)}</td>
            ) : (
              <td key={column.path}> {_.get(food, column.path)} </td>
            )
          )}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
