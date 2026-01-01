import { useState } from "react";
import "./progetto.css";

function Progetto({ titolo, descrizione, url }) {
  return (
    <>
      <div id="progettoContenitore">
        <h1>{titolo}</h1>
        <p>{descrizione}</p>
      </div>
      <div id="progettoImmagine">
        <img class="immagine-piena" src={url} alt=""></img>
      </div>
    </>
  );
}

export default Progetto;
