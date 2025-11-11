import "./App.css";
import { getFoods } from "./services/fakeFoodService";

function App() {
  const foods = getFoods();
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {foods.map((food) => (
            <tr key={food._id}>
              <td> {food.name} </td>
              <td> {food.category.name} </td>
              <td> {food.price} </td>
              <td> {food.numberInStock} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
