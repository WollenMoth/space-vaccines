import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ScheduleCard from "./scheduleCard";
import {
  faCalendarDays,
  faLocationDot,
  faSyringe,
} from "@fortawesome/free-solid-svg-icons";

function ScheduleCards({ className }) {
  return (
    <CardGroup className={"h-group" + ((className && ` ${className}`) || "")}>
      <ScheduleCard
        icon={faLocationDot}
        label="Location"
        content="Jakarta Utara"
      />
      <ScheduleCard icon={faCalendarDays} label="Date" content="08 July 2021" />
      <ScheduleCard icon={faSyringe} label="Vaccine Type" content="Moderna" />
      <Card>
        <Button variant="primary">Submit</Button>
      </Card>
    </CardGroup>
  );
}

export default ScheduleCards;
