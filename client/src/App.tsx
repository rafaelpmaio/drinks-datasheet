import "./styles/index.scss";
import NavMenu from "./components/NavMenu";
import { AppRoutes } from "components/AppRoutes";
import { AppContextProviders } from "components/AppContextProviders";
import Footer from "components/Footer";

function App() {
  return (
    <AppContextProviders>
      <NavMenu />
      <AppRoutes />
      <Footer />
    </AppContextProviders>
  );
}

export default App;
