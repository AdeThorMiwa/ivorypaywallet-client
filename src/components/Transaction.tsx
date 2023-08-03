import { FC } from "react";
import Wallmart from "../assets/img/Wallmart.png";
import cn from "classnames";
import { TransactionType } from "../interfaces/transaction";

interface TransactionProps {
  type: TransactionType;
  last?: boolean;
}

const Transaction: FC<TransactionProps> = ({ type, last }) => {
  return (
    <div
      className={cn("flex justify-between items-center pb-3", {
        "border-b border-neitral-900/20": !last,
      })}
    >
      <div className="flex items-center gap-x-2 leading-tight">
        <img src={Wallmart} alt="" className="w-10 h-10" />
        <span>
          <p className="font-medium text-[#191919]">Wallmart</p>
          <p className="text-xs text-[#78838D] mt-1">Today 12:32</p>
        </span>
      </div>
      <span className="flex items-center">
        <p
          className={cn("text-sm mr-2", {
            "text-green-700": type === TransactionType.INCOMING,
            "text-red-700": type === TransactionType.OUTGOING,
          })}
        >
          {type === TransactionType.INCOMING ? "+" : "-"}$353.23
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M8.78132 7.99999L5.48132 4.69999L6.42399 3.75732L10.6667 7.99999L6.42399 12.2427L5.48132 11.3L8.78132 7.99999Z"
            fill="#535D66"
          />
        </svg>
      </span>
    </div>
  );
};

export default Transaction;
