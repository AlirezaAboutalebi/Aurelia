import React, { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import ChampionCardsContainer from "./MainContainer/ChampionCardsContainer/ChampionCardsContainer";
import PacksContainer from "./MainContainer/PacksContainer/PacksContainer";
import MainContainer from "./MainContainer/MainContainer";
import Tabs from "./Tabs/Tabs";
import ClaimBanner from "../../components/ClaimBanner/ClaimBanner";
import LostCardsContainer from "./MainContainer/LostCardsContainer/LostCardsContainer";
import StatBox from "../../components/StatBox/Statbox";

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
      {/*<ClaimBanner/>*/}
      <Tabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onHideAllCards={handleHideAllCards} // Pass the hide all cards function
      />
      
      <MainContainer>
        {activeTab === "packs" && <PacksContainer />}
        {activeTab === "mycards" && (
          <ChampionCardsContainer
            flippedCards={flippedCards} // Pass the flipped cards array
            setFlippedCards={setFlippedCards} // Pass the function to update flipped cards
            handleFlip={handleFlip} // Pass the flip function
          />
        )}
        {activeTab === "lostcards" && <LostCardsContainer />}
      </MainContainer>
      <StatBox/>
     
    </>
  );
};

export default CardCollection;
