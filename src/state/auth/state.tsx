import {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useMemo,
  PropsWithChildren,
  useState,
  useEffect,
} from "react";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { User } from "../../interfaces/user";
import ApiClient from "../../utils/api-client";
import { toast } from "react-hot-toast";
import { Wallet } from "../../interfaces/wallet";

interface AuthContextProps {
  authenticated: boolean;
  authenticate: Dispatch<SetStateAction<string>>;
  user?: User;
  wallet?: Wallet;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

const AuthState: FC<PropsWithChildren> = ({ children }) => {
  const [authToken, authenticate] = useLocalStorageState<string>("auth.token");
  const [user, setUser] = useState<User>();
  const [wallet, setWallet] = useState<Wallet>();

  useEffect(() => {
    if (!authToken) return;

    Promise.all([
      ApiClient.user
        .getAuthenticatedUser()
        .then(setUser)
        .catch(() => toast.error("Error fetching user")),
      ApiClient.wallet
        .getUserWallet()
        .then(setWallet)
        .catch(() => toast.error("Error fetching user wallet")),
    ]);
  }, [authToken]);

  const values: AuthContextProps = useMemo(
    () => ({
      authenticated: !!authToken,
      authenticate,
      user,
      wallet,
    }),
    [authToken, authenticate, user, wallet]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthState;
