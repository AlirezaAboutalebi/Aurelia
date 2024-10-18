import { useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import ChampionCardsContainer from "./MainContainer/ChampionCardsContainer/ChampionCardsContainer";
import PacksContainer from "./MainContainer/PacksContainer/PacksContainer";
import Tabs from "./Tabs/Tabs";
import MainContainer from "./MainContainer/MainContainer";

const CardCollection = () => {
  const [activeTab, setActiveTab] = useState('mycards'); // Default to "mycards"
  const [openedPacks, setOpenedPacks] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]); // State to track flipped cards

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleOpenPack = (pack) => {
    if (!openedPacks.includes(pack)) {
      setOpenedPacks([...openedPacks, pack]);
    }
  };

  const handleHideAllCards = () => {
    setFlippedCards([]); // Resets all flipped cards
  };

  const handleFlip = (id) => {
    if (!flippedCards.includes(id)) {
      setFlippedCards([...flippedCards, id]);
    }
  };

  return (
    <>
      <div className="figure-overlay"></div>
      <Navigation />
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} onHideAllCards={handleHideAllCards} />
      <MainContainer>
        {activeTab === 'packs' && <PacksContainer onOpenPack={handleOpenPack} />}
        {activeTab === 'mycards' && (
          <ChampionCardsContainer
            openedPacks={openedPacks}
            flippedCards={flippedCards}
            onFlip={handleFlip}
          />
        )}
      </MainContainer>
    </>
  );
};

export default CardCollection;
