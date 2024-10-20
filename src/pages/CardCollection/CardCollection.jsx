import React, { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import ChampionCardsContainer from "./MainContainer/ChampionCardsContainer/ChampionCardsContainer";
import PacksContainer from "./MainContainer/PacksContainer/PacksContainer";
import MainContainer from "./MainContainer/MainContainer";
import Tabs from "./Tabs/Tabs";

const CardCollection = () => {
  const [activeTab, setActiveTab] = useState("packs");
  const [flippedCards, setFlippedCards] = useState([]); // Track flipped cards

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handle flip of an individual card
  const handleFlip = (id) => {
    if (!flippedCards.includes(id)) {
      setFlippedCards([...flippedCards, id]);
    }
  };

  // Reset all flipped cards
  const handleHideAllCards = () => {
    setFlippedCards([]); // Reset flipped cards to an empty array
  };

  return (
    <>
      <div className="figure-overlay"></div>
      <Navigation />
      <Tabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onHideAllCards={handleHideAllCards} // Pass the hide all cards function
      />
      <MainContainer>
        {activeTab === "packs" && <PacksContainer />}
        {activeTab === "mycards" && (
          <ChampionCardsContainer
            flippedCards={flippedCards}
            handleFlip={handleFlip} // Pass the flip function
          />
        )}
      </MainContainer>
    </>
  );
};

export default CardCollection;
