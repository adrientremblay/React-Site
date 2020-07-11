import React from "react";
import { Route } from "react-router-dom";
import Blog from "../Blog/Blog";
import Face from "../Face/Face";
import classes from "./Layout.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";

const layout = (props) => {
  return (
    <div style={{ paddingBottom: "5vh" }}>
      <NavBar />

      <div className={classes.Main}>
        <Route path="/" exact component={Face} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/resume" exact component={Resume} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/portfolio" exact component={Portfolio} />
      </div>
    </div>
  );
};

export default layout;
