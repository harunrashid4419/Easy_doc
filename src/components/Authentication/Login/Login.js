import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../../assets/login.json";
import "./Login.css";
import { FaFacebookF, FaGooglePlusG, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/UserContext";
import { toast } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, restorePassword, googleSignIn, githubSignUp } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // reset password
  const restorePass = () => {
    restorePassword(email)
      .then((result) => {
        console.log(email);
        setEmail("");
        toast.success("Please Check you email and reset password");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  // login
  const handleLogin = (data) => {
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setError("");
        console.log(user);
        toast.success("Login Success");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setError("");
        toast.success("Google SignIn Success");
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

  // gitHub sign up
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

  // get email
  const handleEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  return (
    <div className="login-section">
      <div className="container">
        <div className="main-login">
          <div className="animation">
            <Lottie animationData={loginAnimation} loop={true}></Lottie>
          </div>
          <div className="form-section">
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
              <fieldset>
                <legend>Email</legend>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email address is required",
                  })}
                  className=" w-full"
                  onChange={handleEmail}
                />
                {errors.email && (
                  <p className="mb-3 text-red-500">{errors.email?.message}</p>
                )}
              </fieldset>
              <fieldset>
                <legend>Password</legend>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className=" w-full"
                />
                {errors.password && (
                  <p className="mb-3 text-red-500">
                    {errors.password?.message}
                  </p>
                )}
              </fieldset>
              {error && <p className="text-red-500 mb-3">{error}</p>}
              <p onClick={restorePass} className="forget-pass">
                Forget Password
              </p>
              <input type="submit" value="LogIn" className="login-btn" />
            </form>
            <div className="divider">OR</div>
            <div className="social-login">
              <Link onClick={handleGoogleSignIn} id="google">
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
              Don't have any account. <Link to="/register">Register</Link> Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
