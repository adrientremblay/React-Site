import React from "react";

const skillBox = (props) => {
  let skills = props.skills.map((skill) => <li>{skill}</li>);

  return (
    <React.Fragment>
      <p>{props.name}</p>
      <ul>{skills}</ul>
    </React.Fragment>
  );
};

export default skillBox;
