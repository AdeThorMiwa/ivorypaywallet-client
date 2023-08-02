import Routes from "./routes";
import AuthState from "./state/auth/state";

function App() {
  return (
    <AuthState>
      <Routes />
    </AuthState>
  );
}

export default App;
