import React from 'react';
import './PacksContainer.css';

const PacksContainer = ({ onOpenPack }) => {
  return (
    <div className="packs-container">
      <div className="packs-grid">
        
        {/* Kingdom Pack */}
        <div className="pack-card">
          <img src="/images/Packs/KingdomPack.webp" alt="Kingdom Pack" className="pack-image" />
          <h3>Kingdom Pack</h3>
          <p>Unlock the Kingdom Pack</p>
          <button className="packs-button" onClick={() => onOpenPack('kingdom')}>
            Open Pack
          </button>
        </div>

        {/* Light Pack */}
        <div className="pack-card">
          <img src="/images/Packs/LightPack.webp" alt="Light Pack" className="pack-image" />
          <h3>Light Pack</h3>
          <p>Unlock the Light Pack</p>
          <button className="packs-button" onClick={() => onOpenPack('light')}>
            Open Pack
          </button>
        </div>

        {/* Shadow Pack */}
        <div className="pack-card">
          <img src="/images/Packs/ShadowPack.webp" alt="Shadow Pack" className="pack-image" />
          <h3>Shadow Pack</h3>
          <p>Unlock the Shadow Pack</p>
          <button className="packs-button" onClick={() => onOpenPack('shadow')}>
            Open Pack
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default PacksContainer;
