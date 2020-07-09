import React from "react";
import { Route } from "react-router-dom";
import Blog from "../Blog/Blog";
import Face from "../Face/Face";
import classes from "./Layout.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Resume from "../../components/Resume/Resume";

const layout = (props) => {
  return (
    <React.Fragment>
      <NavBar />

      <div className={classes.Main}>
        <Route path="/" exact component={Face} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/resume" exact component={Resume} />
      </div>
    </React.Fragment>
  );
};

export default layout;
