import React from "react";
import Post from "../../../components/Post/Post";

const posts = (props) => {
  return (
    <React.Fragment>
      <Post title="sample title" date="12 aug 2069" desc="stuff"></Post>

      <Post title="sample title" date="12 aug 2069" desc="stuff"></Post>
    </React.Fragment>
  );
};

export default posts;
