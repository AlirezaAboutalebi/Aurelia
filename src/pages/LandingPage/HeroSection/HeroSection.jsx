import './HeroSection.css';  // Import the CSS for this section

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section__overlay hero-section__overlay--right"></div>
      <div className="hero-section__overlay hero-section__overlay--bottom"></div>
      <div className="hero-section__overlay hero-section__overlay--top"></div>
      
      <img
        src="/images/HeroSection.webp"
        alt="Hero Section Background"
        className="hero-section__background-image"
      />
      
      <div className="hero-section__text-container">
        <h1 className="hero-section__title">Introduction</h1>
        <div className="hero-section__intro-text">
          <div className="hero-section__highlight-paragraph">
            <span className="hero-section__highlight">B</span>
            <p className="hero-section__paragraph">
              ecome part of the legend in Aurelia, In a realm torn between Light
              and Shadow, ancient powers stir, and the balance of peace begins
              to crumble. As darkness creeps across the land, heroes must rise
              to defend their world, uncover secrets long buried, and restore
              the fragile harmony that keeps the realms from falling into chaos.
              <span className="hero-section__span">
                Will you answer the call and become the champion this world
                desperately needs?
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
