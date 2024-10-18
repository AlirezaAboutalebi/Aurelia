import React from "react";
import "./PacksContainer.css";

const PacksContainer = ({ onOpenPack }) => {
  // Array representing the available packs
  const packs = [
    { id: "kingdom", name: "Kingdom Pack", image: "/images/Packs/KingdomPack.webp" },
    { id: "light", name: "Light Pack", image: "/images/Packs/LightPack.webp" },
    { id: "shadow", name: "Shadow Pack", image: "/images/Packs/ShadowPack.webp" }
  ];

  // Total slots we want to display (8 in total)
  const totalSlots = 8;

  return (
    <div className="packs-container">
      <div className="packs-grid">
        {Array.from({ length: totalSlots }).map((_, index) => {
          const pack = packs[index]; // Get the pack if available

          return pack ? (
            <div key={pack.id} className="pack-slot filled">
              <img
                src={pack.image}
                alt={pack.name}
                className="pack-image"
                onClick={() => onOpenPack(pack.id)} // Clicking on the image opens the pack
              />
       
            </div>
          ) : (
            <div key={index} className="pack-slot empty">
              <span className="empty-message">Empty Slot</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PacksContainer;
