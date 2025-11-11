import { useState } from "react";
import "./App.css";
import { deleteFood, getFoods } from "./services/fakeFoodService";
import Favorite from "./components/Favorite";

function App() {
  const [foods, setFoods] = useState(getFoods());

  function handleDelete(id: string) {
    const newFood = foods.filter((food) => food._id !== id);
    setFoods(newFood);
    deleteFood(id);
  }

  function handleFavor(id: string) {
    const newFood = foods.map((food) => {
      if (food._id === id) {
        food.isFavored = !food.isFavored;
      }
      return food;
    });
    setFoods(newFood);
  }

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
              <Favorite
                isFavored={Boolean(food.isFavored)}
                onFavored={() => handleFavor(food._id)}
              />
              <td>
                <button
                  onClick={() => handleDelete(food._id)}
                  className="btn btn-outline-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
