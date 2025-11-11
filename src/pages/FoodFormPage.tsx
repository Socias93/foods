import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../services/fakeCategoryService";
import { saveFood } from "../services/fakeFoodService";

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  categoryId: z
    .string({ error: "You must choose a valid category" })
    .min(1, { message: "You must choose a category" }),
  price: z
    .number({ error: "You must write a number" })
    .min(1, { message: "Price cant be less than 1" })
    .max(20, { message: "Price cant be more than 20" }),
  numberInStock: z
    .number({ error: "You must write a number" })
    .min(1, { message: "Stock cant be less than 1" })
    .max(20, { message: "Stock cant be more than 100" }),
});

type FormData = z.infer<typeof schema>;

function FoodFormPage() {
  const categories = getCategories();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  function onSubmit(data: FormData) {
    console.log("Submitted", data);
    saveFood(data);
    navigate("/");
  }

  const { id } = useParams();

  return (
    <>
      <div className="vh-100 d-grid justify-content-center align-content-center">
        <h1 className="text-center mb-3">FoodForm {id} </h1>
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
            <div className="mb-2 mt-4">
              <select
                {...register("categoryId")}
                id="disabledSelect"
                className="form-select">
                <option value={""}>Categories</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
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
