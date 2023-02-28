import React from "react";
import useTitle from "../../Hook/useTitle";
import Banner from "./Banner";
import Post from "./Post";
import ShowPost from "./ShowPost";

const Community = () => {
  useTitle('Community');
  return (
    <div className="container">
      <Banner></Banner>
      <ShowPost></ShowPost>
    </div>
  );
};

export default Community;
