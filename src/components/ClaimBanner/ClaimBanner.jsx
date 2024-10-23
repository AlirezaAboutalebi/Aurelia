import React from 'react';
import styles from './ClaimBanner.module.css';

const ClaimBanner = () => {
  return (
    <div className={styles.claimBanner}>
      <div className={styles.cardsContainer}>
        <img src="/images/Types/Shadow/Sage.webp" alt="Card 1" className={`${styles.cardImage} ${styles.cardImage1}`} />
        <img src="/images/Types/Light/Magician.webp" alt="Card 3" className={`${styles.cardImage} ${styles.cardImage3}`} />
        <img src="/images/Types/Kingdom/Warrior.webp" alt="Card 2" className={`${styles.cardImage} ${styles.cardImage2}`} />
      </div>
      <div className={styles.claimMessage}>
        <p>You've got cards to claim!</p>
        <button className={styles.claimButton}>CLAIM NOW</button>
      </div>
    </div>
  );
};

export default ClaimBanner;
