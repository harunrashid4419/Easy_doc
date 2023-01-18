import React from "react";
import Banner from "./Banner";
import Post from "./Post";
import ShowPost from "./ShowPost";

const Community = () => {
  return (
    <div className="max-w-[1280px] m-auto">
      <Banner></Banner>
      <Post></Post>
      <ShowPost></ShowPost>
    </div>
  );
};

export default Community;
