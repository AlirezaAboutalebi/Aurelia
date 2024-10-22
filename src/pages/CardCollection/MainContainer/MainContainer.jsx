import React from "react";
import "./MainContainer.css"; // Importing CSS for styling
import StatBox from "../../../components/StatBox/StatBox";

const MainContainer = ({ children, hoveredCardId }) => {
  return (
    <div className="flex-stat-container">
      <div className="main-container">
        <div className="main-container__content">{children}</div>
        <img
          src="/decoration/ContainderDeco.webp"
          alt=""
          className="container_deco"
        />
      </div>
      <div className="statbox-collection">
        <StatBox id={hoveredCardId || "0"} /> {/* Default to 0 if no card is hovered */}
      </div>
    </div>
  );
};

export default MainContainer;
