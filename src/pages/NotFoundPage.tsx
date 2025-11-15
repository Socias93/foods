import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div className="vh-100 d-grid justify-content-center align-content-center">
      <h1>404 page not found</h1>
      <div className="text-center">
        <NavLink to={"/"} className="btn btn-outline-dark mt-2 w-50">
          Go back
        </NavLink>
      </div>
    </div>
  );
}

export default NotFound;
