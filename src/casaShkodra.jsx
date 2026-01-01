import Progetto from "./progetto.jsx";

export default function CasaShkodra() {
  return (
    <main className="main progettiContenitore">
      <Progetto
        titolo="CASA SHKODRA"
        descrizione={
          <>
            Casa Shkodra is a photographic project depicting the interior of two
            houses located in Shkoder, Albania. Both houses belong to my family,
            my maternal grandparents lived in one, who passed away when I was
            still very young and therefore the memories I have of them are very
            vague. Using Instagram as a virtual exhibit to show case a museum
            with photos of the two houses, I captured everyday moments to fill
            the spaces with lost memories. <br />
            The protagonists of the work are the characters of pictorial works,
            from the Renaissance to Neoclassicism, cut out of the painting and
            inserted into the images. Despite being outside of their space and
            time, these figures manage to convey to us a feeling of familiarity
            in domestic environments, also thanks to the caption which tells the
            scene we are observing through dialogues, descrip-tions or memes. By
            using the anaglyph technique there is greater immersion in the
            image, giving life to the characters who carry out daily actions.
          </>
        }
        url="/casas-1.png"
      />
      <div className="centrata spazio-100">
        <img src="/casas-2.png" alt="" />
      </div>
      <div className="centrata spazio-100">
        <img src="/casas-3.png" alt="" />
      </div>
      <div className="centrata spazio-100">
        <img src="/casas-4.png" alt="" />
      </div>
    </main>
  );
}
