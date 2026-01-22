import Header from "./header.jsx";
import Footer from "./footer.jsx";
import Progetto from "./progetto.jsx";

// Creiamo una funzione esportabile
export default function Olivello() {
  return (
    <>
      <main className="main progettiContenitore">
        <Progetto
          titolo="OLIVELLO"
          descrizione={
            <>
              Front labels with different flavors for Olivello Toscano bottles.
            </>
          }
          url="/olivello.jpg"
        />
        <div className="olivello-desktop">
          <div id="due-colonne">
            <div className="olivello-cent">
              <h3>BEFORE</h3>
            </div>
            <div className="olivello-cent">
              <h3>AFTER</h3>
            </div>
          </div>
          <div id="due-colonne" className="olivello-cent">
            <div className="colonna-img">
              <img src="/olivello-1.png" alt="Before" />
            </div>
            <div className="colonna-img">
              <img src="/olivello-2.png" alt="After" />
            </div>
          </div>
          <div id="due-colonne" className="olivello-cent">
            <div className="colonna-img">
              <img src="/olivello-4.png" alt="Before" />
            </div>
            <div className="colonna-img">
              <img src="/olivello-5.png" alt="After" />
            </div>
          </div>
        </div>
        <div className="olivello-mobile">
          <div id="due-colonne" className="due-colonne-olivello">
            <div className="olivello-cent">
              <h3>BEFORE</h3>
            </div>
            <div className="colonna-img">
              <img src="/olivello-1.png" alt="Before" />
            </div>
            <div className="colonna-img">
              <img src="/olivello-4.png" alt="Before" />
            </div>
            <div className="olivello-cent after">
              <h3>AFTER</h3>
            </div>
            <div className="colonna-img">
              <img src="/olivello-2.png" alt="After" />
            </div>
            <div className="colonna-img">
              <img src="/olivello-5.png" alt="After" />
            </div>
          </div>
        </div>
        <div id="quattro-colonne-olivello">
          <img className="height400" src="/olivello-3.png" alt="" />
          <img className="height400" src="/olivello-6.png" alt="" />
          <img className="height400" src="/olivello-7.png" alt="" />
          <img className="height400" src="/olivello-8.png" alt="" />
        </div>
      </main>
    </>
  );
}
