import { ReactNode, createContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import useLocalStorage from "../hooks/useLocalStorage";

type ShoppingCartContextType = {
  getItemQuantity: (id: number) => number;
  incrementItemQuantity: (id: number) => void;
  decrementItemQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  products: Product[];
};
type ShoppingCartProviderProps = {
  children: ReactNode;
};
type Product = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [products, setProducts] = useLocalStorage(
    "shoppingCart",
    [] as Product[]
  );
  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getItemQuantity = (id: number): number => {
    return (
      products.find((product: Product) => product.id === id)?.quantity || 0
    );
  };
  const cartQuantity = products.reduce(
    (quantity: number, product: Product) => product.quantity + quantity,
    0
  );

  const incrementItemQuantity = (id: number): void => {
    setProducts((currentProducts: Product[]) => {
      if (products.find((product: Product) => product.id === id) == null) {
        return [...currentProducts, { id, quantity: 1 }];
      } else {
        return currentProducts.map((product: Product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      }
    });
  };
  const decrementItemQuantity = (id: number): void => {
    setProducts((currentProducts: Product[]) => {
      if (
        products.find((product: Product) => product.id === id)?.quantity === 1
      ) {
        return currentProducts.filter((product: Product) => product.id !== id);
      } else {
        return currentProducts.map((product: Product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
      }
    });
  };

  const removeFromCart = (id: number): void => {
    setProducts((currentProducts: Product[]) => {
      return currentProducts.filter((product: Product) => product.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        incrementItemQuantity,
        decrementItemQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartQuantity,
        products,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};
export { ShoppingCartProvider, ShoppingCartContext };
