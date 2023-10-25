import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import products from "../data/products.json";
import { Stack } from "react-bootstrap";
import { dollarCurrency } from "../utils/FormatCurrency";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

type CartItemProps = {
  id: number;
  quantity: number;
};
const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useContext(ShoppingCartContext);
  const product = products.find((product) => product.id == id);
  if (product == null) return null;
  return (
    <Stack direction="horizontal" gap={2}>
      <img src={product.picture} style={{ width: "100px", height: "100px" }} />
      {quantity}
      {product.title}
      {dollarCurrency(product.price)}
      {dollarCurrency(product.price * quantity)}
      <FontAwesomeIcon
        icon={faX}
        bounce
        style={{ color: "#f32b2b" }}
        onClick={() => removeFromCart(product.id)}
      />
    </Stack>
  );
};
export default CartItem;
