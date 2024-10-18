import React from 'react';
import './PacksContainer.css'; // Import CSS for styling

const PacksContainer = () => {
  return (
    <div className="packs-container">
      <h2 className="packs-title">Available Packs</h2>
      <div className="packs-grid">
        <div className="pack-card">
          <h3>Kingdom Pack</h3>
          <p>Explore the heroes and lore from the Kingdom realm.</p>
          <button className="open-pack-button">Open Pack</button>
        </div>
        <div className="pack-card">
          <h3>Light Pack</h3>
          <p>Discover the champions of light and their journeys.</p>
          <button className="open-pack-button">Open Pack</button>
        </div>
        <div className="pack-card">
          <h3>Shadow Pack</h3>
          <p>Reveal the warriors and mysteries of the shadow lands.</p>
          <button className="open-pack-button">Open Pack</button>
        </div>
      </div>
    </div>
  );
};

export default PacksContainer;
