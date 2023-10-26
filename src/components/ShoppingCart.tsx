import { Offcanvas, Stack } from "react-bootstrap";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import CartItem from "./cart-item/CartItem";
import storeItems from "../data/products.json";
import { dollarCurrency } from "../utils/FormatCurrency";

type ShoppingCartProps = {
  isOpen: boolean;
};
const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, products } = useContext(ShoppingCartContext);
  return (
    <Offcanvas
      show={isOpen}
      placement="end"
      onHide={closeCart}
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="sp">Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {products.map((product) => (
            <CartItem key={product.id} {...product} />
          ))}
          <h3 className="sp">
            Total{" "}
            {dollarCurrency(
              products.reduce((total, product) => {
                const item = storeItems.find(
                  (storeItem) => storeItem.id === product.id
                );
                return total + (item?.price || 0) * product.quantity;
              }, 0)
            )}
          </h3>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default ShoppingCart;
