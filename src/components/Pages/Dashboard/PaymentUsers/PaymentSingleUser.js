import React from "react";
import { toast } from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";
const PaymentSingleUser = ({ paymentUser, refetch }) => {
  const { name, email, photoURL, _id } = paymentUser;

  const handleDeleteUser = (id) => {
    const agree = window.confirm("Are you want to delete this user");
    if (agree) {
      fetch(`https://easy-doc-server.vercel.app/paymentUsers/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("User Deleted Successfully");
            refetch();
          }
        });
    }
  };
  return (
    <tbody>
      <tr>
        <th>
          {photoURL ? (
            <img className="w-16 rounded-full" src={photoURL} alt="" />
          ) : (
            <FaUserAlt className="w-16 h-16" />
          )}
        </th>
        <td className="font-medium">{name}</td>
        <td className="font-medium">{email}</td>
        <td>
          <button
            onClick={() => handleDeleteUser(_id)}
            className="btn text-black border-none"
            style={{ backgroundColor: "#FBBD23" }}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default PaymentSingleUser;
