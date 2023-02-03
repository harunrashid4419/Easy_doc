import { useQuery } from "@tanstack/react-query";
import React from "react";
import SingleUser from "./SingleUser";

const Users = () => {
  const { data: allusers = [], refetch } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await fetch("https://easy-doc-server.vercel.app/allUser");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="mb-10">
      <h1 className="text-4xl my-12 text-center">All Users</h1>
      <div className="overflow-x-auto ">
        <table className="table table-zebra w-full ">
          <thead>
            <tr className="bg-violet-200">
              <th className="text-xl font-medium">Image</th>
              <th className="text-xl font-medium">Name</th>
              <th className="text-xl font-medium">Email</th>
              <th className="text-xl font-medium">Action</th>
            </tr>
          </thead>
            {allusers.map((user) => (
              <SingleUser
                key={user._id}
                user={user}
                refetch={refetch}
              ></SingleUser>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Users;
