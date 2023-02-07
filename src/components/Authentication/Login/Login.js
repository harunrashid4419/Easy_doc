import React, { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import loginAnimation from "../../../assets/login.json";
import "./Login.css";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaGithub,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/UserContext";
import { toast } from "react-hot-toast";
import { useTheme } from "../../../hooks/useTheme";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, user, restorePassword, googleSignIn, githubSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [eyeClick, setEyeClick] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { theme } = useTheme();

  // Login with email and password
  const handleLogin = (data) => {
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        toast.success("LogIn Success");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

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

  // Sign In with Google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        addUserToDatabase(
          user?.displayName,
          user?.email,
          user?.photoURL,
          user?.uid
        );
      })
      .catch((error) => toast.error(error.message));
  };

  // SignIn with Github
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        addUserToDatabase(
          user?.displayName,
          user?.email,
          user?.photoURL,
          user?.uid
        );
      })
      .catch((error) => toast.error(error.message));
  };

  // Saved user to database with (GOOGLE & GITHUB)
  const addUserToDatabase = (name, email, photoURL, uid) => {
    const user = { name, email, photoURL, uid };
    fetch(`https://easy-doc-server.vercel.app/user?uid=${uid}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setError("");
          toast.success("Successfully sign In");
          navigate(from, { replace: true });
        }
      });
  };

  // get email
  const handleEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  // navigate
  useEffect(() => {
    if (user && user?.email) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user]);

  return (
    <div className="login-section">
      <div className="container">
        <div
          className={`main-login ${
            theme === "dark" ? "bg-[#2C303A]" : "bg-[#4f794247]"
          }`}
        >
          <div className="animation">
            <Lottie animationData={loginAnimation} loop={true}></Lottie>
          </div>
          <div className="form-section">
            <h1 className='text-base-200'>Please Login</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
              <fieldset>
                <legend className='text-base-200'>Email</legend>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email address is required",
                  })}
                  className=" w-full"
                  onChange={handleEmail}
                />
              </fieldset>
              {errors.email && (
                <p className="mb-3 text-red-500">{errors.email?.message}</p>
              )}
              <fieldset id="password-fieldset">
                <legend className='text-base-200'>Password</legend>
                <div id="eyeClick" onClick={() => setEyeClick(!eyeClick)}>
                  {eyeClick ? <FaEye /> : <FaEyeSlash />}
                </div>
                <input
                  type={eyeClick ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className=" w-full"
                />
              </fieldset>
              {errors.password && (
                <p className="mb-3 text-red-500">{errors.password?.message}</p>
              )}
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
              <Link onClick={handleGithubSignIn} id="github">
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
