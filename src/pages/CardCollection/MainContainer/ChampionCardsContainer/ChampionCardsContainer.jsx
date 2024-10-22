import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ChampionCardsContainer.css";
import ChampionCard from "../../../../components/ChampionCard/ChampionCard";
import data from "../../../../data/DATA.json";
import { getOpenedCards } from "../../../../utils/cardStorage";

const ChampionCardsContainer = ({ flippedCards, setFlippedCards, setHoveredCardId }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const navigate = useNavigate();
  const totalSlots = 18;

  useEffect(() => {
    const openedCardIds = getOpenedCards().map((id) => Number(id));
    const openedCards = data.filter((card) => openedCardIds.includes(Number(card.id)));
    setVisibleCards(openedCards);
  }, []);

  const handleCardClick = (cardId) => {
    navigate(`/cards/${cardId}`);
  };

  const handleFlip = (id) => {
    if (!flippedCards.includes(id)) {
      setFlippedCards([...flippedCards, id]);
    }
  };

  const handleHover = (id) => {
    setHoveredCardId(id); // Pass the hovered card ID to the parent
  };

  const handleLeave = () => {
    setHoveredCardId(null); // Reset hovered card ID when mouse leaves
  };

  return (
    <div className="champion-cards-container">
      <div className="cards-grid">
        {Array.from({ length: totalSlots }).map((_, index) => {
          const champion = visibleCards[index];

          return champion ? (
            <ChampionCard
              key={`card-${champion.id}`}
              champion={champion}
              flipped={flippedCards.includes(champion.id)}
              onFlip={handleFlip}
              onHover={handleHover}
              onLeave={handleLeave} // Handle mouse leave
              onClick={() => handleCardClick(champion.id)}
            />
          ) : (
            <div key={`empty-${index}`} className="empty-card-slot">
              <span className="empty--message">No Card To Display</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionCardsContainer;
