import React, { Component } from "react";
import Post from "./Post";
import axios from "axios";
import draftToHtml from "draftjs-to-html";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get("/api/posts").then((request) => {
      const posts = request.data;
      this.setState({ posts: posts });
    });
  }

  render() {
    let posts = this.state.posts.map((post) => {
      return (
        <Post
          key={post.date}
          title={post.title}
          author={post.username}
          date={post.date}
          desc={draftToHtml(JSON.parse(post.description))}
        />
      );
    });

    return <React.Fragment>{posts}</React.Fragment>;
  }
}

export default Posts;
