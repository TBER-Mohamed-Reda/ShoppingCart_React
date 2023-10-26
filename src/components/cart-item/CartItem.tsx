import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import products from "../../data/products.json";
import { dollarCurrency } from "../../utils/FormatCurrency";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import "./cartItem.css";

type CartItemProps = {
  id: number;
  quantity: number;
};
const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useContext(ShoppingCartContext);
  const product = products.find((product) => product.id == id);
  if (product == null) return null;
  return (
    <>
      <a className="card1">
        <h1>{product.title}</h1>
        <p className="small">{product.description}</p>
        <h3>{dollarCurrency(product.price)}</h3>
        <h3>{dollarCurrency(product.price * quantity)}</h3>
        <FontAwesomeIcon
          icon={faX}
          bounce
          style={{ color: "#F54DC3" }}
          onClick={() => removeFromCart(product.id)}
        />
        <div className="go-corner">{quantity}</div>
      </a>
    </>
  );
};
export default CartItem;
