import { useAuthState } from "../state/auth/hook";
import { Navigate, Outlet } from "react-router-dom";

const UserLayout = () => {
  const { authenticated } = useAuthState();

  if (!authenticated) return <Navigate to="/auth" />;

  return <Outlet />;
};

export default UserLayout;
