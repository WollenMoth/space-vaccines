import React from "react";
import Image from "react-bootstrap/Image";
import LabeledIcon from "./labeledIcon";
import ScheduleCards from "./scheduleCards";
import heroImage from "../assets/images/hero.webp";
import {
  faClock,
  faShieldBlank,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function Hero(props) {
  return (
    <div className="grid">
      <div className="grid-content">
        <h1>Fight Virus With Vaccines</h1>
        <p>
          Let's stop this pandemic by killing the virus with a vaccine, don't
          let yourself and your family get infected
        </p>
        <div className="flex">
          <LabeledIcon
            icon={faShieldBlank}
            variant="icon-accent"
            label="Best Protection"
          />
          <LabeledIcon
            icon={faStar}
            variant="icon-accent"
            label="Selected Vaccines"
          />
        </div>
      </div>
      <div className="grid-image-container grid-right" />
      <Image src={heroImage} className="grid-image grid-right" />
      <div className="grid-bottom ms-10">
        <LabeledIcon icon={faClock} label="Schedule your vaccinations" />
        <ScheduleCards />
      </div>
    </div>
  );
}

export default Hero;
