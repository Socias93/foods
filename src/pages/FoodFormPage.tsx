import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Food, getFood, saveFood } from "../services/fakeFoodService";
import { FormData, schema } from "./schemas/FoodFormSchema";
import { useEffect, useState } from "react";
import { Category } from "../services/utils";
import { getCategories } from "../services/fakeCategoryService";

function FoodFormPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  useEffect(() => {
    async function fetch() {
      const { data: categories } = await getCategories();
      setCategories(categories);

      if (!id || id === "new") return;
      const { data: food } = await getFood(id);

      if (!food) return;
      reset(mapToFormData(food));
    }
    fetch();
  }, []);

  function onSubmit(data: FormData) {
    console.log("Submitted", data);
    saveFood(data);
    navigate("/");
  }

  function mapToFormData(food: Food) {
    return {
      id: food.id,
      name: food.name,
      categoryId: food.category.id,
      price: food.price,
      numberInStock: food.numberInStock,
    };
  }

  const { id } = useParams();

  return (
    <>
      <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center mb-5">FoodForm {id} </h1>
        <div className="p-3 shadow rounded-3" style={{ width: 400 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label className="form-label">Name</label>
              <input
                {...register("name")}
                type="text"
                className="form-control"
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message} </p>
              )}
            </div>
            <div className="mb-2 mt-5">
              <select
                {...register("categoryId")}
                id="disabledSelect"
                className="form-select">
                <option value={""}>Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {errors.categoryId && (
                <p className="text-danger">{errors.categoryId.message} </p>
              )}
            </div>
            <div className="mb-2">
              <label className="form-label">Price</label>
              <input
                {...register("price", { valueAsNumber: true })}
                type="text"
                className="form-control"
              />
              {errors.price && (
                <p className="text-danger">{errors.price.message} </p>
              )}
            </div>
            <div className="mb-2">
              <label className="form-label">Stock</label>
              <input
                {...register("numberInStock", { valueAsNumber: true })}
                type="text"
                className="form-control"
              />
              {errors.numberInStock && (
                <p className="text-danger">{errors.numberInStock.message} </p>
              )}
            </div>

            <div className="text-center">
              <button className="btn btn-outline-dark w-50 m-2">Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default FoodFormPage;
