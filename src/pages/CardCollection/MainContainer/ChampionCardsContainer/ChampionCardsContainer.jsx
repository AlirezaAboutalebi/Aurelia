import React, { useState } from 'react';
import ChampionCard from '../../../../components/ChampionCard/ChampionCard';
import './ChampionCardsContainer.css';
import data from '../../../../data/DATA.json';

const ChampionCardsContainer = ({ openedPacks, flippedCards, onFlip }) => {
  const visibleCards = [];

  if (openedPacks.includes('kingdom')) visibleCards.push(...data.slice(0, 3));
  if (openedPacks.includes('light')) visibleCards.push(...data.slice(3, 9));
  if (openedPacks.includes('shadow')) visibleCards.push(...data.slice(9, 15));

  return (
    <div className="cards-grid">
      {visibleCards.map((champion) => (
        <ChampionCard
          key={champion.id}
          champion={champion}
          flipped={flippedCards.includes(champion.id)}
          onFlip={onFlip}
        />
      ))}
    </div>
  );
};

export default ChampionCardsContainer;