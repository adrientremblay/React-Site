import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconButton = (props) => {
  return (
    <FontAwesomeIcon
      onClick={() => window.open(props.href, "_blank")}
      icon={props.icon}
      size="lg"
      style={{ paddingRight: "10px", cursor: "pointer" }}
    />
  );
};

export default iconButton;
