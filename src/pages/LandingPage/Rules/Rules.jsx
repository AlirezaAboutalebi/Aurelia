import './Rules.css'; // Updated path to the CSS
import LandingCard from '../../../components/LandingCard/LandingCard';

const Rules = () => {
  return (
    <div className="rules-of-play">
      {/* Dice Images */}
      <img src="/decoration/dice1.webp" alt="Dice 1" className="rules-of-play__dice rules-of-play__dice--1" />
      <img src="/decoration/dice2.webp" alt="Dice 2" className="rules-of-play__dice rules-of-play__dice--2" />
      <img src="/decoration/dice3.webp" alt="Dice 3" className="rules-of-play__dice rules-of-play__dice--3" />

      {/* Decorative Cards */}
      <img src="/decoration/cd3.webp" alt="cd3" className="rules-of-play__card rules-of-play__card--cd3" />
      <img src="/decoration/cd2.webp" alt="cd2" className="rules-of-play__card rules-of-play__card--cd2" />
      <img src="/decoration/cd1.webp" alt="cd1" className="rules-of-play__card rules-of-play__card--cd1" />
      <img src="/decoration/pd1.webp" alt="pd1" className="rules-of-play__card rules-of-play__card--pd1" />
      <img src="/decoration/pd1.webp" alt="pd2" className="rules-of-play__card rules-of-play__card--pd2" />

      {/* Title Section */}
      <div className="rules-of-play__title-container">
        <h1 className="rules-of-play__title rules-of-play__title--main">Rules</h1>
        <span className="rules-of-play__title rules-of-play__title--small">of</span>
        <h1 className="rules-of-play__title rules-of-play__title--large">PLAY</h1>
      </div>

      {/* Cards Section */}
      <div className="rules-of-play__cards">
        <LandingCard
          iconSrc="/icons/r1.png"
          title="Enter the Realm"
          description="Begin your journey by unlocking the chapters of the story. Each page brings you closer to the truth behind the realms' ancient conflict."
        />
        <LandingCard
          iconSrc="/icons/r2.png"
          title="The Fate You Shape"
          description="Be aware, As you progress, the choices you make will influence the story. each choice will affect the characters and the world around them."
        />
        <LandingCard
          iconSrc="/icons/r3.png"
          title="Consequences"
          description="Characters can fall. If a hero dies during your journey, they are gone for the remainder of the story, and their card will no longer be part of the tale."
        />
      </div>
    </div>
  );
};

export default Rules;
