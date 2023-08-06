import {
  GetTransactionsResponse,
  ITransaction,
} from "../../interfaces/transaction";
import Axios from "./axios";

class TransactionClient {
  public getTransactions = async (
    page = 1,
    limit = 10
  ): Promise<GetTransactionsResponse> => {
    const res = await Axios.get(`/transactions?page=${page}&limit=${limit}`);
    return res.data;
  };

  public initiateTransfer = async (
    amount: string,
    recipient: string,
    note: string
  ): Promise<ITransaction> => {
    const res = await Axios.post("/transactions", {
      type: "TRANSFER",
      amount,
      to: recipient,
      note,
    });
    return res.data;
  };
}

export default TransactionClient;
