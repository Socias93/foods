import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import {
  CustomersPage,
  FoodsPage,
  LoginPage,
  OrdersPage,
  RegisterPage,
} from "../pages/types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <FoodsPage /> },
      {
        path: "foods",
        element: <FoodsPage />,
      },
      {
        path: "orders",
        element: <OrdersPage />,
      },
      {
        path: "customers",
        element: <CustomersPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
