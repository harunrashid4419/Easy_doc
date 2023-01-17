import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaGithub,
  FaLock,
  FaUserAlt,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/UserContext";
import { toast } from "react-hot-toast";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, googleSignIn, githubSignUp } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (data) => {
    const name = data.firstName + " " + data.lastName;

    // create user
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        const usersInfo = {
          displayName: name,
        };
        updateUser(usersInfo)
          .then((result) => {})
          .catch((error) => console.error(error));

        console.log(user);
        toast.success("Register successfully!");
        navigate("/");
        usersAddToDatabase(name, data.email);
      })
      .catch((error) => console.error(error));
  };

  // users store in database
  const usersAddToDatabase = (name, email, img) => {
    const user = { name, email, photoURL: "" };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  // google signup
  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setError("");
        toast.success("Google SignUp Success");
        navigate("/");
        console.log(user);
        googleSignUpAddToDatabase(
          user?.displayName,
          user?.email,
          user?.photoURL
        );
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  // google sign up add to database
  const googleSignUpAddToDatabase = (name, email, photoURL) => {
    const user = { name, email, photoURL };
    fetch("http://localhost:5000/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  // github sign up
  const handleGitHubSignUp = () => {
    githubSignUp()
      .then((result) => {
        const user = result.user;
        setError("");
        toast.success("GitHub SignUp Success");
        navigate("/");
        console.log(user);
        githubSignUpAddToDatabase(
          user?.displayName,
          user?.email,
          user?.photoURL
        );
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  // gitHun sign up add to database
  const githubSignUpAddToDatabase = (name, email, photoURL) => {
    const user = { name, email: "", photoURL };
    fetch("http://localhost:5000/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="register-section">
      <div className="container">
        <div className="main-register">
          <h2>Please Register</h2>
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
              <input
                type="password"
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
              <input type="checkbox" id="checkbox" />
              <Link className="terams">Accepts tearms and conditions</Link>
            </div>
            <input type="submit" className="submit-btn" value="Register" />
          </form>
          <div className="divider">OR</div>
          <div className="social-register">
            <Link onClick={handleGoogleSignUp} id="google">
              <FaGooglePlusG />
            </Link>
            <Link onClick={handleGitHubSignUp} id="github">
              <FaGithub />
            </Link>
            <Link id="facebook">
              <FaFacebookF />
            </Link>
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
