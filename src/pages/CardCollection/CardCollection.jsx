import React, { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import ChampionCardsContainer from "./MainContainer/ChampionCardsContainer/ChampionCardsContainer";
import PacksContainer from "./MainContainer/PacksContainer/PacksContainer";
import MainContainer from "./MainContainer/MainContainer";
import Tabs from "./Tabs/Tabs";

const CardCollection = () => {
  const [activeTab, setActiveTab] = useState('packs'); // Track the active tab

  // Handler to switch tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="figure-overlay"></div>
      <Navigation />
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      <MainContainer>
        {activeTab === 'packs' && <PacksContainer />}
        {activeTab === 'mycards' && <ChampionCardsContainer />}
        {/* Add more tab checks for other containers if needed */}
      </MainContainer>
    </>
  );
};

export default CardCollection;
