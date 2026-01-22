import { Link, useLocation } from "react-router-dom";
import "./header.css";

function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header id="headerContenitore">
      {/* Il logo riceve la classe "nascondi-logo-mobile" se NON siamo in Home */}
      <Link to="/" className={`logo ${!isHome ? "nascondi-logo-mobile" : ""}`}>
        JOZEFINA KOLIQI
      </Link>

      {/* Mostra la scritta HOME solo se NON siamo in Home */}
      {!isHome && (
        <Link to="/" className="linkHeaderHome">
          HOME
        </Link>
      )}

      <Link to="/about-me" className="linkHeader">
        ABOUT ME
      </Link>
    </header>
  );
}

export default Header;
