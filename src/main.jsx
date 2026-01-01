import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Import Componenti Base
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import ProgettoHome from "./progettoHome.jsx";

// Import Pagine Progetto (Create nei passaggi precedenti)
import Olivello from "./olivello.jsx";
import TuttoVero from "./tuttoVero.jsx";
import SeanScully from "./seanScully.jsx";
import EyesEars from "./eyesEars.jsx";
import CasaShkodra from "./casaShkodra.jsx";
import Cinema from "./cinema.jsx";
import Nirvana from "./nirvana.jsx";
import WebDesign from "./webdesign.jsx";
import AboutMe from "./aboutMe.jsx";

// Componente Home (La griglia principale)
const Home = () => (
  <main className="main">
    <div id="tutte-colonne">
      <ProgettoHome urlImg="/home8.png" urlLink="/tutto-vero" />
      <ProgettoHome urlImg="/home3.png" urlLink="/sean-scully" />
      <ProgettoHome urlImg="/home7.png" urlLink="/olivello" />
      <ProgettoHome urlImg="/home2.png" urlLink="/eyes-ears" />
      <ProgettoHome urlImg="/home5.png" urlLink="/casa-shkodra" />
      <ProgettoHome urlImg="/home6.png" urlLink="/cinema" />
      <ProgettoHome urlImg="/home1.png" urlLink="/nirvana" />
      <ProgettoHome urlImg="/home4.png" urlLink="/webdesign" />
    </div>
  </main>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* ROTTE CON HEADER STANDARD (Logo + About Me) */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/olivello"
          element={
            <>
              <Header />
              <Olivello />
              <Footer />
            </>
          }
        />
        <Route
          path="/tutto-vero"
          element={
            <>
              <Header />
              <TuttoVero />
              <Footer />
            </>
          }
        />
        <Route
          path="/sean-scully"
          element={
            <>
              <Header />
              <SeanScully />
              <Footer />
            </>
          }
        />
        <Route
          path="/eyes-ears"
          element={
            <>
              <Header />
              <EyesEars />
              <Footer />
            </>
          }
        />
        <Route
          path="/casa-shkodra"
          element={
            <>
              <Header />
              <CasaShkodra />
              <Footer />
            </>
          }
        />
        <Route
          path="/cinema"
          element={
            <>
              <Header />
              <Cinema />
              <Footer />
            </>
          }
        />
        <Route
          path="/nirvana"
          element={
            <>
              <Header />
              <Nirvana />
              <Footer />
            </>
          }
        />
        <Route
          path="/webdesign"
          element={
            <>
              <Header />
              <WebDesign />
              <Footer />
            </>
          }
        />

        {/* ROTTA ABOUT ME (Usa il suo HeaderAbout interno) */}
        <Route path="/about-me" element={<AboutMe />} />

        {/* REINDIRIZZAMENTO SE L'URL È SBAGLIATO */}
        <Route
          path="*"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
