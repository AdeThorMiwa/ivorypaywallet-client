import { Toaster } from "react-hot-toast";
import Routes from "./routes";
import AuthState from "./state/auth/state";

function App() {
  return (
    <AuthState>
      <Toaster position="top-right" />
      <Routes />
    </AuthState>
  );
}

export default App;
