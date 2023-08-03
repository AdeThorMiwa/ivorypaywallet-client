import AuthClient from "./auth";

class ApiClient {
  public readonly auth = new AuthClient();
}

export default new ApiClient();
