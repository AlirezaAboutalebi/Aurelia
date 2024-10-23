import React from 'react';
import styles from './ChampionCard.module.css';

const ChampionCard = ({ champion, flipped, onFlip, onClick, onHover, onLeave, className }) => {
  return (
    <div
      className={`${styles.flipCard} ${flipped ? styles.flipped : ''} ${className}`} 
      onMouseEnter={() => {
        onFlip(champion.id);
        onHover(champion.id);
      }}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <img src={champion.images.front} alt={`${champion.basicInfo.characterName} front`} />
        </div>
        <div className={styles.flipCardBack}>
          <img src={champion.images.back} alt={`${champion.basicInfo.characterName} back`} />
        </div>
      </div>
    </div>
  );
};

export default ChampionCard;
