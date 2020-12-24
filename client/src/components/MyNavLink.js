import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkBox = styled.div``;

const activeClassName = "nav-item-active";

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  text-align: right;
  width: 100px;
  height: 50px;
  line-height: 50px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: large;

  @media only screen and (max-width: 600px) {
    font-size: small;
  }

  &:hover,
  :active {
    color: red;
  }

  &.${activeClassName} {
    text-decoration: underline;
  }
`;

const myNavLink = (props) => {
  return (
    <StyledLink exact to={props.to}>
      <LinkBox>{props.name}</LinkBox>
    </StyledLink>
  );
};

export default myNavLink;
