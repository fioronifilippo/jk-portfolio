import Progetto from "./progetto.jsx";

export default function Cinema() {
  return (
    <main className="main progettiContenitore">
      <Progetto
        titolo={
          <>
            Cinema &<br />
            Photography
          </>
        }
        descrizione={
          <>
            This is a website prototype that I did for fun and to add to my
            portfolio. Wanted to improve myself into web designing.
          </>
        }
      />
      <div className="centrata">
        <img src="/cinema-1.png" alt="" />
      </div>
      <div id="due-colonne">
        <img className="width370" src="/cinema-new-1.png" alt="" />
        <img className="width370" src="/cinema-new-2.png" alt="" />
      </div>
    </main>
  );
}
