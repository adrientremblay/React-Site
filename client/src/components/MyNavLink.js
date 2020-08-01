import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const LinkBox = styled.div`
  text-align: center;
  width: 100px;
  height: 50px;
  line-height: 50px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: large;

  :hover,
  :active {
    color: red;
  }

  .Active {
    text-decoration: underline;
  }
`;

const myNavLink = (props) => {
  return (
    <NavLink
      style={{ textDecoration: "none" }}
      exact
      activeClassName="Active"
      to={props.to}
    >
      <LinkBox>{props.name}</LinkBox>
    </NavLink>
  );
};

export default myNavLink;
