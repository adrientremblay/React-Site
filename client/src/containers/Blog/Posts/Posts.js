import React, { Component } from "react";
import Post from "../../../components/Post/Post";
import axios from "axios";

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
          desc={post.description}
        />
      );
    });

    return <React.Fragment>{posts}</React.Fragment>;
  }
}

export default Posts;
