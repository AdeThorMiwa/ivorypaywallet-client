import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserRoutes } from "./user-routes";

const Routes = () => {
  const router = createBrowserRouter([...UserRoutes]);

  return <RouterProvider router={router} />;
};

export default Routes;
