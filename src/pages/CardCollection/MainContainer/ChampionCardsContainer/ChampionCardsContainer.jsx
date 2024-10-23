import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChampionCardsContainer.module.css"; 
import ChampionCard from "../../../../components/ChampionCard/ChampionCard";
import data from "../../../../data/DATA.json";
import {
  getOpenedCards,
  saveOpenedCards,
  clearOpenedCards as clearStoredOpenedCards,
} from "../../../../utils/cardStorage";

if (typeof window !== "undefined") {
  window.getOpenedCards = getOpenedCards;
  window.saveOpenedCards = saveOpenedCards;
  window.clearOpenedCards = clearStoredOpenedCards;
}

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
    setHoveredCardId(id); 
  };

  const handleLeave = () => {
    setHoveredCardId(null); 
  };

  return (
    <div className={styles.championCardsContainer}>
      <div className={styles.cardsGrid}>
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
            <div key={`empty-${index}`} className={styles.emptyCardSlot}>
              <span className={styles.emptyMessage}>No Card To Display</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionCardsContainer;
