import { User } from "../../interfaces/user";
import Axios from "./axios";

class UserClient {
  public getAuthenticatedUser = async (): Promise<User> => {
    const res = await Axios.get("/users/me");
    return res.data;
  };
}

export default UserClient;
