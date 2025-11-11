import { useState } from "react";
import "./App.css";
import { deleteFood, getFoods } from "./services/fakeFoodService";
import Favorite from "./components/Favorite";
import Pagination from "./components/Pagination";
import { paginate } from "./components/utils";

const PAGE_SIZE = 4;

function App() {
  const [foods, setFoods] = useState(getFoods());
  const [selectedPage, setSelectedPage] = useState(1);

  function handleDelete(id: string) {
    const newFood = foods.filter((food) => food._id !== id);
    setFoods(newFood);
    deleteFood(id);

    const newPageCount = Math.max(1, Math.ceil(newFood.length / PAGE_SIZE));

    if (selectedPage > newPageCount) {
      setSelectedPage(newPageCount);
    }
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

  const paginatedFoods = paginate(foods, PAGE_SIZE, selectedPage);

  return (
    <>
      <div className="container">
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
            {paginatedFoods.map((food) => (
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
        <Pagination
          totalCount={foods.length}
          pageSize={PAGE_SIZE}
          selectedPage={selectedPage}
          onPageSelect={setSelectedPage}
        />
      </div>
    </>
  );
}

export default App;
