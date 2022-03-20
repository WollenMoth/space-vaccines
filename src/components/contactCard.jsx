import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "./icon";
import Button from "react-bootstrap/Button";

function ContactCard({
  icon,
  title,
  number,
  buttonLabel,
  variant = "secondary",
}) {
  return (
    <Card className="contact-card">
      <Card.Header>
        <Icon icon={icon} size="2xl" />
        <div className="contact-info">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{number}</Card.Text>
        </div>
      </Card.Header>
      <Card.Body>
        <Button variant={variant}>{buttonLabel}</Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCard;
