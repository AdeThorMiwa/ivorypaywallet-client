import { Link, Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "../state/auth/hook";
import Settings from "../assets/img/settings.png";
import WalletDetails from "../components/WalletDetails";
import { FC } from "react";
import cn from "classnames";

interface UserLayoutProps {
  showWalletDetails?: boolean;
}

const UserLayout: FC<UserLayoutProps> = ({ showWalletDetails }) => {
  const { authenticated, user } = useAuthState();

  if (!authenticated) return <Navigate to="/auth" />;

  return (
    <>
      <header
        className={cn("bg-[#270685] text-white transition-all", {
          "p-4 pb-10 pt-5 space-y-10": showWalletDetails,
          "py-2": !showWalletDetails,
        })}
      >
        <nav className="w-full max-w-[500px] mx-auto">
          <section className="flex justify-between">
            <Link to="/" className="flex gap-x-2 items-center">
              <span className="h-[40px] w-[40px] block rounded-full overflow-hidden border border-white p-[2px]">
                <img src={user?.avatar} alt="User Avatar" />
              </span>
              <div className="text-sm">
                <span className="block">Hello,</span>
                <span className="block">{user?.username}</span>
              </div>
            </Link>
            <span>
              <img src={Settings} alt="" className="p-3" />
            </span>
          </section>
          {showWalletDetails ? <WalletDetails /> : null}
        </nav>
      </header>
      <main className="w-full max-w-[500px] mx-auto mt-5">
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;
