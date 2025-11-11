import { useState } from "react";
import "./App.css";
import { deleteFood, getFoods } from "./services/fakeFoodService";
import Favorite from "./components/Favorite";
import Pagination from "./components/Pagination";
import { paginate } from "./components/utils";
import ListGroup from "./components/ListGroup";
import { Category, getCategories } from "./services/fakeCategoryService";

const PAGE_SIZE = 4;
const DEFAULT_CATEGORY = { _id: "", name: "All Categories" };

function App() {
  const [foods, setFoods] = useState(getFoods());
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);

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

  function handleCategorySelect(category: Category) {
    setSelectedCategory(category);
    setSelectedPage(1);
  }

  const filtredFoods = selectedCategory._id
    ? foods.filter((food) => food.category._id === selectedCategory._id)
    : foods;

  const paginatedFoods = paginate(filtredFoods, PAGE_SIZE, selectedPage);

  if (foods.length === 0) return <p>There are 0 foods in the database</p>;

  return (
    <>
      <p className="ms-3 mt-2">
        There are {foods.length} foods in the database
      </p>
      <div className="container row mt-3">
        <div className="col-3">
          <ListGroup
            items={[DEFAULT_CATEGORY, ...getCategories()]}
            onCategorySelect={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="col-8">
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
            totalCount={filtredFoods.length}
            pageSize={PAGE_SIZE}
            selectedPage={selectedPage}
            onPageSelect={setSelectedPage}
          />
        </div>
      </div>
    </>
  );
}

export default App;
