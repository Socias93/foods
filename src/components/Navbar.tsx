import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={""} className="clickable navbar-brand">
          Intensive Foods
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"foods"} className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"orders"} className="nav-link">
                Orders
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"customers"} className="nav-link">
                Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"login"} className="nav-link">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"register"} className="nav-link">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
