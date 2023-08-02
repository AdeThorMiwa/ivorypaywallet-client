import { useContext } from "react";
import { AuthContext } from "./state";

export const useAuthState = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("AuthState is required to use useAuthState");

  return ctx;
};
