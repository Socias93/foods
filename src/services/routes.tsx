import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FoodsPage from "../pages/FoodsPage";

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
    ],
  },
]);

export default router;
