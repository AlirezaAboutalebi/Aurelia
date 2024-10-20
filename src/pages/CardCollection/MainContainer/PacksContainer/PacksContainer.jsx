import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PacksContainer.css';
import packsData from '../../../../data/packsDATA.json';

const PacksContainer = () => {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom
  const totalSlots = 8; // Total number of pack slots

  // Handle pack click to navigate to the single pack page
  const handlePackClick = (packId) => {
    navigate(`/packs/${packId}`); // Navigate to the specific pack's page based on its ID
  };

  return (
    <div className="packs-container">
      <div className="packs-grid">
        {Array.from({ length: totalSlots }).map((_, index) => {
          const pack = packsData.packs[index];

          return pack ? (
            <div 
              key={pack.id || `pack-${index}`} 
              className="pack-slot"
              onClick={() => handlePackClick(pack.id)} // Add click handler for navigation
            >
              <img src={pack.image} alt={pack.packTitle} className="pack-image" />
            </div>
          ) : (
            <div key={`empty-pack-${index}`} className="pack-slot empty">
              <span className="empty-message">No Pack Available</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PacksContainer;
