import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon({ icon, variant = "icon-primary", size = "sm" }) {
  return (
    <span
      className={
        "icon-container" +
        ((variant === "icon-accent" && " icon-container-accent") || "") +
        ((size === "xl" && " icon-container-xl") || "")
      }
    >
      <FontAwesomeIcon icon={icon} size={size} className={variant} />
    </span>
  );
}

export default Icon;
