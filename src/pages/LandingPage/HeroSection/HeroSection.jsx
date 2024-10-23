import styles from './HeroSection.module.css'; 

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={`${styles.heroSectionOverlay} ${styles.heroSectionOverlayRight}`}></div>
      <div className={`${styles.heroSectionOverlay} ${styles.heroSectionOverlayBottom}`}></div>
      <div className={`${styles.heroSectionOverlay} ${styles.heroSectionOverlayTop}`}></div>
      
      <img
        src="/images/HeroSection.webp"
        alt="Hero Section Background"
        className={styles.heroSectionBackgroundImage}
      />
      
      <div className={styles.heroSectionTextContainer}>
        <h1 className={styles.heroSectionTitle}>Introduction</h1>
        <div className={styles.heroSectionIntroText}>
          <div className={styles.heroSectionHighlightParagraph}>
            <span className={styles.heroSectionHighlight}>B</span>
            <p className={styles.heroSectionParagraph}>
              ecome part of the legend in Aurelia, In a realm torn between Light
              and Shadow, ancient powers stir, and the balance of peace begins
              to crumble. As darkness creeps across the land, heroes must rise
              to defend their world, uncover secrets long buried, and restore
              the fragile harmony that keeps the realms from falling into chaos.
              <span className={styles.heroSectionSpan}>
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
