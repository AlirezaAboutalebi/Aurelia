import React from "react";
import "./LostCardsContainer.css"; // Import the new CSS

const LostCardsContainer = () => {
  const totalSlots = 18; // Total number of slots including empty slots

  return (
    <div className="lost-cards-container">
      <div className="cards-grid">
        {Array.from({ length: totalSlots }).map((_, index) => (
          <div key={`lost-card-${index}`} className="empty-Lost-card-slot">
            <span className="empty-Lost-message ">No Lost Card</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LostCardsContainer;
