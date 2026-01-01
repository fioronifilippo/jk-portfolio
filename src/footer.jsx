import { useState } from "react";
import "./footer.css";

function Footer() {
  const [count, setCount] = useState(0);

  return (
    <>
      <footer id="footerContenitore">
        <span>© Jozefina Koliqi 2025</span>
        <span>Designed by me & developed by my husband Filippo Fioroni</span>
      </footer>
    </>
  );
}

export default Footer;
