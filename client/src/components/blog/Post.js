import React from "react";
import styled from "styled-components";
import TerminalBar from "./TerminalBar";
// import Draggable from "react-draggable";

const Container = styled.div`
  width: 500px;
  margin: 25px 25px 25px 0px;
  display: inline-block;
  font-family: "Roboto Mono", monospace;
  color: white;
  background-color: #2c001e;
  min-height: 25vh;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
`;

const post = (props) => {
  return (
    // <Draggable>
    <Container>
      <TerminalBar username={props.author} />
      <div>
        <ul>
          <li>Title: {props.title}</li>
          <li>Date: {props.date}</li>
          <li>Description: {props.desc}</li>
        </ul>
      </div>
    </Container>
    // </Draggable>
  );
};

export default post;
