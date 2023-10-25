import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHouse,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Menu = () => {
  const { openCart, cartQuantity } = useContext(ShoppingCartContext);
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand>
          <FontAwesomeIcon icon={faShop} spin />
          <span
            className="sp"
            style={{ display: "inline-block", margin: "0 20px" }}
          >
            Universe of Goods
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              <FontAwesomeIcon icon={faHouse} />
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {cartQuantity > 0 && (
          <>
            <FontAwesomeIcon
              onClick={openCart}
              icon={faCartShopping}
              beat
              size="lg"
              style={{ color: "#000000" }}
            />
            <span className="sp">{cartQuantity}</span>
          </>
        )}
      </Container>
    </Navbar>
  );
};
export default Menu;
