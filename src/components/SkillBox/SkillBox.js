import React from "react";

const skillBox = (props) => {
  let skills = props.skills.map((skill) => <li>{skill}</li>);

  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <ul>{skills}</ul>
    </React.Fragment>
  );
};

export default skillBox;
