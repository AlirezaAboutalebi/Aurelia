import React from 'react';
import './ChampionCard.css';

const ChampionCard = ({ champion, flipped, onFlip }) => {
  return (
    <div
      className={`flip-card ${flipped ? 'flipped' : ''}`}
      onMouseEnter={() => onFlip(champion.id)}
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
