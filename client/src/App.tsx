import "./styles/index.scss";
import NavMenu from "./components/NavMenu";
import { AppRoutes } from "components/AppRoutes";
import { AppContextProviders } from "components/AppContextProviders";

function App() {
  return (
    <AppContextProviders>
      <NavMenu />
      <AppRoutes />
    </AppContextProviders>
  );
}

export default App;
