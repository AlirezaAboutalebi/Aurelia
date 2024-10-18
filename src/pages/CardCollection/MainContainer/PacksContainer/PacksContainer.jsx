import React from 'react';
import './PacksContainer.css';

const PacksContainer = ({ onOpenPack }) => {
  return (
    <div className="packs-container">
      <h2 className="packs-title">Select a Pack</h2>
      <div className="packs-grid">
        <div className="pack-card">
          <img src="/images/Packs/KingdomPack.webp" alt="Kingdom Pack" className="pack-image" />
          <button className="packs-button" onClick={() => onOpenPack('kingdom')}>
            Open Kingdom Pack
          </button>
        </div>
        <div className="pack-card">
          <img src="/images/Packs/LightPack.webp" alt="Light Pack" className="pack-image" />
          <button className="packs-button" onClick={() => onOpenPack('light')}>
            Open Light Pack
          </button>
        </div>
        <div className="pack-card">
          <img src="/images/Packs/ShadowPack.webp" alt="Shadow Pack" className="pack-image" />
          <button className="packs-button" onClick={() => onOpenPack('shadow')}>
            Open Shadow Pack
          </button>
        </div>
      </div>
    </div>
  );
};

export default PacksContainer;
