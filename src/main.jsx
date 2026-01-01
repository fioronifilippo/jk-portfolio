import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import ProgettoHome from "./progettoHome.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <main className="main">
      <div id="tutte-colonne">
        <ProgettoHome urlImg="/home8.png" urlLink="/tuttoVero.html" />
        <ProgettoHome urlImg="/home3.png" urlLink="/seanScully.html" />
        <ProgettoHome urlImg="/home7.png" urlLink="/olivello.html" />
        <ProgettoHome urlImg="/home2.png" urlLink="/eyesEars.html" />
        <ProgettoHome urlImg="/home5.png" urlLink="/casaShkodra.html" />
        <ProgettoHome urlImg="/home6.png" urlLink="/cinema.html" />
        <ProgettoHome urlImg="/home1.png" urlLink="/nirvana.html" />
        <ProgettoHome urlImg="/home4.png" urlLink="/webdesign.html" />
      </div>
    </main>
    <Footer />
  </StrictMode>
);
