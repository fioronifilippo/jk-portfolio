import Progetto from "./progetto.jsx";

export default function EyesEars() {
  return (
    <main className="main progettiContenitore">
      <Progetto
        titolo="EYES & EARS"
        descrizione={
          <>
            Eyes & Ears Treasure Hunt: Art History and Language Learning for
            Children promotes the appreciation of the Italian cultural heritage.
            The project creates itineraries of outdoor learning in which
            children, families, and school groups search for hidden works of art
            by following clues in the form of illustrations and stories. <br />
            Eyes & Ears Treasure Hunt was created in the Florence Academy of
            Fine Arts, Italy by a multicultural team of professors, PhD and
            graduate students, and researchers from Italy, U.S.A, Mexico,
            Albania, and China. <br />
            "Eyes and Ears" is a project based on audiovisual language. The
            purpose of the project is to provide a linguistic foundation through
            sequential images, serving as the basis for forming spoken
            sentences. The images would remain the same for every language; the
            only difference would be their sequence, which needed to correspond
            to the syntax of the languages chosen - English, Chinese, Spanish,
            and Italian.
          </>
        }
      />
      <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TPW5UF0evn0?si=mxEVfl5Y_1szEwBp"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div id="due-colonne-eyes" className="bottomP">
        <div className="left-align-eyes">
          <h1 className="balooText balooh1">Baloo 2</h1>
          <h2 className="balooText balooh2">
            ABCDEFGHIJKLMN<br></br>OPQRSTUVWXYZ<br></br>abcdefghijklmn
            <br></br>opqrstuvwxyz<br></br>1234567890
          </h2>
          <p className="balooText baloop">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="colonna-item-eyes">
          <img src="/eyes-baloo.png" alt="" />
        </div>
      </div>
      <div id="contenitoreSfondoS" className="sfondoBianco sezioneS">
        <div className="sezione-singola">
          <img className="img-eyes-sing" src="/eyes-s1.png" alt="Main" />
          <p className="testoS">
            The Eyes & Ears logo is created around a square, a shape that feels
            simple, familiar, and its subtle reference to the form of a book. To
            bring the name to life, we added eyes and ears to visually reinforce
            the brand name, symbolizing observation, listening, and making the
            design both clear and memorable.
          </p>
        </div>
      </div>
      <div id="contenitoreSfondo" className="sfondoBianco due-colonne-eyes">
        <div id="lingue-grid">
          <div className="colonna-item">
            <img className="img-eyes" src="/eyes-2.png" alt="" />
            <h3>ENGLISH</h3>
          </div>
          <div className="colonna-item">
            <img className="img-eyes" src="/eyes-1.png" alt="" />
            <h3>ITALIAN</h3>
          </div>
          <div className="colonna-item">
            <img className="img-eyes" src="/eyes-4.png" alt="" />
            <h3>CHINESE</h3>
          </div>
          <div className="colonna-item">
            <img className="img-eyes" src="/eyes-3.png" alt="" />
            <h3>SPANISH</h3>
          </div>
        </div>
      </div>
      <div id="eyes-colonne" className="primo-eyes">
        <img src="/duomo-1.png" alt="" />
        <img src="/duomo-5.png" alt="" />
        <img src="/duomo-4.png" alt="" />
        <img src="/duomo-3.png" alt="" />
        <img src="/duomo-2.png" alt="" />
        <img src="/duomo-0.png" alt="" />
        <img src="/duomo-6.png" alt="" />
        <img src="/duomo-8.png" alt="" />
      </div>
      <div id="eyes-colonne">
        <img src="/cover6.png" alt="" />
        <img src="/duomo-7.png" alt="" />
        <img src="/duomo-9.png" alt="" />
        <img src="/duomo-10.png" alt="" />
        <img src="/duomo-88.png" alt="" />
        <img src="/duomo-11.png" alt="" />
        <img src="/duomo-12.png" alt="" />
        <img src="/cover1.png" alt="" />
      </div>
      <div id="eyes-colonne">
        <img src="/cover5.png" alt="" />
        <img src="/duomo-13.png" alt="" />
        <img src="/duomo-14.png" alt="" />
        <img src="/duomo-15.png" alt="" />
        <img src="/duomo-16.png" alt="" />
        <img src="/duomo-17.png" alt="" />
        <img src="/duomo-18.png" alt="" />
        <img src="/cover2.png" alt="" />
      </div>
      <div id="eyes-colonne" className="ultimo-eyes">
        <img src="/cover3.png" alt="" />
        <img src="/duomo-19.png" alt="" />
        <img src="/duomo-20.png" alt="" />
        <img src="/duomo-21.png" alt="" />
        <img src="/duomo-22.png" alt="" />
        <img src="/duomo-23.png" alt="" />
        <img src="/duomo-24.png" alt="" />
        <img src="/cover4.png" alt="" />
      </div>
      <div id="contenitoreSfondoS" className="sezioneS">
        <div className="sezione-singola">
          <p className="testoS">App/Web prototype</p>
          <img className="eyes-app-img" src="/eyes-app.png" alt="Main" />
        </div>
      </div>
      <div id="due-colonne">
        <img src="/eyes-social.png" alt="Immagine" />

        <div className="colonna-video">
          <div className="video-verticale bordo-img-social">
            <iframe
              src="https://youtube.com/embed/QLGzqPOEF3w"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-verticale bordo-img-social">
            <iframe
              src="https://youtube.com/embed/LOXbpuGq9ec?si=34j1ZmDMtRg0vMkr"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-verticale bordo-img-social">
            <iframe
              src="https://youtube.com/embed/WC_5EWNC8rI?si=m-J4lHxx799ZYj7D"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
