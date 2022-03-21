import React from "react";
import Icon from "./icon";

function LabeledIcon({ icon, variant, label }) {
  return (
    <div className="flex mb-5">
      <Icon icon={icon} variant={variant} />
      <p
        className={
          "icon-label" + ((variant === "icon-accent" && " icon-label-sm") || "")
        }
      >
        {label}
      </p>
    </div>
  );
}

export default LabeledIcon;
