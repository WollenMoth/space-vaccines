import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "./icon";

function BenefitCard({ icon, title, text }) {
  return (
    <Card>
      <Card.Header>
        <Icon icon={icon} size="2xl" />
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BenefitCard;
