import React from "react";
import styles from "./LostCardsContainer.module.css"; // Import the CSS module

const LostCardsContainer = () => {
  const totalSlots = 18; // Total number of slots including empty slots

  return (
    <div className={styles.lostCardsContainer}>
      <div className={styles.cardsGrid}>
        {Array.from({ length: totalSlots }).map((_, index) => (
          <div key={`lost-card-${index}`} className={styles.emptyLostCardSlot}>
            <span className={styles.emptyLostMessage}>No Lost Card</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostCardsContainer;
