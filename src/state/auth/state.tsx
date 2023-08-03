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
  authenticate: Dispatch<SetStateAction<string>>;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

const AuthState: FC<PropsWithChildren> = ({ children }) => {
  const [authToken, authenticate] = useLocalStorageState<string>("auth.token");

  const values: AuthContextProps = useMemo(
    () => ({
      authenticated: !!authToken,
      authenticate,
    }),
    [authToken, authenticate]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthState;
