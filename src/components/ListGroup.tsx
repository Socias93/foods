import { useState } from "react";
import { getCategories } from "../services/fakeCategoryService";

const DEFAULT_CATEGORY = { _id: "", name: "All Categories" };

function ListGroup() {
  const [selectedCategory, setSelectedCategory] = useState(DEFAULT_CATEGORY);
  const categories = [DEFAULT_CATEGORY, ...getCategories()];

  return (
    <ul className="list-group list-group-flush">
      {categories.map((category) => (
        <li
          onClick={() => setSelectedCategory(category)}
          key={category._id}
          className={`clickable list-group-item rounded-3 ${
            selectedCategory._id === category._id ? "active bg-black" : ""
          }`}>
          {category.name}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
