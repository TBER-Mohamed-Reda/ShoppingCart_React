import { Offcanvas, Stack } from "react-bootstrap";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import storeItems from "../data/products.json";

type ShoppingCartProps = {
  isOpen: boolean;
};
const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, products } = useContext(ShoppingCartContext);
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {products.map((product) => (
            <CartItem key={product.id} {...product} />
          ))}
          <span>
            Total{" "}
            {products.reduce((total, product) => {
              const item = storeItems.find(
                (storeItem) => storeItem.id === product.id
              );
              return total + (item?.price || 0) * product.quantity;
            }, 0)}
          </span>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default ShoppingCart;
