import Axios, { setAuthHeader } from "./axios";

class AuthClient {
  public register = async (
    username: string,
    password: string,
    authToken: string
  ): Promise<string> => {
    const res = await Axios.post(
      "/users",
      { username, password },
      setAuthHeader(authToken)
    );
    return res.data.token;
  };

  public login = async (email: string, password: string): Promise<string> => {
    const res = await Axios.post("/auth", { email, password });
    return res.data.token;
  };
}

export default AuthClient;
