import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Progetto from "./progetto.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <main className="main progettiContenitore">
      <Progetto
        titolo={
          <>
            Cinema &<br />
            Photography
          </>
        }
        descrizione={
          <>
            This is a website prototype that I did for fun and to add to my
            portfolio. Wanted to improve myself into web designing.
          </>
        }
      />
      <>
        <div className="centrata spazio-100">
          <img src="/cinema-1.png" alt="" />
        </div>
        <div id="due-colonne">
          <img className="width370" src="/cinema-2.png" alt="" />
          <img className="width370" src="/cinema-3.png" alt="" />
        </div>
      </>
    </main>
    <Footer />
  </StrictMode>
);
