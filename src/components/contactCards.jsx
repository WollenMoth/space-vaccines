import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import ContactCard from "./contactCard";
import {
  faCommentDots,
  faEnvelope,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

function ContactCards(props) {
  return (
    <CardGroup>
      <ContactCard
        icon={faPhone}
        title="Call"
        number="021.123.145.14"
        buttonLabel="Call Now"
      />
      <ContactCard
        icon={faCommentDots}
        title="Chat"
        number="021.123.145.14"
        buttonLabel="Chat Now"
        variant="primary"
      />
      <ContactCard
        icon={faVideo}
        title="Video Call"
        number="021.123.145.14"
        buttonLabel="Video Call Now"
      />
      <ContactCard
        icon={faEnvelope}
        title="Message"
        number="021.123.145.14"
        buttonLabel="Message Now"
      />
    </CardGroup>
  );
}

export default ContactCards;
