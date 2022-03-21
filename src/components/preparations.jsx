import React from "react";
import Image from "react-bootstrap/Image";
import preparationsImage from "../assets/images/preparations.webp";
import PreparationCards from "./preparationCards";

function Preparations(props) {
  return (
    <div className="grid">
      <div className="grid-content">
        <h2>Preparations Before Vaccine</h2>
        <p>
          The success of vaccines is strongly influenced by the strength of the
          body's immune system. Therefore, there are several things that can be
          tried to make the COVID-19 vaccine work:
        </p>
      </div>
      <div className="grid-image-container grid-bottom-left" />
      <Image src={preparationsImage} className="grid-image grid-left" />
      <PreparationCards />
    </div>
  );
}

export default Preparations;
