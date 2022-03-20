import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Icon from "./icon";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function PreparationCard({ icon, title, text, collapsedState = true }) {
  const [collapsed, setCollapsed] = useState(collapsedState);

  return (
    <Card
      className={"collapsible" + ((!collapsed && " collapsible-expanded") || "")}
    >
      <Card.Header
        className="clickable"
        onClick={() => setCollapsed(!collapsed)}
      >
        <Icon icon={icon} />
        <Card.Title>{title}</Card.Title>
        <Icon
          icon={(collapsed && faChevronDown) || faChevronUp}
          className="collapsible-chevron"
        />
      </Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PreparationCard;
