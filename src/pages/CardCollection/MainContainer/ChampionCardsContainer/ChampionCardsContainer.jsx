import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChampionCardsContainer.css';
import ChampionCard from '../../../../components/ChampionCard/ChampionCard';
import data from '../../../../data/DATA.json';

const ChampionCardsContainer = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  const navigate = useNavigate();
  const totalSlots = 18; // Total number of slots including empty slots

  const handleCardClick = (cardId) => {
    navigate(`/cards/${cardId}`); // Navigate to SingleCardPage based on the card ID
  };

  // Handle the flip action when hovering on the card
  const handleFlip = (id) => {
    if (!flippedCards.includes(id)) {
      setFlippedCards([...flippedCards, id]);
    }
  };

  return (
    <div className="champion-cards-container">
      <div className="cards-grid">
        {/* Render card slots */}
        {Array.from({ length: totalSlots }).map((_, index) => {
          const champion = data[index]; // Check if there is a card for the slot

          return champion ? (
            <ChampionCard
              key={`champion-${champion.id}`} // Ensure the key is unique by prefixing with "champion"
              champion={champion}
              flipped={flippedCards.includes(champion.id)} // Pass the flipped state
              onFlip={handleFlip} // Pass the flip handler
              onClick={() => handleCardClick(champion.id)} // Handle click to go to SingleCardPage
            />
          ) : (
            <div key={`empty-slot-${index}`} className="empty-card-slot">
              <span className="empty-message">No Card To Display</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionCardsContainer;
