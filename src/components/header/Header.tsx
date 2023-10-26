import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon icon={faShopify} bounce size="2xl" />
      <span className="sp">
        "Welcome to our store! We're delighted to have you here. Happy
        shopping!"
      </span>
    </header>
  );
};
export default Header;
