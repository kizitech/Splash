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
            <img src={sketch} alt="clothes sketches" className="about__image" />
            <p className="about__text">
              We give the most sophisticating and most beautiful look to our
              women. Our outfits are traditionally made, ranging from winter,
              summer, casual, and outing wears.
            </p>
          </div>
          <div className="about__info">
            <img src={founder} alt="founder" className="about__image" />
            <p className="about__text">
              Splash is a rising brand which came into the limelight in 2020
              when Tina was awarded the best-dressed in the fashion women award
              in 2020. We also have other prizes that weren't global awards. Our
              founder Harris Ben, an American, started his tailoring journey in
              Alaska in the year 2005.
            </p>
          </div>
        </section>
        <section className="about__section">
          <h1 className="about__team-title">Meet the Team</h1>
          <div className="about__team">
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
