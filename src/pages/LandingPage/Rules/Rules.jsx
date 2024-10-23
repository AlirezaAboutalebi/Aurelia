import styles from './Rules.module.css'; 
import LandingCard from '../../../components/LandingCard/LandingCard';

const Rules = () => {
  return (
    <div className={styles.rulesOfPlay}>
      {/* Dice Images */}
      <img src="/decoration/dice1.webp" alt="Dice 1" className={`${styles.rulesOfPlayDice} ${styles.rulesOfPlayDice1}`} />
      <img src="/decoration/dice2.webp" alt="Dice 2" className={`${styles.rulesOfPlayDice} ${styles.rulesOfPlayDice2}`} />
      <img src="/decoration/dice3.webp" alt="Dice 3" className={`${styles.rulesOfPlayDice} ${styles.rulesOfPlayDice3}`} />
      
      {/* Decorative Cards */}
      <img src="/images/Types/Light/Warrior.webp" alt="cd3" className={`${styles.rulesOfPlayCard} ${styles.rulesOfPlayCardCd3}`} />
      <img src="/images/Characters/TheShieldOfDawn/Card.webp" alt="cd2" className={`${styles.rulesOfPlayCard} ${styles.rulesOfPlayCardCd2}`} />
      <img src="/images/Characters/IronShield/Card.webp" alt="cd1" className={`${styles.rulesOfPlayCard} ${styles.rulesOfPlayCardCd1}`} />
      <img src="/images/Packs/Heroes of the Arcane Light.webp" alt="pd1" className={`${styles.rulesOfPlayCard} ${styles.rulesOfPlayCardPd1}`} />
      <img src="/images/Packs/Masters of Shadow’s Secrets.webp" alt="pd2" className={`${styles.rulesOfPlayCard} ${styles.rulesOfPlayCardPd2}`} />

      {/* Title Section */}
      <div className={styles.rulesOfPlayTitleContainer}>
        <h1 className={`${styles.rulesOfPlayTitle} ${styles.rulesOfPlayTitleMain}`}>Rules</h1>
        <span className={`${styles.rulesOfPlayTitle} ${styles.rulesOfPlayTitleSmall}`}>of</span>
        <h1 className={`${styles.rulesOfPlayTitle} ${styles.rulesOfPlayTitleLarge}`}>PLAY</h1>
      </div>

      {/* Cards Section */}
      <div className={styles.rulesOfPlayCards}>
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
