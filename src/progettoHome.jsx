import { useState } from "react";
import { Link } from "react-router-dom"; // Importiamo Link per la navigazione interna
import "./progettoHome.css";

function ProgettoHome({ urlLink, urlImg }) {
  return (
    <>
      <div id="schedaHome">
        {/* Usiamo Link al posto di <a> e "to" al posto di "href" */}
        <Link to={urlLink}>
          <img src={urlImg} alt="Progetto" />
        </Link>
      </div>
    </>
  );
}

export default ProgettoHome;
