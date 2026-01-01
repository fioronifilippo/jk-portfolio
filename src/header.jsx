import { useState } from "react";
import "./header.css";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="headerContenitore">
        <a href="/index.html" target="">
          <img src="/JozefinaKoliqi.svg" className="logo" alt="Jozefina logo" />
        </a>
        <a href="/about-me.html" className="linkHeader">
          ABOUT ME
        </a>
      </div>
    </>
  );
}

export default Header;
