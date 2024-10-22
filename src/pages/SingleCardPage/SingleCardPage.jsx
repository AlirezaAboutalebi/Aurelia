import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DATA from "../../data/DATA.json";
import Navigation from "../../components/Navigation/Navigation";
import "./SingleCardPage.css";

const SingleCardPage = () => {
  const { cardId } = useParams();
  const [showEnglish, setShowEnglish] = useState(true); // State to toggle between English and Persian text

  useEffect(() => {
    // Disable scrolling when this component is mounted
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when this component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const card = DATA.find((c) => c.id === cardId); // Find the card by its ID

  // If card is not found, display a message
  if (!card) {
    return <div>Card not found</div>;
  }

  const toggleLanguage = () => {
    setShowEnglish(!showEnglish); // Toggle the language
  };

  const textDirection = showEnglish ? "ltr" : "rtl"; // Set text direction based on language
  const persianFont = !showEnglish ? { fontFamily: 'Tahoma' } : {}; // Apply Persian font when needed

  return (
    <>
      <div className="figure-overlay"></div>
      <Navigation />
      <div className="single-card-page">
        <div className="left-content">
          <div className="card__overlay card__overlay--right"></div>
          <div className="card__overlay card__overlay--bottom"></div>
          <div className="card__overlay card__overlay--top"></div>
          <img
            className="card-banner"
            src={card.images.banner}
            alt={card.basicInfo.characterName}
          />
          <div className="card-info">
            <img
              className="card-image"
              src={card.images.back}
              alt={card.basicInfo.characterName}
            />
            <div className="card--content">
              <h1 className="card--title">{card.basicInfo.characterName}</h1>
              <ul className="card-details">
                <li>
                  <strong>Real Name:</strong> {card.basicInfo.realName}
                </li>
                <li>
                  <strong>Realm:</strong> {card.basicInfo.realm}
                </li>
                <li>
                  <strong>Role:</strong> {card.basicInfo.role}
                </li>
                <li>
                  <strong>Damage Type:</strong> {card.basicInfo.damageType}
                </li>
                <li>
                  <strong>Weapon:</strong> {card.basicInfo.weapon}
                </li>
                <li>
                  <strong>Armor Type:</strong> {card.basicInfo.armorType}
                </li>
              </ul>

              {/* Special Abilities */}
              <h2>Special Abilities</h2>
              <ul className={`abilities-list ${showEnglish ? 'ltr' : 'rtl'}`} style={persianFont}>
                {Object.keys(card.abilities).map((abilityKey, index) => {
                  const ability = card.abilities[abilityKey];
                  return (
                    <li key={index}>
                      <span className="abilitis--Text">
                        {showEnglish
                          ? ability.name.english
                          : ability.name.persian}
                      </span>
                      :{" "}
                      {showEnglish
                        ? ability.description.english
                        : ability.description.persian}
                    </li>
                  );
                })}
              </ul>

              {/* Backstory Section with Language Toggle */}
              <h2>Backstory</h2>
              <button onClick={toggleLanguage} className="toggle-language-btn">
                {showEnglish ? "Translate To Persian" : "Translate To English"}
              </button>
              <ul className={`backstory-list ${textDirection}`} style={persianFont}>
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

        {/* Placeholder for stats box (image for now) */}
        <div className="right-content">
          <img className="stats-box" src="/images/Stats.png" alt="Stats Box" />
        </div>
      </div>
    </>
  );
};

export default SingleCardPage;
