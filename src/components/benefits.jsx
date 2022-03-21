import React from "react";
import BenefitCards from "./benefitCards";

function Benefits(props) {
  return (
    <div className="grid">
      <div className="grid-content">
        <h2>Why I should vaccine?</h2>
        <p>
          In order to avoid any doubts about getting the COVID-19 vaccine,
          identify the following 4 benefits of COVID-19 vaccination:
        </p>
      </div>
      <BenefitCards className="grid-bottom" />
    </div>
  );
}

export default Benefits;
