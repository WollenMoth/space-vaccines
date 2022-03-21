import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import BenefitCard from "./benefitCard";
import {
  faShieldBlank,
  faSquarePollVertical,
  faUsers,
  faVirus,
} from "@fortawesome/free-solid-svg-icons";

function BenefitCards({ className }) {
  return (
    <CardGroup className={className}>
      <BenefitCard
        icon={faVirus}
        title="Minimize the spread of viruses"
        text="Vaccine has been proven effective to prevent someone from getting
            infected with Coronavirus"
      />
      <BenefitCard
        icon={faShieldBlank}
        title="Forming antibodies"
        text="COVID-19 vaccine proven to help shape antibody response for immune
        system"
      />
      <BenefitCard
        icon={faUsers}
        title="Protecting people nearby"
        text="The benefits of COVID-19 vaccination are the vaccine that we get can
        also help protect people around us"
      />
      <BenefitCard
        icon={faSquarePollVertical}
        title="Creating group immunity"
        text="COVID-19 vaccination is algo beneficial for creating group immunity
        or herd immunity"
      />
    </CardGroup>
  );
}

export default BenefitCards;
