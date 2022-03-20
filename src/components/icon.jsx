import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon({
  icon,
  variant = "icon-primary",
  size = null,
  className = null,
}) {
  return (
    <span
      className={
        "icon-container" +
        ((variant === "icon-accent" && " icon-container-accent") || "") +
        ((size === "2xl" && " icon-container-2xl") || "") +
        ((className && ` ${className}`) || "")
      }
    >
      <FontAwesomeIcon icon={icon} size={size} className={variant} />
    </span>
  );
}

export default Icon;
