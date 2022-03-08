import React from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

const Posts = () => {
  return (
    <div className="postsNav">
      <ul>
        <li>
          <Link to="/posts/1">Post 1</Link>
        </li>
        <li>
          <Link to="/posts/2">Post 2</Link>
        </li>
        <li>
          <Link to="/posts/3">Post 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Posts;
