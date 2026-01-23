import Progetto from "./progetto.jsx";

export default function WebDesign() {
  return (
    <main className="main progettiContenitore">
      <Progetto
        titolo={<>UI/UX CASE STUDY</>}
        descrizione={
          <>
            This prototype was originally created as a design challenge for a
            job application. I was tasked with reimagining an existing site
            under a tight deadline, focusing on how to modernize the look while
            keeping the user experience seamless. Even though the project stayed
            in the prototype phase; it was a great exercise in thinking fast and
            designing with a clear objective in mind.
          </>
        }
      />
      <div className="sezione-singola">
        <h3 className="testoS">BEFORE</h3>
      </div>
      <div className="centrata bottomP">
        <img src="/website-before.png" alt="" />
      </div>
      <div className="sezione-singola">
        <h3 className="testoS">AFTER</h3>
      </div>
      <div className="centrata">
        <img src="/websitemin.png" alt="" />
      </div>
    </main>
  );
}
