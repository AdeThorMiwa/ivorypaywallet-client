import { useMemo } from "react";
import ActionButton from "./ActionButton";
import VerticalBar from "./VerticalBar";
import { TopUpIcon } from "./icons/top-up";
import { TransferIcon } from "./icons/transfer";
import { WithdrawIcon } from "./icons/withdraw";
import { useAuthState } from "../state/auth/hook";
import { useNavigate } from "react-router-dom";

const Formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NGN",
});

const WalletDetails = () => {
  const { wallet } = useAuthState();
  const navigate = useNavigate();
  const [value, decimal] = useMemo(() => {
    const formattedValue = Formatter.format(parseFloat(wallet?.balance ?? "0"));

    if (formattedValue) {
      const [value, decimal] = formattedValue.split(".");
      return [value, decimal];
    }

    return ["0", "00"];
  }, [wallet?.balance]);
  return (
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
          {value}
          <sub className="font-normal text-lg">.{decimal}</sub>
        </span>
      </div>
      <div className="flex text-xs justify-between items-center mt-6">
        <ActionButton
          text="Top up"
          icon={<TopUpIcon />}
          onClick={() => navigate("/deposit")}
        />
        <VerticalBar />
        <ActionButton
          text="Withdraw"
          icon={<WithdrawIcon />}
          onClick={() => navigate("/withdraw")}
        />
        <VerticalBar />
        <ActionButton
          text="Transfer"
          icon={<TransferIcon />}
          onClick={() => navigate("/transfer")}
        />
      </div>
    </section>
  );
};

export default WalletDetails;
