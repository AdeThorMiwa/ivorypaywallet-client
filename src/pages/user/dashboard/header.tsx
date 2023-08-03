import ActionButton from "../../../components/ActionButton";
import VerticalBar from "../../../components/VerticalBar";
import { TopUpIcon } from "../../../components/icons/top-up";
import { TransferIcon } from "../../../components/icons/transfer";
import { WithdrawIcon } from "../../../components/icons/withdraw";
import Settings from "./../../../assets/img/settings.png";

const Header = () => {
  return (
    <header className="bg-[#270685] text-white p-4 pb-10 pt-5 space-y-10">
      <section className="w-full max-w-[500px] mx-auto">
        <section className="flex justify-between">
          <div className="flex gap-x-2 items-center">
            <span className="h-[40px] w-[40px] block rounded-full overflow-hidden border border-white p-[2px]">
              <img
                src="https://api.dicebear.com/6.x/thumbs/svg?seed=Bandit&flip=true&radius=50"
                alt=""
              />
            </span>
            <div className="text-sm">
              <span className="block">Hello,</span>
              <span className="block">Abdullahi</span>
            </div>
          </div>
          <span>
            <img src={Settings} alt="" className="p-3" />
          </span>
        </section>
        <section
          className="w-full mt-4 py-6 px-8 rounded-2xl"
          style={{
            background:
              "linear-gradient(200deg, #5033A4 0%, rgba(51, 16, 152, 0.65) 100%)",
          }}
        >
          <div className="text-center">
            <span className="block text-xs text-[#B2A1E4]">Main Balance</span>
            <span className="block text-4xl mt-4 font-semibold">
              $14,235<sub className="font-normal text-lg">.34</sub>
            </span>
          </div>
          <div className="flex text-xs justify-between items-center mt-6">
            <ActionButton text="Top up" icon={<TopUpIcon />} />
            <VerticalBar />
            <ActionButton text="Withdraw" icon={<WithdrawIcon />} />
            <VerticalBar />
            <ActionButton text="Transfer" icon={<TransferIcon />} />
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;
