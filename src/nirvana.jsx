import Progetto from "./progetto.jsx";

export default function Nirvana() {
  return (
    <main className="main progettiContenitore">
      <Progetto
        titolo="ALL NIGHT LONG"
        descrizione={
          <>
            For a whole night, intertwining between photography and alternative
            methods of self publishing involved several participants in the
            discovery of analog printing processes. Firstly by printing a series
            of photograms and secondly by manipulating and joining them in order
            to create a booklet. I was excited to work on this workshop by
            creating something which I’m proud of. <br />
            “Nirvana” represents the moment where technical process meets
            creative freedom, resulting in a fanzine that is as much about the
            ritual of making as it is about the final image. By moving from the
            creation of raw photograms to the final physical binding, the
            project challenged us to explore how alternative media can transform
            static images into a cohesive, shared narrative. The result is a
            piece that values the ‘imperfections’ of the human touch over
            digital precision.
          </>
        }
      />
      <div id="contenitoreSfondo" className="sfondoNero">
        <div id="due-colonne">
          <img src="/nirvana1.png" alt="" />
          <img src="/nirvana2.png" alt="" />
          <img src="/nirvana3.png" alt="" />
          <img src="/nirvana4.png" alt="" />
          <img src="/nirvana5.png" alt="" />
          <img src="/nirvana6.png" alt="" />
          <img src="/nirvana7.png" alt="" />
          <img src="/nirvana8.png" alt="" />
        </div>
      </div>
      <div id="x-colonne">
        <div>
          <img src="/nirvana-11.jpg" alt="" />
          <img src="/nirvana-9.jpg" alt="" />
        </div>
        <div>
          <img src="/nirvana-10.jpg" alt="" />
        </div>
      </div>
    </main>
  );
}
