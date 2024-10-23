import styles from './Ready.module.css'; // Updated path to use CSS modules

const Ready = () => {
  return (
    <div className={styles.readyContainer}>
      <h2 className={styles.readyTitle}>Ready to dive in?</h2>
      <p className={styles.readySubtitle}>
        Step into the realm of Aurelia, where every choice, battle, and
        alliance shapes the fate of two worlds. Are you ready to forge your
        legacy?
      </p>
      <button className={styles.readyButton}>PLAY GAME</button>
    </div>
  );
};

export default Ready;
