import React, { useState } from 'react';
import './ChampionCards.css';
import data from '../../data/DATA.json';

const ChampionCards = () => {
  // State to track flipped cards
  const [flippedCards, setFlippedCards] = useState([]);

  // Handle card flip on hover
  const handleFlip = (id) => {
    if (!flippedCards.includes(id)) {
      setFlippedCards([...flippedCards, id]);
    }
  };

  // Reset all flipped cards (hide them)
  const resetCards = () => {
    setFlippedCards([]); // This will reset all cards to their initial state
  };

  return (
    <div className="champion-cards-container">
      <div className="cards-grid">
        {data.map((champion) => (
          <div
            key={champion.id}
            className={`flip-card ${flippedCards.includes(champion.id) ? 'flipped' : ''}`}
            onMouseEnter={() => handleFlip(champion.id)}
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
        ))}
      </div>

      {/* Button to reset (hide) all cards */}
      <button onClick={resetCards} className="reset-button">Hide All Cards</button>
    </div>
  );
};

export default ChampionCards;
