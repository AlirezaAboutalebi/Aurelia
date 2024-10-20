import React, { useState } from 'react';
import './ChampionCardsContainer.css';
import ChampionCard from '../../../../components/ChampionCard/ChampionCard';
import data from '../../../../data/DATA.json'; // Adjust the path to your data

const ChampionCardsContainer = () => {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleFlip = (id) => {
    if (!flippedCards.includes(id)) {
      setFlippedCards([...flippedCards, id]);
    }
  };

  // Total slots to display
  const totalSlots = 18;

  return (
    <div className="champion-cards-container">
      <div className="cards-grid">
        {/* Render card slots */}
        {Array.from({ length: totalSlots }).map((_, index) => {
          const champion = data[index]; // Render a card if data is available

          return champion ? (
            <ChampionCard
              key={champion.id}
              champion={champion}
              flipped={flippedCards.includes(champion.id)}
              onFlip={handleFlip}
            />
          ) : (
            <div key={index} className="empty-card-slot">
              <span className="empty-message">No Card To Display</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionCardsContainer;
