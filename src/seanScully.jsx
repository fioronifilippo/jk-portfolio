import Progetto from "./progetto.jsx";

export default function SeanScully() {
  return (
    <main className="main progettiContenitore">
      <Progetto
        titolo="SEAN SCULLY"
        descrizione={
          <>
            This editorial project involved designing a comprehensive catalog
            for Sean Scully’s exhibition at the historic Villa Panza. The design
            focuses on translating Scully's architectural use of color and
            rhythm into a printed format. By balancing structured layouts with
            generous white space, the catalog allows the weight of the artwork
            to lead the visual narrative, creating a seamless transition from
            the gallery walls to the page.
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
