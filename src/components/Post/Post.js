import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/posts", { replace: true });
  };
  return (
    <div>
      <h1>Post</h1>
      <p>Post id is {params.postId}</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quis non, maxime ipsum quas tempora nemo nulla aliquid dolorum. Consequatur
        expedita et sint ipsa distinctio. Explicabo labore dolorem blanditiis officia error. Quam similique ut maiores et eaque quisquam eveniet, hic
        quasi neque obcaecati cum nostrum eligendi impedit in sint eos.
      </p>
      <button type="button" onClick={handleButton}>
        Go Back Posts
      </button>
    </div>
  );
};

export default Post;
