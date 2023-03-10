import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../../../../Context/UserContext";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [edit, setEdit] = useState(false);
  const { register, handleSubmit } = useForm();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://easy-doc-server.vercel.app/user?email=${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // destructuring user information from data
  const { name, email, phoneNumber, photoURL } = data;
  console.log(data);
  // this is the update profile function
  // that can update when user change his/her information
  const updateProfile = (data) => {
    console.log(data);
    // number validation by regular expression
    if (!/(\+88)?-?01[0-9]\d{8}/.test(data?.phoneNumber)) {
      toast.error("please input valid number");
      return;
    } else {
      fetch(`https://easy-doc-server.vercel.app/user?email=${user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          if (data.acknowledged) {
            toast.success("Your Information Updated Successfully");
            setEdit(false);
            refetch()
          }
        });
    }
  };
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold text-purple-500">My Profile</h1>
        <div>
          {edit ? (
            <button
              onClick={() => setEdit(!edit)}
              className="btn btn-outline btn-error"
            >
              Not Now
            </button>
          ) : (
            <button
              className="btn btn-outline btn-success flex items-center"
              onClick={() => setEdit(!edit)}
            >
              <FaEdit className="hover:text-blue-500 hover:cursor-pointer mr-2"></FaEdit>{" "}
              Edit
            </button>
          )}
        </div>
      </div>
      <div className="flex space-x-20">
        {/* this is image container */}
        <div className="relative md:w-1/5">
          {/* conditional rendering whether
           user has photoURL or not */}
          {
            // if user has photoURL show the image
            photoURL ? (
              <img
                src={photoURL}
                alt=""
                className="mask mask-circle my-6 border-4 border-dashed border-indigo-600 rounded-full mx-auto"
              />
            ) : (
              // else show this image
              <img
                src="https://i.ibb.co/dJnbzDL/profile-image.png"
                alt=""
              ></img>
            )
          }
        </div>
        {/* this is user information container */}
        <div>
          {
            // conditional rendering
            edit ? (
              // either this one
              <form
                onSubmit={handleSubmit(updateProfile)}
                className="space-y-4 border p-5 w-full"
              >
                <div>
                  <label className="label">Name</label>
                  <input
                    {...register("name")}
                    className="input input-sm w-full input-bordered"
                    type="text"
                    defaultValue={name}
                  />
                </div>
                <div>
                  <label className="label">Email</label>
                  <input
                    {...register("email")}
                    className="input input-sm w-full input-bordered"
                    type="email"
                    defaultValue={email}
                  />
                </div>
                <div>
                  <label>Mobile Number</label>
                  {phoneNumber ? (
                    <input
                      {...register("phoneNumber")}
                      className="input input-sm w-full input-bordered"
                      type="number"
                      defaultValue={phoneNumber}
                    />
                  ) : (
                    <input
                      {...register("phoneNumber")}
                      className="input input-sm w-full input-bordered"
                      type="number"
                      placeholder="Provide your number"
                    />
                  )}
                </div>
                <input className="btn" type="submit" value="Save Changes" />
              </form>
            ) : (
              // OR this one
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-semibold">Full Name</span>
                  <p className="text-xl font-semibold">{name}</p>
                </div>
                <div>
                  <span className="text-sm font-semibold">Email Address</span>
                  <p className="text-xl font-semibold">{email}</p>
                </div>
                <div>
                  <span className="text-sm font-semibold">Phone Number</span>
                  <p className="text-xl font-semibold">
                    {phoneNumber ? phoneNumber : "01#########"}
                  </p>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
