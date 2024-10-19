import { useNavigate } from "react-router-dom"; // For navigation after claiming cards
import "./FreePack.css";
import Navigation from "../../components/Navigation/Navigation";

const FreePack = () => {
  const navigate = useNavigate();

  const handleClaimCards = () => {
    // Redirect the user to the card collection or a specific page
    navigate("/card-collection");
  };

  return (
    <>
    <div className="figure-overlay"></div>
    <Navigation/>
    <div className="free-pack-container">
      <div className="free-pack-content">
        <h1 className="free-pack-title">
          Claim <br />
          <span>Free Pack</span>
        </h1>
        <p className="free-pack-description">
        Your journey begins with the Kingdom’s champions. Purchase the pack and lead the charge for glory!
        </p>
        <p className="free-pack-value">
        Purchase For <span className="discount">$3.99</span>
        </p>
        <button className="claim-button" onClick={handleClaimCards}>
        Claim Free
        </button>
      </div>
      <img src="/decoration/dice1.webp" alt="Dice 1" className="FreePack__dice FreePack__dice--1" />
      <img src="/decoration/dice2.webp" alt="Dice 2" className="FreePack__dice FreePack__dice--2" />
      <img src="/decoration/dice3.webp" alt="Dice 3" className="FreePack__dice FreePack__dice--3" />
      <img src="/images/Packs/KingdomPack.webp" alt="Free Pack" className="free-pack-image" />
    </div>
    </>
  );
};

export default FreePack;
