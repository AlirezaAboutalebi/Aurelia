import './LandingCard.css';

const LandingCard = ({ iconSrc, title, description }) => {
  return (
    <div className="landing-card">
      {/* Four corners */}
      <div className="landing-card__corner landing-card__corner--top-left"></div>
      <div className="landing-card__corner landing-card__corner--top-right"></div>
      <div className="landing-card__corner landing-card__corner--bottom-left"></div>
      <div className="landing-card__corner landing-card__corner--bottom-right"></div>

      {/* Icon */}
      <div className="landing-card__icon-container">
        <img src={iconSrc} alt={`${title} Icon`} className="landing-card__icon" />
      </div>

      {/* Title */}
      <h2 className="landing-card__title">{title}</h2>

      {/* Description */}
      <p className="landing-card__description">{description}</p>
    </div>
  );
};

export default LandingCard;
