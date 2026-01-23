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
            This website prototype began as a personal challenge to push my
            creative boundaries. My goal was to explore advanced UI/UX
            principles and refine my technical execution in web design,
            resulting in a project that balances aesthetics with functional
            design.
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
