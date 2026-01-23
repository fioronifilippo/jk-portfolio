import HeaderAbout from "./headerAbout.jsx";
import Footer from "./footer.jsx";

export default function AboutMe() {
  return (
    <>
      <div id="aboutMeB" className="layout-about">
        <HeaderAbout />
        <main className="main">
          <div id="about-contenitore">
            <div>
              <h1 className="">About Me</h1>
              <br />
              <br />
              <p className="">
                My name is Jozefina Koliqi. I'm a Graphic Designer based in
                Italy, born and raised in Albania. I’ve been working as a
                freelancer on various projects for local businesses, design
                studios, and personal projects. I am constantly driven by
                learning and creating new things. Since early childhood, I knew
                I would pursue a path in the visual arts, specifically graphic
                design and photography. Alongside my art education, I studied
                graphic design, with which I fell in love.
                <br />
                <br />
                My career began while I was finishing my Master’s degree in
                Graphic Design. I worked for a year before deciding I wanted a
                change to improve myself, so I moved to Italy. It has been both
                the best and the hardest experience of my life, and I have
                learned a lot from it. Throughout these years, I have worked on
                various projects, and I want to demonstrate my capabilities
                through every piece of work I create.
                <br />
                <br />I have experience with painting, graphics, photography,
                and digital art, and I have participated in group performance
                projects. In my artistic practice, I strive to create my own
                universe—a world of melancholy and nostalgia. It is a
                sentimental longing for the past, often a happy time or place,
                conveying mixed feelings of pleasure and slight sadness, and the
                emotional weight of absence through a visual language.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
