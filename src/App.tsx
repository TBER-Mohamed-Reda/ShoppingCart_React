import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import ProductList from "./components/ProductList";
import About from "./components/About";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Menu />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
