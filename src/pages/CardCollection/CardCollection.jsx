import React, { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import ChampionCardsContainer from "./MainContainer/ChampionCardsContainer/ChampionCardsContainer";
import PacksContainer from "./MainContainer/PacksContainer/PacksContainer";
import MainContainer from "./MainContainer/MainContainer";
import Tabs from "./Tabs/Tabs";
import LostCardsContainer from "./MainContainer/LostCardsContainer/LostCardsContainer";

const CardCollection = () => {
  const [activeTab, setActiveTab] = useState("packs");
  const [flippedCards, setFlippedCards] = useState([]);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFlip = (id) => {
    if (!flippedCards.includes(id)) {
      setFlippedCards([...flippedCards, id]);
    }
  };

  const handleHideAllCards = () => {
    setFlippedCards([]);
  };

  return (
    <>
      <div className="figure-overlay"></div>
      <Navigation />
      {/* Uncomment ClaimBanner when needed */}
      {/* <ClaimBanner /> */}
      <Tabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onHideAllCards={handleHideAllCards}
      />
      <MainContainer hoveredCardId={hoveredCardId}>
        {activeTab === "packs" && <PacksContainer />}
        {activeTab === "mycards" && (
          <ChampionCardsContainer
            flippedCards={flippedCards}
            setFlippedCards={setFlippedCards}
            handleFlip={handleFlip}
            setHoveredCardId={setHoveredCardId} // Pass the hover handler
          />
        )}
        {activeTab === "lostcards" && <LostCardsContainer />}
      </MainContainer>
    </>
  );
};

export default CardCollection;
