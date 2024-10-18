import React from 'react';
import './PacksContainer.css';

const PacksContainer = ({ onOpenPack }) => {
  return (
    <div className="packs-container">
      <h2 className="packs-title">Select a Pack</h2>
      <div className="packs-grid">
        <div className="pack-card">
          <h3>Kingdom Pack</h3>
          <p>Unlock the Kingdom Pack</p>
          <button className="open-pack-button" onClick={() => onOpenPack('kingdom')}>
            Open Pack
          </button>
        </div>
        <div className="pack-card">
          <h3>Light Pack</h3>
          <p>Unlock the Light Pack</p>
          <button className="open-pack-button" onClick={() => onOpenPack('light')}>
            Open Pack
          </button>
        </div>
        <div className="pack-card">
          <h3>Shadow Pack</h3>
          <p>Unlock the Shadow Pack</p>
          <button className="open-pack-button" onClick={() => onOpenPack('shadow')}>
            Open Pack
          </button>
        </div>
      </div>
    </div>
  );
};

export default PacksContainer;
