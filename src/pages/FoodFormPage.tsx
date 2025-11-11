import { useParams } from "react-router-dom";

function FoodFormPage() {
  const { id } = useParams();

  return <h1>FoodForm{id} </h1>;
}

export default FoodFormPage;
