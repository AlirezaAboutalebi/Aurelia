import React, { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import MainContainer from "./MainContainer/MainContainer";
import ChampionCardsContainer from "./MainContainer/ChampionCardsContainer/ChampionCardsContainer";
import PacksContainer from "./MainContainer/PacksContainer/PacksContainer";
import Tabs from "./Tabs/Tabs";
import data from "../../DATA/DATA.json"; // Assuming your card data is stored here

const CardCollection = () => {
  const [activeTab, setActiveTab] = useState("packs");
  const [visibleCards, setVisibleCards] = useState([]); // To store the cards shown in My Cards tab
  const [flippedCards, setFlippedCards] = useState([]); // To store flipped cards

  // Handle pack opening logic
  const handleOpenPack = (packType) => {
    let newCards = [];

    if (packType === "kingdom") {
      newCards = data.slice(0, 3); // First 3 cards for Kingdom
    } else if (packType === "light") {
      newCards = data.slice(3, 9); // Next 6 cards for Light
    } else if (packType === "shadow") {
      newCards = data.slice(9, 15); // Last 6 cards for Shadow
    }

    // Add new cards to visible cards
    setVisibleCards((prevVisibleCards) => [
      ...prevVisibleCards,
      ...newCards.filter((newCard) => !prevVisibleCards.includes(newCard)),
    ]);
  };

  // Handle card flipping
  const handleFlip = (id) => {
    if (!flippedCards.includes(id)) {
      setFlippedCards([...flippedCards, id]);
    }
  };

  // Handle hide all cards (reset flips)
  const handleHideAllCards = () => {
    setFlippedCards([]); // Reset all flips
  };

  return (
    <>
      <div className="figure-overlay"></div>
      <Navigation />
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} onHideAllCards={handleHideAllCards} />
      <MainContainer>
        {activeTab === "packs" && <PacksContainer onOpenPack={handleOpenPack} />}
        {activeTab === "mycards" && (
          <ChampionCardsContainer visibleCards={visibleCards} flippedCards={flippedCards} handleFlip={handleFlip} />
        )}
      </MainContainer>
    </>
  );
};

export default CardCollection;
