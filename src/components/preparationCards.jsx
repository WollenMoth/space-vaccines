import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import PreparationCard from "./preparationCard";
import {
  faAppleWhole,
  faBed,
  faBeerMugEmpty,
  faPersonWalking,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function PreparationCards(props) {
  return (
    <CardGroup className="collapsible-group">
      <PreparationCard
        icon={faBeerMugEmpty}
        title="Avoid alcoholic beverages"
        text="Avoid alcoholic beverages, such as wine, beer, and liquor, and avoid caffeine-containing drinks. Alcoholic drinks may depress your immune system."
      />
      <PreparationCard
        icon={faXmark}
        title="Avoid stress"
        text="Stress has a profound effect on your immune work. Moreover, prolonged stress can increase cortisol production and oxidative stress in the body."
        collapsedState={false}
      />
      <PreparationCard
        icon={faAppleWhole}
        title="Eat healty food"
        text="Healty food can help you improve your immune response against the virus. It also helps your body to produce more energy."
      />
      <PreparationCard
        icon={faBed}
        title="Get enough sleep"
        text="Having enough sleep hours will help you to stay healthy and prevent the spread of the virus. Sleep is the key to a healthy immune system."
      />
      <PreparationCard
        icon={faPersonWalking}
        title="Exercise or physical activity"
        text="Exercise or physical activity can help you to stay healthy and prevent the spread of the virus. Exercise can help your body to produce more energy."
      />
    </CardGroup>
  );
}

export default PreparationCards;
