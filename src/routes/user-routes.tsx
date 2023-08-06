import { RouteObject } from "react-router-dom";
import {
  ErrorPage,
  LoginPage,
  RegisterPage,
  TransferPage,
  UserDasboardPage,
  WithdrawPage,
} from "../pages";
import UserLayout from "../layouts/user";
import AuthLayout from "../layouts/auth";

export const UserRoutes: RouteObject[] = [
  {
    path: "/",
    element: <UserLayout showWalletDetails />,
    children: [
      {
        index: true,
        element: <UserDasboardPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "withdraw",
    element: <WithdrawPage />,
  },
  {
    path: "/transfer",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <TransferPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
];
