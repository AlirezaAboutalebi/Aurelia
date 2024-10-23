import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DATA from "../../data/DATA.json";
import Navigation from "../../components/Navigation/Navigation";
import styles from "./SingleCardPage.module.css";
import StatBox from "../../components/StatBox/Statbox";

const SingleCardPage = () => {
  const { cardId } = useParams();
  const [showEnglish, setShowEnglish] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const card = DATA.find((c) => c.id === cardId);

  if (!card) {
    return <div>Card not found</div>;
  }

  const toggleLanguage = () => {
    setShowEnglish(!showEnglish);
  };

  const textDirection = showEnglish ? "ltr" : "rtl";
  const persianFont = !showEnglish ? { fontFamily: "IranianSans" } : {};

  return (
    <>
      <div className={styles.figureOverlay}></div>
      <Navigation />
      <div className={styles.singleCardPage}>
        <div className={styles.leftContent}>
          <div className={`${styles.cardOverlay} ${styles.cardOverlayRight}`}></div>
          <div className={`${styles.cardOverlay} ${styles.cardOverlayBottom}`}></div>
          <div className={`${styles.cardOverlay} ${styles.cardOverlayTop}`}></div>
          <img
            className={styles.cardBanner}
            src={card.images.banner}
            alt={card.basicInfo.characterName}
          />
          <div className={styles.cardInfo}>
            <img
              className={styles.cardImage}
              src={card.images.back}
              alt={card.basicInfo.characterName}
            />
            <div className={styles.cardContent}>
              <h1 className={styles.cardTitle}>{card.basicInfo.characterName}</h1>
              <ul className={styles.cardDetails}>
                <li>
                  <strong className={styles.strongTitleInfo}>Real Name:</strong> {card.basicInfo.realName}
                </li>
                <li>
                  <strong className={styles.strongTitleInfo}>Realm:</strong> {card.basicInfo.realm}
                </li>
                <li>
                  <strong className={styles.strongTitleInfo}>Role:</strong> {card.basicInfo.role}
                </li>
                <li>
                  <strong className={styles.strongTitleInfo}>Damage Type:</strong> {card.basicInfo.damageType}
                </li>
                <li>
                  <strong className={styles.strongTitleInfo}>Weapon:</strong> {card.basicInfo.weapon}
                </li>
                <li>
                  <strong className={styles.strongTitleInfo}>Armor Type:</strong> {card.basicInfo.armorType}
                </li>
              </ul>

              {/* Special Abilities */}
              <span className={styles.headingCard}>
                <h2 className={styles.cardH2Title}>Special Abilities</h2>
                <button onClick={toggleLanguage} className={styles.toggleLanguageBtn}>
                  {showEnglish ? "Translate To Persian" : "Translate To English"}
                </button>
              </span>
              <ul
                className={`${styles.abilitiesList} ${showEnglish ? styles.ltr : styles.rtl}`}
                style={persianFont}
              >
                {Object.keys(card.abilities).map((abilityKey, index) => {
                  const ability = card.abilities[abilityKey];
                  return (
                    <li key={index}>
                      <span className={styles.abilitiesText}>
                        {showEnglish ? ability.name.english : ability.name.persian}
                      </span>
                      :{" "}
                      {showEnglish
                        ? ability.description.english
                        : ability.description.persian}
                    </li>
                  );
                })}
              </ul>

              {/* Backstory Section */}
              <span className={styles.headingCard}>
                <h2 className={styles.cardH2Title}>Backstory</h2>
                <button onClick={toggleLanguage} className={styles.toggleLanguageBtn}>
                  {showEnglish ? "Translate To Persian" : "Translate To English"}
                </button>
              </span>

              <ul
                className={`${styles.backstoryList} ${textDirection}`}
                style={persianFont}
              >
                {showEnglish
                  ? card.backStory.english.map((paragraph, index) => (
                      <li key={index}>{paragraph}</li>
                    ))
                  : card.backStory.persian.map((paragraph, index) => (
                      <li key={index}>{paragraph}</li>
                    ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stat Box */}
        <div className={styles.rightContent}>
          <StatBox id={card.id} />
        </div>
      </div>
    </>
  );
};

export default SingleCardPage;
