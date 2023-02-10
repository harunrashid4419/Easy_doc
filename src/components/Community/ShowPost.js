import React from "react";
import { useQuery } from "@tanstack/react-query";
import ShowSinglePost from "./ShowSinglePost";

const ShowPost = () => {
  const { data: allpost = [] } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await fetch("https://easy-doc-server.vercel.app/allUserPost");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      {allpost.map((singlePost) => (
        <ShowSinglePost
          key={singlePost._id}
          singlePost={singlePost}
        ></ShowSinglePost>
      ))}
    </div>
  );
};

export default ShowPost;
