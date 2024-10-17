import React, { useState } from 'react';
import './ChampionCards.css';
import data from '../../data/DATA.json';

const ChampionCards = () => {
  // State to track flipped cards
  const [flippedCards, setFlippedCards] = useState([]);
  
  // State to track visible cards from opened packs
  const [visibleCards, setVisibleCards] = useState([]);

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

  // Function to open a pack and display its cards
  const openPack = (pack) => {
    let newCards = [];

    if (pack === 'kingdom') {
      newCards = data.slice(0, 3); // First 3 cards for Kingdom
    } else if (pack === 'light') {
      newCards = data.slice(3, 9); // Next 6 cards for Light
    } else if (pack === 'shadow') {
      newCards = data.slice(9, 15); // Last 6 cards for Shadow
    }

    // Combine the new cards with the already visible cards
    setVisibleCards((prevVisibleCards) => [
      ...prevVisibleCards,
      ...newCards.filter((newCard) => !prevVisibleCards.includes(newCard)), // Avoid duplicates
    ]);

    setFlippedCards([]); // Reset any flipped cards when a new pack is opened
  };

  return (
    <div className="champion-cards-container">
      {/* Buttons to open a pack */}
      <div className="pack-buttons">
        <button onClick={() => openPack('kingdom')} className="pack-button">Kingdom Pack</button>
        <button onClick={() => openPack('light')} className="pack-button">Light Pack</button>
        <button onClick={() => openPack('shadow')} className="pack-button">Shadow Pack</button>
      </div>

      {/* Cards grid to display visible cards */}
      <div className="cards-grid">
        {visibleCards.map((champion) => (
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
