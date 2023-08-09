import { NavBarDark } from "src/components";
import { splashTeam } from "src/components/items/About";
import sketch from "src/assets/images/about/clothes-sketches.png";
import founder from "src/assets/images/about/founder-image.png";

function About() {
  return (
    <>
      <NavBarDark />

      <main className="about">
        <h1 className="about__title">About Us</h1>
        <section className="about__section">
          <div className="about__info">
            <img src={sketch} title="Some Team Work" alt="clothes sketches" className="about__image" />
            <p className="about__text">
              <strong>
                We give the most sophisticating and most beautiful look to our
                women
              </strong>
              . Our outfits are traditionally made, ranging from winter, summer,
              casual, and outing wears.
            </p>
          </div>
          <div className="about__info about__info-reverse">
            <img src={founder} alt="founder" title="Founder" className="about__image about__image-reverse" />
            <p className="about__text">
              Splash is a rising brand which came into the limelight in 2020
              when <strong>Tina was awarded the best-dressed</strong> in the
              fashion women award in 2020. We also have other prizes that
              weren't <strong>global awards</strong>. Our founder{" "}
              <strong>Harris Ben</strong>, an American, started his tailoring
              journey in
              <strong>Alaska in the year 2005</strong>.
            </p>
          </div>
        </section>
        <section className="about__team">
          <h1 className="about__team-title">Meet the Team</h1>
          <div className="about__team-workers">
            {splashTeam.map((team) => (
              <div key={team.id} className="about__team-member">
                <img
                  src={team.image}
                  alt={team.alt}
                  className="about__team-image"
                />
                <h3 className="about__team-name">{team.name}</h3>
                <p className="about__team-skill">{team.skill}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
