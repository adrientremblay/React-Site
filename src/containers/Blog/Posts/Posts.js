import React from "react";
import Post from "../../../components/Post/Post";

const posts = (props) => {
  return (
    <React.Fragment>
      <Post
        title="sample title"
        date="12 aug 2069"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Ac turpis egestas sed tempus urna et pharetra. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Nunc mattis enim ut tellus elementum sagittis. Id consectetur purus ut faucibus pulvinar elementum. Id venenatis a condimentum vitae sapien pellentesque. Pretium vulputate sapien nec sagittis. Lorem donec massa sapien faucibus et. Nec feugiat in fermentum posuere urna nec tincidunt. Aenean sed adipiscing diam donec adipiscing tristique risus."
      ></Post>

      <Post title="sample title" date="12 aug 2069" desc="stuff"></Post>
    </React.Fragment>
  );
};

export default posts;
