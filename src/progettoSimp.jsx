import "./progetto.css";

function ProgettoSimp({ titolo, descrizione }) {
  return (
    <>
      <div id="progettoContenitore">
        <h1>{titolo}</h1>
        <p>{descrizione}</p>
      </div>
      {/* Manteniamo il div vuoto come nel tuo originale, 
          nel caso servisse per spaziatura CSS */}
      <div id="progettoImmagine"></div>
    </>
  );
}

export default ProgettoSimp;
