import AuthClient from "./auth";
import TransactionClient from "./transaction";
import UserClient from "./user";
import WalletClient from "./wallet";

class ApiClient {
  public readonly auth = new AuthClient();
  public readonly user = new UserClient();
  public readonly wallet = new WalletClient();
  public readonly transaction = new TransactionClient();
}

export default new ApiClient();
