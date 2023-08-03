import { useAuthState } from "../../../state/auth/hook";
import Settings from "./../../../assets/img/settings.png";
import WalletDetails from "./wallet-details";

const Header = () => {
  const { user } = useAuthState();

  return (
    <header className="bg-[#270685] text-white p-4 pb-10 pt-5 space-y-10">
      <section className="w-full max-w-[500px] mx-auto">
        <section className="flex justify-between">
          <div className="flex gap-x-2 items-center">
            <span className="h-[40px] w-[40px] block rounded-full overflow-hidden border border-white p-[2px]">
              <img src={user?.avatar} alt="User Avatar" />
            </span>
            <div className="text-sm">
              <span className="block">Hello,</span>
              <span className="block">{user?.username}</span>
            </div>
          </div>
          <span>
            <img src={Settings} alt="" className="p-3" />
          </span>
        </section>
        <WalletDetails />
      </section>
    </header>
  );
};

export default Header;
