import { FC } from "react";
import cn from "classnames";
import { TransactionType } from "../interfaces/transaction";
import { RightCaretIcon } from "./icons/right-caret";
import { TopUpIcon } from "./icons/top-up";
import { WithdrawIcon } from "./icons/withdraw";

export interface TransactionProps {
  type: TransactionType;
  amount: string;
  note: string;
  datetime: string;
  last?: boolean;
}

const Transaction: FC<TransactionProps> = ({
  type,
  amount,
  note,
  datetime,
  last,
}) => {
  return (
    <li
      className={cn("flex justify-between cursor-pointer items-center pb-3", {
        "border-b border-neitral-900/20": !last,
      })}
    >
      <div className="flex items-center gap-x-2 leading-tight">
        <span className="w-[54px] h-[54px] bg-[#5033A4] flex justify-center items-center rounded-md">
          {type === TransactionType.INCOMING ? <TopUpIcon /> : <WithdrawIcon />}
        </span>
        <span>
          <p className="font-medium text-[#191919] capitalize">{note}</p>
          <p className="text-xs text-[#78838D] mt-1">{datetime}</p>
        </span>
      </div>
      <span className="flex items-center">
        <p
          className={cn("text-sm mr-2", {
            "text-green-700": type === TransactionType.INCOMING,
            "text-red-700": type === TransactionType.OUTGOING,
          })}
        >
          {type === TransactionType.INCOMING ? "+" : "-"}₦{amount}
        </p>
        <RightCaretIcon />
      </span>
    </li>
  );
};

export default Transaction;
