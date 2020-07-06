import React from "react";
import { Route, Link } from "react-router-dom";
import Blog from "../Blog/Blog";
import Face from "../Face/Face";

const layout = (props) => {
  return (
    <React.Fragment>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
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
