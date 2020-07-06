import React from "react";
import { Route, Link } from "react-router-dom";

const layout = (props) => {
  return (
    <React.Fragment>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Blog</li>
          </ul>
        </nav>
      </header>

      <Route path="/" exact />
    </React.Fragment>
  );
};

export default layout;
