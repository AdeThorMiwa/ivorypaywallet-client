import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export default instance;

export const setAuthHeader = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
