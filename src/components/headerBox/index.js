import "../../pages/dashboard/styles/progressiveBar.css";
import React from "react";

const HeaderBox = ({ title, children }) => {
  return (
    <div className="projectsContainer">
      <div className="headerContainer">
        <h2>{title}</h2>
      </div>
      <div className="projectDetails">{children}</div>
    </div>
  );
};

export default HeaderBox;
