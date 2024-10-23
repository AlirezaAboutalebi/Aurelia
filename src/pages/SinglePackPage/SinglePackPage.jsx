import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import packsData from "../../DATA/packsDATA.json";
import Navigation from "../../components/Navigation/Navigation";
import ChampionCard from "../../components/ChampionCard/ChampionCard";
import data from "../../DATA/DATA.json";
import { saveOpenedCards } from "../../utils/cardStorage";
import { getOpenedPacks, saveOpenedPack, clearOpenedPacks } from '../../utils/packStorage';
import styles from "./SinglePackPage.module.css";

const SinglePackPage = () => {
  const { packId } = useParams();
  const navigate = useNavigate();
  const pack = packsData.packs.find((p) => p.id === parseInt(packId));
  const [openedCards, setOpenedCards] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const [flippedCards, setFlippedCards] = useState([]);
  const [fadeDescriptions, setFadeDescriptions] = useState(false);
  const [isPackOpened, setIsPackOpened] = useState(false);

  if (!pack) {
    return <div>Pack not found</div>;
  }

  if (typeof window !== "undefined") {
    window.getOpenedPacks = getOpenedPacks;
    window.saveOpenedPack = saveOpenedPack;
    window.clearOpenedPacks = clearOpenedPacks;
  }

  // Check if the pack has already been opened
  useEffect(() => {
    const openedPacks = getOpenedPacks();
    if (openedPacks.includes(pack.id)) {
      setIsPackOpened(true);
    }
  }, [pack.id]);

  // Handle opening the pack and adding the cards to storage
  const handleOpenPack = () => {
    if (isPackOpened) return;

    const packCards = data.filter((card) => pack.cards.includes(Number(card.id)));
    setOpenedCards(packCards);
    setShowCards(true);
    saveOpenedCards(packCards.map((card) => card.id));
    saveOpenedPack(pack.id);

    // Automatically flip cards after delay
    packCards.forEach((card, index) => {
      setTimeout(() => {
        setFlippedCards((prev) => [...prev, card.id]);
      }, (index + 1) * 600);
    });

    setFadeDescriptions(true);
    setIsPackOpened(true);
  };

  const handleCardClick = (cardId) => {
    navigate(`/cards/${cardId}`);
  };

  return (
    <>
       <div className="figure-overlay"></div>
      <Navigation />

      <div className={styles.singlePackContainer}>
        <div className={styles.singlePackContent}>
          <h1 className={styles.packRealm}>{pack.realmName}</h1>
          <h2 className={styles.packTitle}>{pack.packTitle}:</h2>

          <p className={`${styles.packDescription} ${fadeDescriptions ? styles.fadeOut : ""}`}>
            {pack.packDescription1}
          </p>
          <p className={`${styles.packDescription} ${fadeDescriptions ? styles.fadeOut : ""}`}>
            {pack.packDescription2}
          </p>
          <p className={`${styles.packDescription} ${fadeDescriptions ? styles.fadeOut : ""}`}>
            {pack.packDescription3}
          </p>

          <button
            className={`${styles.openPackButton} ${isPackOpened ? styles.disabled : ""}`}
            onClick={handleOpenPack}
            disabled={isPackOpened}
          >
            {isPackOpened ? "Pack Already Opened" : "Open Pack Now"}
          </button>
        </div>

        <img
          src={pack.image}
          alt={pack.packTitle}
          className={styles.singlePackImage}
        />
        <img
          src="/decoration/dice1.webp"
          alt="dice1"
          className={`${styles.SinglePackDice} ${styles.SinglePackDice1}`}
        />
        <img
          src="/decoration/dice2.webp"
          alt="dice2"
          className={`${styles.SinglePackDice} ${styles.SinglePackDice2}`}
        />
        <img
          src="/decoration/dice3.webp"
          alt="dice3"
          className={`${styles.SinglePackDice} ${styles.SinglePackDice3}`}
        />

        {showCards && (
          <div className={styles.openedCardsContainer}>
            {openedCards.map((card, index) => (
              <ChampionCard
                key={card.id}
                champion={card}
                flipped={flippedCards.includes(card.id)}
                onFlip={() => {}}
                onClick={() => handleCardClick(card.id)}
                className={styles[`card${index + 1}`]}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SinglePackPage;
