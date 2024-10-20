import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ChampionCardsContainer.css";
import ChampionCard from "../../../../components/ChampionCard/ChampionCard";
import data from "../../../../data/DATA.json"; // Character data
import { getOpenedCards, saveOpenedCards } from "../../../../utils/cardStorage";

// Expose the storage functions to the window object for testing
if (typeof window !== "undefined") {
  window.getOpenedCards = getOpenedCards;
  window.saveOpenedCards = saveOpenedCards;
}

const ChampionCardsContainer = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const navigate = useNavigate();
  const totalSlots = 18; // Total number of slots including empty slots

  useEffect(() => {
    const openedCardIds = getOpenedCards().map((id) => Number(id)); // Convert stored card IDs to numbers
    console.log("Opened Card IDs:", openedCardIds);

    // Log the data array to see if it's being imported correctly
    console.log("Full Data:", data);

    const openedCards = data.filter((card) =>
      openedCardIds.includes(Number(card.id))
    ); // Convert card.id to number for comparison

    console.log("Opened Cards:", openedCards); // Check the opened cards in the console
    setVisibleCards(openedCards); // Set the visible cards
  }, []);

  const handleCardClick = (cardId) => {
    navigate(`/cards/${cardId}`); // Navigate to SingleCardPage based on the card ID
  };

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
          const champion = visibleCards[index]; // Get the visible cards based on opened ones

          return champion ? (
            <ChampionCard
              key={`card-${champion.id}`} // Use a unique key prefix for cards
              champion={champion}
              flipped={flippedCards.includes(champion.id)} // Pass the flipped state
              onFlip={handleFlip} // Pass the flip handler
              onClick={() => handleCardClick(champion.id)} // Handle click to go to SingleCardPage
            />
          ) : (
            <div key={`empty-${index}`} className="empty-card-slot"> {/* Use a unique key prefix for empty slots */}
              <span className="empty-message">No Card To Display</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChampionCardsContainer;
