import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import Blog from "./blog/Blog";
import Face from "./face/Face";
import NavBar from "./NavBar";
import Resume from "./resume/Resume";
import Contact from "./contact/Contact";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";

const Container = styled.div`
  padding-left: 5%;
  padding-top: 2%;
  background-color: black;
  color: white;
  min-height: 85vh;
  width: 80%;
`;

const layout = (props) => {
  return (
    <div style={{ paddingBottom: "5vh" }}>
      <NavBar />

      <Container>
        <Route path="/" exact component={Face} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/portfolio" exact component={Portfolio} />
      </Container>
    </div>
  );
};

export default layout;
