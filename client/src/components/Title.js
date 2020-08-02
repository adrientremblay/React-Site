import React from "react";
import styled from "styled-components";
import Typist from "react-typist";

const TitleText = styled.span`
  font-size: xx-large;
`;

const title = (props) => {
  return (
    <TitleText>
      <Typist
        cursor={{
          hideWhenDone: true,
        }}
      >
        {props.children}
      </Typist>
    </TitleText>
  );
};

export default title;
