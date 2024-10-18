import React, { useState } from 'react';
import Navigation from "../../components/Navigation/Navigation";
import ChampionCardsContainer from "./MainContainer/ChampionCardsContainer/ChampionCardsContainer";
import MainContainer from "./MainContainer/MainContainer";
import Tabs from './Tabs/Tabs'; // Importing the Tabs component

const CardCollection = () => {
  const [activeTab, setActiveTab] = useState('mycards'); // Default active tab

  return (
    <>
      <div className="figure-overlay"></div>
      <Navigation />
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} /> {/* Tabs Section */}
      
      <MainContainer>
        {/* Conditionally render content based on active tab */}
        {activeTab === 'packs' && <div>Packs Content</div>} {/* Placeholder for Packs */}
        {activeTab === 'catalogue' && <div>Catalogue Content</div>} {/* Placeholder for Catalogue */}
        {activeTab === 'mycards' && <ChampionCardsContainer />} {/* Display the Champion Cards */}
        {activeTab === 'lostcards' && <div>Lost Cards Content</div>} {/* Placeholder for Lost Cards */}
      </MainContainer>
    </>
  );
};

export default CardCollection;
