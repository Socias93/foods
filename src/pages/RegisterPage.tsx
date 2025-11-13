import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormData, schema } from "./schemas/RegisterSchema";

function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  function onSubmit(data: FormData) {
    console.log("Submitted", data);
    navigate("/");
  }

  return (
    <>
      <div className="vh-100 d-grid justify-content-center align-content-center">
        <h2 className="mb-4 text-center">Login</h2>
        <div className="p-3 shadow rounded-4" style={{ width: 400 }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label className="form-label">Name</label>
              <input
                {...register("name")}
                type="text"
                className="form-control"
              />
              {errors.name && (
                <p className="text-danger"> {errors.name.message} </p>
              )}
            </div>
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input
                {...register("email")}
                type="email"
                className="form-control"
              />
              {errors.email && (
                <p className="text-danger"> {errors.email.message} </p>
              )}
            </div>
            <div className="mb-2">
              <label className="form-label">Password</label>
              <input
                {...register("password")}
                type="text"
                className="form-control"
              />
              {errors.password && (
                <p className="text-danger"> {errors.password.message} </p>
              )}
            </div>
            <div className="text-center">
              <button className="btn btn-outline-dark m-2 w-50">Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
