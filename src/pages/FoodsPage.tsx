import { useState } from "react";
import { deleteFood, getFoods } from "../services/fakeFoodService";
import { paginate } from "../components/utils";
import { Category, getCategories } from "../services/fakeCategoryService";
import { ListGroup, Pagination, Table } from "../components/types";
import { NavLink } from "react-router-dom";

const PAGE_SIZE = 4;
const DEFAULT_CATEGORY = { _id: "", name: "All Categories" };

function FoodsPage() {
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
      <div className="container row mt-3">
        <div className="col-3">
          <ListGroup
            items={[DEFAULT_CATEGORY, ...getCategories()]}
            onCategorySelect={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="col-8">
          <p>There are {foods.length} foods in the database</p>
          <NavLink to={"/new"} className="btn btn-outline-dark">
            New Food
          </NavLink>
          <Table
            foods={paginatedFoods}
            onDelete={handleDelete}
            onFavor={handleFavor}
          />
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

export default FoodsPage;
