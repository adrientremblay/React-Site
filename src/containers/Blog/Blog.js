import React, { Component } from "react";
import Posts from "./Posts/Posts";
import classes from "./Blog.module.css";

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <h1 className={classes.Title}>Adrien' Blog</h1>

        <Posts />
      </div>
    );
  }
}

export default Blog;
