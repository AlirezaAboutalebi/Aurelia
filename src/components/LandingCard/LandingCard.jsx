import React from 'react';
import styles from './LandingCard.module.css';

const LandingCard = ({ iconSrc, title, description }) => {
  return (
    <div className={styles.landingCard}>
      {/* Four corners */}
      <div className={`${styles.landingCardCorner} ${styles.topLeft}`}></div>
      <div className={`${styles.landingCardCorner} ${styles.topRight}`}></div>
      <div className={`${styles.landingCardCorner} ${styles.bottomLeft}`}></div>
      <div className={`${styles.landingCardCorner} ${styles.bottomRight}`}></div>

      {/* Icon */}
      <div className={styles.iconContainer}>
        <img src={iconSrc} alt={`${title} Icon`} className={styles.icon} />
      </div>

      {/* Title */}
      <h2 className={styles.title}>{title}</h2>

      {/* Description */}
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default LandingCard;
