import Progetto from "./progetto.jsx";

export default function TuttoVero() {
  return (
    <main className="main progettiContenitore">
      <Progetto
        titolo="TUTTO VERO!"
        descrizione={
          <>
            "TUTTOVERO" is the title of the gallery of posters, a linear
            polyptych composed of ten typographic signs, nine letters, and one
            punctuation mark, installed on the facade of the building on via
            Carlo Alberto (Monza), home to the Amerigo Concept Store.
            <br />
            "Biennale Monza OFF" is a series of initiatives that involve the
            city. Designed and executed by tutors, the events of the Biennale
            OFF offer the viewer the opportunity to witness performances and
            admire installations even outside the Orangerie, in line with the
            desire to make Monza a "city of the contemporary."
          </>
        }
        url="/tutto-vero.jpg"
      />
      <div>
        <img className="immagine-piena" src="/tutto-vero-3.jpg" alt="" />
      </div>
      <div id="due-colonne">
        <img src="/tutto-vero-4.jpg" alt="" />
        <img src="/tutto-vero-5.jpg" alt="" />
      </div>
      <div id="quattro-colonne">
        <img src="/tutto-vero-12.jpg" alt="" />
        <img src="/tutto-vero-13.jpg" alt="" />
        <img src="/tutto-vero-7.jpg" alt="" />
        <img src="/tutto-vero-16.jpg" alt="" />
        <img src="/tutto-vero-15.jpg" alt="" />
        <img src="/tutto-vero-14.jpg" alt="" />
        <img src="/tutto-vero-17.jpg" alt="" />
        <img src="/tutto-vero-6.jpg" alt="" />
        <img src="/tutto-vero-11.jpg" alt="" />
        <img src="/tutto-vero-10.jpg" alt="" />
        <img src="/tutto-vero-9.jpg" alt="" />
        <img src="/tutto-vero-8.jpg" alt="" />
      </div>
      <div id="due-colonne-vero">
        <img src="/tutto-vero-20.png" className="max-300" alt="" />
        <img src="/tutto-vero-22.png" alt="" />
      </div>
      <div id="due-colonne-vero">
        <img src="/tutto-vero-21.png" alt="" />
      </div>
    </main>
  );
}
