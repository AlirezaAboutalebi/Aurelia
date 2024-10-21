import './ClaimBanner.css';

const ClaimBanner = () => {
  return (
    <div className="claim-banner">
      <div className="cards-container">
        <img src="/images/Types/Shadow/Sage.webp" alt="Card 1" className="card-image card-image1" />
        <img src="/images/Types/Light/Magician.webp" alt="Card 3" className="card-image card-image3" />
        <img src="/images/Types/Kingdom/Warrior.webp" alt="Card 2" className="card-image card-image2" />
      </div>
      <div className="claim-message">
        <p>You've got cards to claim!</p>
        <button className="claim--button">CLAIM NOW</button>
      </div>
    </div>
  );
};

export default ClaimBanner;
