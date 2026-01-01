import { useState } from "react";
import "./header.css";

function HeaderAbout() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="headerContenitore">
        <a href="/index.html" className="linkHeader">
          HOME
        </a>
      </div>
    </>
  );
}

export default HeaderAbout;
