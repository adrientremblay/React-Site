import React, { Component } from "react";
import Posts from "./Posts";
import Title from "../Title";

class Blog extends Component {
  render() {
    return (
      <div className="blog">
        <Title>Adrien's Blog</Title>
        <p>Work in progress!</p>

        <Posts />
      </div>
    );
  }
}

export default Blog;
