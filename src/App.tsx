import Menu from "./components/menu/Menu";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <ShoppingCartProvider>
      <Menu />
      <AppRoutes />
      <Footer />
    </ShoppingCartProvider>
  );
}

export default App;
