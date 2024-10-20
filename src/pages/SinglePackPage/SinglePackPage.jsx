import React from "react";
import { useParams } from "react-router-dom";
import packsData from "../../data/packsDATA.json";
import "./SinglePackPage.css"; // Importing the new CSS
import Navigation from "../../components/Navigation/Navigation";

const SinglePackPage = () => {
  const { packId } = useParams();
  const pack = packsData.packs.find((p) => p.id === parseInt(packId));

  if (!pack) {
    return <div>Pack not found</div>;
  }

  return (
    <>
    <div className="figure-overlay"></div>
    <Navigation/>

    <div className="single-pack-container">
      <div className="single-pack-content">
        <h1 className="pack-realm">{pack.realmName}</h1>
        <h2 className="pack-title">{pack.packTitle}</h2>

        <p className="pack-description">{pack.packDescription1}</p>
        <p className="pack-description">{pack.packDescription2}</p>
        <p className="pack-description">{pack.packDescription3}</p>
        <button className="open-pack-button">Open Pack Now</button>
      </div>
      <img
        src={pack.image}
        alt={pack.packTitle}
        className="single-pack-image"
      />
      {/* Dice or other decorative images if needed */}
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
    </div>
    </>
  );
};

export default SinglePackPage;
