import React from "react";
import useTitle from "../../Hook/useTitle";
import Banner from "./Banner";
import Post from "./Post";

const Community = () => {
  useTitle('Community');
  return (
    <div className="container">
      <Banner></Banner>
      <Post></Post>
    </div>
  );
};

export default Community;
