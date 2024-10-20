import React from 'react';
import './ChampionCardsContainer.css';
import ChampionCard from '../../../../components/ChampionCard/ChampionCard';
import data from '../../../../data/DATA.json';

const ChampionCardsContainer = ({ flippedCards, handleFlip }) => {
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
              key={`champion-${champion.id}`} // Use champion ID as the key for real cards
              champion={champion}
              flipped={flippedCards.includes(champion.id)}
              onFlip={() => handleFlip(champion.id)} // Handle card flip
            />
          ) : (
            <div key={`empty-slot-${index}`} className="empty-card-slot"> {/* Ensure unique key for empty slots */}
              <span className="empty-message">No Card To Display</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionCardsContainer;
