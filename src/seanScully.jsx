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
      <div id="due-colonne" className="">
        <img src="/s1.png" alt="" />
        <img src="/s2.png" alt="" />
      </div>
      <div id="due-colonne" className="">
        <img src="/s3.png" alt="" />
        <img src="/s4.png" alt="" />
      </div>
      <div id="img-centrata" className="scully-pad">
        <img src="/scully.png" alt="" />
      </div>
    </main>
  );
}
