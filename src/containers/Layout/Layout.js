import React from "react";
import { Route, Link } from "react-router-dom";
import Blog from "../Blog/Blog";
import Face from "../Face/Face";
import classes from "./Layout.module.css";

const layout = (props) => {
  return (
    <React.Fragment>
      <header>
        <nav>
          <ul>
            <li>
              <Link className={classes.Link} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={classes.Link} to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Route path="/" exact component={Face} />
      <Route path="/blog" exact component={Blog} />
    </React.Fragment>
  );
};

export default layout;
