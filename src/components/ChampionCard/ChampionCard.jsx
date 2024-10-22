import React from 'react';
import './ChampionCard.css';

const ChampionCard = ({ champion, flipped, onFlip, onClick, onHover, onLeave, className }) => {
  return (
    <div
      className={`flip-card ${flipped ? 'flipped' : ''} ${className}`} // Apply the custom className
      onMouseEnter={() => {
        onFlip(champion.id);
        onHover(champion.id); // Trigger hover event to update the stat box
      }}
      onMouseLeave={() => onLeave()} // Trigger leave event to reset stat box
      onClick={onClick} // Handle click functionality
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={champion.images.front} alt={`${champion.basicInfo.characterName} front`} />
        </div>
        <div className="flip-card-back">
          <img src={champion.images.back} alt={`${champion.basicInfo.characterName} back`} />
        </div>
      </div>
    </div>
  );
};

export default ChampionCard;
