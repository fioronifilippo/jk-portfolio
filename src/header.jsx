import { Link } from "react-router-dom"; // Fondamentale per non ricaricare la pagina
import "./header.css";

function Header() {
  return (
    <header id="headerContenitore">
      {/* Link alla Home */}
      <Link to="/">
        <img src="/JozefinaKoliqi.svg" className="logo" alt="Jozefina logo" />
      </Link>

      {/* Link alla pagina About Me */}
      <Link to="/about-me" className="linkHeader">
        ABOUT ME
      </Link>
    </header>
  );
}

export default Header;
