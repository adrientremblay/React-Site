import React from "react";
import styled from "styled-components";
import MyNavLink from "./MyNavLink";

const Container = styled.div`
  top: 5vh;
  right: 2%;
  width: 10%;
  position: fixed;
  display: flex;
  flex-direction: column;
`;

const navBar = (props) => {
  return (
    <Container>
      <nav>
        <MyNavLink name="Home" to="/" />
        <MyNavLink name="Blog" to="/blog" />
        <MyNavLink name="Portfolio" to="/portfolio" />
        <MyNavLink name="Skills" to="/skills" />
        <MyNavLink name="Resume" to="/resume" />
        <MyNavLink name="Contact" to="/contact" />
      </nav>
    </Container>
  );
};

export default navBar;
