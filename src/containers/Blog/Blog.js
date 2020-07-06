import React, { Component } from "react";
import Posts from "./Posts/Posts";

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <p>Adrien' Blog</p>

        <Posts />
      </div>
    );
  }
}

export default Blog;
