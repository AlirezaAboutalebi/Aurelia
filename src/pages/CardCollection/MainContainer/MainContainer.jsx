import React from "react";
import "./MainContainer.css"; // Importing CSS for styling
import StatBox from "../../../components/StatBox/Statbox";

const MainContainer = ({ children }) => {
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
      <StatBox/>
      </div>
    </div>
  );
};

export default MainContainer;
