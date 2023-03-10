import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/UserContext";
const LeftSideBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="shadow-[0_0_40px_0_rgba(0,0,0,0.3)] text-center rounded-lg">
      {/* this div is only for photoURL background */}
      <div className="bg-gray-200 m-2 rounded-t-lg h-20"></div>

      {
        // if user has photoURL show the image
        user?.photoURL ? (
          <img
            src={user?.photoURL}
            alt=""
            className="rounded-full w-20 h-20 mx-auto -mt-12"
          />
        ) : (
          // else show this image
          <img
            className="rounded-full w-20 h-20 mx-auto -mt-12"
            src="https://i.ibb.co/dJnbzDL/profile-image.png"
            alt=""
          ></img>
        )
      }
      <div className="font-bold space-y-4 p-5">
        <div className="flex items-center gap-6">
          <img
            className="w-8"
            src="https://i.ibb.co/P1fJZ0z/profile-image.png"
            alt=""
          />
          <Link to="/view-profile">My Profile</Link>
        </div>
        <div className="flex items-center gap-6">
          <img
            className="w-8"
            src="https://cdn-icons-png.flaticon.com/128/9062/9062564.png"
            alt=""
          />
          <Link to="/view-profile/address">Address</Link>
        </div>
        <div className="flex items-center gap-6">
          <img
            className="w-8"
            src="https://cdn-icons-png.flaticon.com/128/5254/5254567.png"
            alt=""
          />
          <Link to="/view-profile/education">Education</Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
