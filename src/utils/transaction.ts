import { TransactionProps } from "../components/Transaction";
import { ITransaction, TransactionType } from "../interfaces/transaction";

export const transactionTransformer = (
  transaction: ITransaction
): TransactionProps => {
  return {
    type:
      transaction.type === "DEPOSIT"
        ? TransactionType.INCOMING
        : TransactionType.OUTGOING,
    datetime: "Today 12:32",
    amount: transaction.amount,
    note: transaction.note,
  };
};
