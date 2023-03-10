import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Register.css";
import {
  FaLock,
  FaUserAlt,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/UserContext";
import { toast } from "react-hot-toast";
import { useTheme } from "../../../hooks/useTheme";
import SocialLogin from "../../SharedPage/SocialLogin/SocialLogin";
import useTitle from "../../../Hook/useTitle";
import useToken from "../../../hooks/useToken";
import { useEffect } from "react";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState('');
  const [token] = useToken(email);
  const navigate = useNavigate();
  const [eyeClick, setEyeClick] = useState(false);
  const [check, setCheck] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { theme } = useTheme();
  useTitle('Register');

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
      toast.success('successfully sign up')
    }
  }, [from, navigate, token])


  const handleRegister = (data) => {
    const name = data.firstName + " " + data.lastName;
    const email = data?.email;
    const password = data?.password;
    // create user
    createUser(email, password)
      .then((result) => {
        const usersInfo = {
          displayName: name,
        };
        updateUser(usersInfo)
          .then((result) => {
            addUserToDatabase(name, email);
          })
          .catch((error) => {
            setError(error.message)
            console.log(error)
          })

      })
      .catch((error) => {
        setError(error.message);
        console.error(error);
      });
  };


  // Saved user to database with (GOOGLE & GITHUB)
  const addUserToDatabase = (name, email) => {
    const user = { name, email };
    fetch(`https://easy-doc-server.vercel.app/user?email=${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setEmail(email);
      });
  };

  return (
    <div className={`register-section ${theme === 'dark' ? 'bg-base-100' : 'bg-[#f5deb361]'}`}>
      <div className="container">
        <div className='main-register bg-neutral-content'>
          <h2 className="text-base-200">Please Register</h2>
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="icon-setup">
              <AiOutlineMail className="icon" />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                {...register("email", {
                  required: "Email address is required",
                })}
              />
              {errors.email && (
                <p className="mb-3 text-red-500">{errors.email?.message}</p>
              )}
            </div>
            <div className="icon-setup">
              <FaLock className="icon" />
              <div id="loginEye" onClick={() => setEyeClick(!eyeClick)}>
                {eyeClick ? <FaEye /> : <FaEyeSlash />}
              </div>
              <input
                type={eyeClick ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password should be 6 character or longer",
                  },
                })}
              />
              {errors.password && (
                <p className="mb-3 text-red-500">{errors.password?.message}</p>
              )}
            </div>
            <div className="first-last-name">
              <div className="icon-setup" id="first-name">
                <FaUserAlt className="icon" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full"
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                />
                {errors.firstName && (
                  <p className="mb-3 text-red-500">
                    {errors.firstName?.message}
                  </p>
                )}
              </div>
              <div className="icon-setup" id="last-name">
                <FaUserAlt className="icon" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full"
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                />
                {errors.lastName && (
                  <p className="mb-3 text-red-500">
                    {errors.lastName?.message}
                  </p>
                )}
              </div>
              {error && <p className="text-red-500 mb-3">{error}</p>}
            </div>
            <div className="flex mb-3">
              <input
                type="checkbox"
                id="checkbox"
                onClick={() => setCheck(check)}
              />
              <Link className="terams">Accepts tearms and conditions</Link>
            </div>
            <input type="submit" className="submit-btn" value="Register" />
          </form>
          <div className="divider">OR</div>
          <div className="social-login">
            <SocialLogin></SocialLogin>
          </div>
          <p className="link-register">
            Already have an account.<Link to="/login"> LogIn</Link> Now
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
