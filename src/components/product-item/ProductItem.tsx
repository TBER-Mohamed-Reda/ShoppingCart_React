import { Card, Col, Row } from "react-bootstrap";
import { dollarCurrency } from "../../utils/FormatCurrency";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { useContext } from "react";
import "./productItem.css";

type ProductItemProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  picture: string;
};
const ProductItem = ({
  id,
  title,
  price,
  description,
  picture,
}: ProductItemProps) => {
  const {
    getItemQuantity,
    incrementItemQuantity,
    decrementItemQuantity,
    removeFromCart,
  } = useContext(ShoppingCartContext);
  const quantity = getItemQuantity(id);
  return (
    <Card className="card">
      <Card.Img src={picture} />
      <Card.Body>
        <Card.Title className="title">{title}</Card.Title>
        <Card.Text className="description">{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="actions">
        <span className="price">{dollarCurrency(price)}</span>
        {quantity == 0 ? (
          <button className="add-btn" onClick={() => incrementItemQuantity(id)}>
            <span className="sp">Add to cart</span>
          </button>
        ) : (
          <>
            <Row>
              <Col>
                <button
                  className="rainbow-hover"
                  onClick={() => incrementItemQuantity(id)}
                >
                  <FontAwesomeIcon icon={faPlus} fade />
                </button>
              </Col>
              <Col>
                <button
                  className="rainbow-hover"
                  onClick={() => decrementItemQuantity(id)}
                >
                  <FontAwesomeIcon icon={faMinus} fade />
                </button>
              </Col>
            </Row>
            <Row>
              <Col>
                <button
                  className="delete-button"
                  onClick={() => removeFromCart(id)}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    style={{ color: "#fcfcfc" }}
                  />
                </button>
              </Col>
            </Row>
            <Row className="row">
              <span className="sp">{quantity} in cart</span>
            </Row>
          </>
        )}
      </Card.Footer>
    </Card>
  );
};
export default ProductItem;
