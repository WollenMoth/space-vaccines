import React from "react";
import Image from "react-bootstrap/Image";
import ContactCards from "./contactCards";
import contactImage from "../assets/images/contact.webp";

function Contact(props) {
  return (
    <div className="grid">
      <div className="grid-content">
        <h2>Emergency Contact</h2>
        <p>
          Contact one of the contacts below if you or your family feel unwell
          and have similar symptoms such as COVID-19, make sure you also take
          care of yourself before reporting to us:
        </p>
      </div>
      <div className="grid-image-container grid-bottom-right" />
      <Image src={contactImage} className="grid-image grid-right" />
      <ContactCards className="grid-botton-left mx-4" />
    </div>
  );
}

export default Contact;
