import { getCategories } from "../services/fakeCategoryService";

function ListGroup() {
  const categories = getCategories();

  return (
    <ul className="list-group list-group-flush">
      {categories.map((category) => (
        <li key={category._id} className="clickable list-group-item">
          {category.name}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
