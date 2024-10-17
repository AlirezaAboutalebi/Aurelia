import "./Ready.css"; // Updated path to the CSS file

const Ready = () => {
  return (
    <div className="ready__container">
      <h2 className="ready__title">Ready to dive in?</h2>
      <p className="ready__subtitle">
        Step into the realm of Aurelia, where every choice, battle, and
        alliance shapes the fate of two worlds. Are you ready to forge your
        legacy?
      </p>
      <button className="ready__button">PLAY GAME</button>
    </div>
  );
};

export default Ready;
