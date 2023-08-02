import { useAuthState } from "../state/auth/hook";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const { authenticated } = useAuthState();

  if (authenticated) return <Navigate to="/" />;

  return (
    <>
      <header>THis is Auth</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
