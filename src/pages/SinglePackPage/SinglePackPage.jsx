import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import packsData from "../../data/packsDATA.json";
import "./SinglePackPage.css";
import Navigation from "../../components/Navigation/Navigation";
import { saveOpenedCards } from "../../utils/cardStorage";
import { getOpenedPacks, saveOpenedPack, clearOpenedPacks } from '../../utils/packStorage';
import ChampionCard from "../../components/ChampionCard/ChampionCard";
import data from "../../data/DATA.json"; // Import character data

const SinglePackPage = () => {
  const { packId } = useParams();
  const navigate = useNavigate();
  const pack = packsData.packs.find((p) => p.id === parseInt(packId));
  const [openedCards, setOpenedCards] = useState([]); // State to hold opened cards
  const [showCards, setShowCards] = useState(false); // State to control card visibility
  const [flippedCards, setFlippedCards] = useState([]); // Track flipped cards
  const [fadeDescriptions, setFadeDescriptions] = useState(false); // New state to trigger fade-out
  const [isPackOpened, setIsPackOpened] = useState(false); // Track if the pack is already opened

  if (!pack) {
    return <div>Pack not found</div>;
  }
  // window.clearOpenedPacks()
  // window.clearOpenedCards();
 
  if (typeof window !== "undefined") {
    window.getOpenedPacks = getOpenedPacks;
    window.saveOpenedPack = saveOpenedPack;
    window.clearOpenedPacks = clearOpenedPacks;
  }
  // Check if the pack has already been opened
  useEffect(() => {
    const openedPacks = getOpenedPacks();
    if (openedPacks.includes(pack.id)) {
      setIsPackOpened(true); // Mark the pack as already opened
    }
  }, [pack.id]);

  // Handle opening the pack and adding the cards to storage
  const handleOpenPack = () => {
    if (isPackOpened) return; // Prevent re-opening if already opened

    const packCards = data.filter((card) =>
      pack.cards.includes(Number(card.id))
    );
    setOpenedCards(packCards); // Update the state with the opened cards
    setShowCards(true); // Show the cards on the screen
    saveOpenedCards(packCards.map((card) => card.id)); // Save the cards in storage
    saveOpenedPack(pack.id); // Save the opened pack to storage

    // Automatically flip cards after delay
    packCards.forEach((card, index) => {
      setTimeout(() => {
        setFlippedCards((prev) => [...prev, card.id]);
      }, (index + 1) * 600); // Delay each card flip by 600ms
    });

    setFadeDescriptions(true); // Trigger the fade-out effect
    setIsPackOpened(true); // Set the pack as opened
  };

  // Handle clicking on a card to navigate
  const handleCardClick = (cardId) => {
    navigate(`/cards/${cardId}`);
  };

  return (
    <>
      <div className="figure-overlay"></div>
      <Navigation />

      <div className="single-pack-container">
        <div className="single-pack-content">
          <h1 className="pack-realm">{pack.realmName}</h1>
          <h2 className={`pack-title }`}>
            {pack.packTitle}:
          </h2>

          <p
            className={`pack-description ${fadeDescriptions ? "fade-out" : ""}`}
          >
            {pack.packDescription1}
          </p>
          <p
            className={`pack-description ${fadeDescriptions ? "fade-out" : ""}`}
          >
            {pack.packDescription2}
          </p>
          <p
            className={`pack-description ${fadeDescriptions ? "fade-out" : ""}`}
          >
            {pack.packDescription3}
          </p>

          {/* Disable the button if the pack is already opened */}
          <button
            className={`open-pack-button ${isPackOpened ? "disabled" : ""}`}
            onClick={handleOpenPack}
            disabled={isPackOpened}
          >
            {isPackOpened ? "Pack Already Opened" : "Open Pack Now"}
          </button>
        </div>
        <img
          src={pack.image}
          alt={pack.packTitle}
          className="single-pack-image"
        />
        <img
          src="/decoration/dice1.webp"
          alt="dice1"
          className="SinglePack__dice SinglePack__dice--1"
        />
        <img
          src="/decoration/dice2.webp"
          alt="dice2"
          className="SinglePack__dice SinglePack__dice--2"
        />
        <img
          src="/decoration/dice3.webp"
          alt="dice3"
          className="SinglePack__dice SinglePack__dice--3"
        />

        {/* Render opened cards with individual class names */}
        {showCards && (
          <div className="opened-cards-container">
            {openedCards.length > 0 &&
              openedCards.map((card, index) => (
                <ChampionCard
                  key={card.id}
                  champion={card}
                  flipped={flippedCards.includes(card.id)} // Pass flipped state
                  onFlip={() => {}} // Disable manual flipping in this case
                  onClick={() => handleCardClick(card.id)} // Handle click functionality
                  className={`card-${index + 1}`} // Assign a specific class based on index
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SinglePackPage;
