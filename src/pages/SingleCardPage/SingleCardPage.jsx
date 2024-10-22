import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import DATA from "../../data/DATA.json"; // Ensure the path is correct
import Navigation from "../../components/Navigation/Navigation";
import "./SingleCardPage.css";

const SingleCardPage = () => {
  const { cardId } = useParams(); // Retrieve the cardId from the route

  useEffect(() => {
    // Disable scrolling when this component is mounted
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when this component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const card = DATA.find((c) => c.id === cardId); // Compare as strings

  // If card is not found, display a message
  if (!card) {
    return <div>Card not found</div>;
  }

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
                <strong>Damasge Type:</strong> {card.basicInfo.damageType}
              </li>
              <li>
                <strong>Weapon:</strong> {card.basicInfo.weapon}
              </li>
              <li>
                <strong>Armor Type:</strong> {card.basicInfo.armorType}
              </li>
            </ul>
            <h2>Special Abilities</h2>
            <p>{card.basicInfo.abilities}</p>
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
