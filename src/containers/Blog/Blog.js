import React, { Component } from "react";
import Posts from "./Posts/Posts";

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <h1>Adrien' Blog</h1>

        <Posts />
      </div>
    );
  }
}

export default Blog;
