import React from "react";
import { Route } from "react-router-dom";
import Blog from "../Blog/Blog";
import Face from "../Face/Face";
import classes from "./Layout.module.css";
import NavLink from "../../hoc/NavLink/NavLink";

const layout = (props) => {
  return (
    <React.Fragment>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
      </header>

      <Route path="/" exact component={Face} />
      <Route path="/blog" exact component={Blog} />
    </React.Fragment>
  );
};

export default layout;
