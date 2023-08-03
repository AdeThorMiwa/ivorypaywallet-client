import AuthClient from "./auth";
import UserClient from "./user";
import WalletClient from "./wallet";

class ApiClient {
  public readonly auth = new AuthClient();
  public readonly user = new UserClient();
  public readonly wallet = new WalletClient();
}

export default new ApiClient();
