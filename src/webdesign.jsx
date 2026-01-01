import Progetto from "./progetto.jsx";

export default function WebDesign() {
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
      <div className="centrata spazio-100">
        <img src="/websitemin.png" alt="" />
      </div>
    </main>
  );
}
