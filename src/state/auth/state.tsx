import {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useMemo,
  PropsWithChildren,
} from "react";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";

interface AuthContextProps {
  authenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

const AuthState: FC<PropsWithChildren> = ({ children }) => {
  const [authenticated, setAuthenticated] = useLocalStorageState(
    "auth.authenticated",
    false
  );

  const values: AuthContextProps = useMemo(
    () => ({
      authenticated,
      setAuthenticated,
    }),
    [authenticated, setAuthenticated]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthState;
