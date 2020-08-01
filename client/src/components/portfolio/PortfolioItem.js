import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 250px;
`;

const Image = styled.img`
  display: block;
  float: left;
  width: 250px;
  border: 2px solid white;
`;

const Skills = styled.div`
  max-height: 150px;
  display: inline-block;

  ul {
    columns: 3;
    -webkit-columns: 3;
    -moz-columns: 3;
  }

  ul li {
    padding-right: 50px;
  }
`;

const portfolioItem = (props) => {
  return (
    <Container>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Image
        src={require("../../../public/images/" + props.imgName)}
        alt={props.title}
      ></Image>
      <Skills>
        <h3 style={{ marginLeft: "20px" }}>Technologies Used</h3>
        <ul>
          {props.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </Skills>
    </Container>
  );
};

export default portfolioItem;
