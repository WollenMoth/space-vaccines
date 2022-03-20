import React from "react";
import Card from "react-bootstrap/Card";
import Icon from "./icon";

function ScheduleCard({ icon, label, content }) {
  return (
    <Card>
      <Card.Header>
        <Icon icon={icon} />
        <Card.Text className="icon-label">{label}</Card.Text>
      </Card.Header>
      <Card.Body>
        <Card.Title className="content">{content}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default ScheduleCard;
