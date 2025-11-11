import { Category } from "../services/fakeCategoryService";

interface Props {
  items: Category[];
  selectedCategory: Category;
  onCategorySelect(category: Category): void;
}

function ListGroup({ items, onCategorySelect, selectedCategory }: Props) {
  return (
    <ul className="list-group list-group-flush">
      {items.map((item) => (
        <li
          onClick={() => onCategorySelect(item)}
          key={item._id}
          className={`clickable list-group-item rounded-3 ${
            selectedCategory._id === item._id ? "active bg-black" : ""
          }`}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
