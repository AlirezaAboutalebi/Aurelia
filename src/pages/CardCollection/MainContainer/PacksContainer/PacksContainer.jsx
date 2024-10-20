import React from 'react';
import './PacksContainer.css';
import packsData from '../../../../DATA/PacksDATA.json';

const PacksContainer = () => {
  // Define a fixed number of slots (8 in this case)
  const totalSlots = 8;

  return (
    <div className="packs-container">
      <div className="packs-grid">
        {packsData.packs.map((pack, index) => (
          <div key={pack.id} className="pack-slot">
            <img src={pack.image} alt={pack.packTitle} className="pack-image" />
          </div>
        ))}

        {/* Render empty slots for the remaining spaces */}
        {Array.from({ length: totalSlots - packsData.packs.length }).map((_, index) => (
          <div key={index} className="pack-slot empty">
            <span className="empty-message">No Pack</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PacksContainer;
