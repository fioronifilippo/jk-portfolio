import { Link } from "react-router-dom";
import "./header.css";

function HeaderAbout() {
  return (
    <header id="headerContenitore">
      {/* Usiamo Link per tornare alla Home senza ricaricare */}
      <Link to="/" className="linkHeader">
        HOME
      </Link>
    </header>
  );
}

export default HeaderAbout;
