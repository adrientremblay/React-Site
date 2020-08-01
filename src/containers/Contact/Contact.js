import React from "react";
import Title from "../../components/Title/Title";

const contact = (props) => {
  return (
    <div>
      <Title>Contact me</Title>
      <p>
        For business inquires email me at{" "}
        <a href="mailto:adrien@adrientremblay.com">adrien@adrientremblay.com</a>
        .
      </p>
    </div>
  );
};

export default contact;
