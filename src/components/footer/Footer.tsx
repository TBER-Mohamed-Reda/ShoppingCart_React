import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <FontAwesomeIcon icon={faFacebook} beatFade size="lg" />
      <FontAwesomeIcon icon={faTwitter} beatFade size="lg" />
      <FontAwesomeIcon icon={faInstagram} beatFade size="lg" />
      <FontAwesomeIcon icon={faTiktok} beatFade size="lg" />
      <ul className="list-inline">
        <li className="list-inline-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-inline-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <span>Tber Dev © 2023</span>
    </footer>
  );
};
export default Footer;
