import "./progetto.css";

function Progetto({ titolo, descrizione, url }) {
  return (
    <>
      <div id="progettoContenitore">
        <h1>{titolo}</h1>
        <p>{descrizione}</p>
      </div>
      {/* Mostra il div dell'immagine solo se l'URL esiste effettivamente */}
      {url && (
        <div id="progettoImmagine">
          <img className="immagine-piena" src={url} alt={titolo}></img>
        </div>
      )}
    </>
  );
}

export default Progetto;
