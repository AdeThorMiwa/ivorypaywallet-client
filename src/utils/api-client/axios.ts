import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth.token");
  if (token && token !== "undefined") {
    config.headers["Authorization"] = `Bearer ${JSON.parse(token)}`;
  }
  return config;
}, Promise.reject);

instance.interceptors.response.use(
  (c) => c,
  (error) => {
    if (error.response.status === 401) {
      window.localStorage.removeItem("auth.token");
    }

    return Promise.reject(error);
  }
);

export default instance;

export const setAuthHeader = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
