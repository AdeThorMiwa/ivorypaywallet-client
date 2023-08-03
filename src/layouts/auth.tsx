import { useMemo } from "react";
import AuthImage from "../components/AuthImage";
import { useAuthState } from "../state/auth/hook";
import { Navigate, Outlet } from "react-router-dom";
import Secure from "../assets/img/Secure.png";

const AuthLayout = () => {
  const { authenticated } = useAuthState();

  const Image = useMemo(() => {
    return Secure;
  }, []);

  if (authenticated) return <Navigate to="/" />;

  return (
    <>
      <header>
        <AuthImage img={Image} />
      </header>
      <main className="w-full max-w-[350px] mt-10 mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
