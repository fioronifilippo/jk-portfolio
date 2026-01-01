import { useState } from "react";
import "./progetto.css";

function ProgettoSimp({ titolo, descrizione }) {
  return (
    <>
      <div id="progettoContenitore">
        <h1>{titolo}</h1>
        <p>{descrizione}</p>
      </div>
      <div id="progettoImmagine"></div>
    </>
  );
}

export default ProgettoSimp;
