import { Wallet } from "../../interfaces/wallet";
import Axios from "./axios";

class WalletClient {
  public getUserWallet = async (): Promise<Wallet> => {
    const res = await Axios.get("/wallets/me");
    return res.data;
  };
}

export default WalletClient;
