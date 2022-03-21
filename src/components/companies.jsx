import React from "react";
import Image from "react-bootstrap/Image";
import AstraZeneca from "../assets/images/astrazeneca.svg";
import Moderna from "../assets/images/moderna.svg";
import Pfizer from "../assets/images/pfizer.svg";
import Sinovac from "../assets/images/sinovac.svg";

function Companies(props) {
  return (
    <div className="flex">
      <Image src={AstraZeneca} className="image image-gray" />
      <Image src={Sinovac} className="image image-gray" />
      <Image src={Pfizer} className="image image-gray" />
      <Image src={Moderna} className="image image-gray" />
    </div>
  );
}

export default Companies;
