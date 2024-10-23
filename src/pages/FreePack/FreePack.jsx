import { useNavigate } from "react-router-dom";
import styles from "./FreePack.module.css"; // Importing the modular CSS
import Navigation from "../../components/Navigation/Navigation";

const FreePack = () => {
  const navigate = useNavigate();

  const handleClaimCards = () => {
    navigate("/card-collection"); // Navigate to card collection
  };

  return (
    <>
      <div className="figure-overlay"></div>
      <Navigation />
      <div className={styles.freePackContainer}>
        <div className={styles.freePackContent}>
          <h1 className={styles.freePackTitle}>
            Claim <br />
            <span>Free Pack</span>
          </h1>
          <p className={styles.freePackDescription}>
            Your journey begins with the Kingdom’s champions. Purchase the pack and lead the charge for glory!
          </p>
          <p className={styles.freePackValue}>
            Purchase For <span className={styles.discount}>$3.99</span>
          </p>
          <button className={styles.claimButton} onClick={handleClaimCards}>
            Claim Free
          </button>
        </div>
        <img
          src="/decoration/dice1.webp"
          alt="Dice 1"
          className={`${styles.freePackDice} ${styles.freePackDice1}`}
        />
        <img
          src="/decoration/dice2.webp"
          alt="Dice 2"
          className={`${styles.freePackDice} ${styles.freePackDice2}`}
        />
        <img
          src="/decoration/dice3.webp"
          alt="Dice 3"
          className={`${styles.freePackDice} ${styles.freePackDice3}`}
        />
        <img
          src="/images/Packs/Heroes of Valoria Castle.webp"
          alt="Free Pack"
          className={styles.freePackImage}
        />
      </div>
    </>
  );
};

export default FreePack;
