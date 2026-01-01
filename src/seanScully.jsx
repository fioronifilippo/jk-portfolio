import Progetto from "./progetto.jsx";

export default function SeanScully() {
  return (
    <main className="main progettiContenitore">
      <Progetto
        titolo="SEAN SCULLY"
        descrizione={
          <>
            The catalog of the works exhibited at Villa Panza, focusing
            specifically on the works of the artist Sean Scully.
          </>
        }
        url="/sean-scully.jpg"
      />
      <div id="due-colonne" className="meno150">
        <img src="/scully-7.png" alt="" />
        <img src="/scully-2.png" alt="" />
      </div>
      <div id="due-colonne" className="meno200">
        <img src="/scully-1.png" alt="" />
        <img src="/scully-6.png" alt="" />
      </div>
      <div id="img-centrata">
        <img src="/scully.png" alt="" />
      </div>
    </main>
  );
}
