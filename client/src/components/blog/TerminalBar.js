import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 20px;
  background-color: #333333;
`;

const Circle = styled.span`
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 15px;
  margin-left: 2px;
  border-width: 1px;
  background-color: #e95420;
`;

const Title = styled.div`
  text-align: center;
`;

const Buttons = styled.div`
  position: absolute;
`;

const terminalBar = (props) => {
  return (
    <Container>
      <Buttons>
        <Circle />
        <Circle />
        <Circle />
      </Buttons>

      <Title>{props.username}@blog:~</Title>
    </Container>
  );
};

export default terminalBar;
