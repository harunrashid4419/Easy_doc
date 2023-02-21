import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useTheme } from "../../../../hooks/useTheme";
import PaymentSingleUser from "./PaymentSingleUser";

const PaymentUsers = () => {
  const { theme } = useTheme();
  const { data: allPaymentUsers = [], refetch } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await fetch("https://easy-doc-server.vercel.app/paymentUsers");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="mb-10">
      <h1
        className={`text-4xl my-12 text-center ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        All Users
      </h1>
      <div className="overflow-x-auto ">
        <table
          className={`table table-zebra w-full ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <thead>
            <tr className="">
              <th className="text-xl font-medium text-base-100">Image</th>
              <th className="text-xl font-medium text-base-100">Name</th>
              <th className="text-xl font-medium text-base-100">Email</th>
              <th className="text-xl font-medium text-base-100">Action</th>
            </tr>
          </thead>
          {allPaymentUsers.map((paymentUser) => (
            <PaymentSingleUser
              key={paymentUser._id}
              paymentUser={paymentUser}
              refetch={refetch}
            ></PaymentSingleUser>
          ))}
        </table>
      </div>
    </div>
  );
};

export default PaymentUsers;
