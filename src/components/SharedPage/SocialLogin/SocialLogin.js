import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    FaFacebookF,
    FaGooglePlusG,
    FaGithub,
} from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import { toast } from 'react-hot-toast';
import { getToken } from '../../../token/getToken';


const SocialLogin = () => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // handle google sign in
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                getToken(user);
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
                getToken(user);
                addUserToDatabase(
                    user?.displayName,
                    user?.email,
                    user?.photoURL,
                );

            })
            .catch((error) => toast.error(error.message));
    };

    // Saved user to database with (GOOGLE & GITHUB)
    const addUserToDatabase = (name, email, photoURL) => {
        const user = { name, email, photoURL };
        fetch(`http://localhost:5000/user?email=${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success("Successfully sign In");
                    navigate(from, { replace: true });
                }
            });
    };
    return (
        <>
            <Link onClick={handleGoogleSignIn} id="google">
                <FaGooglePlusG />
            </Link>
            <Link onClick={handleGithubSignIn} id="github">
                <FaGithub />
            </Link>
            <Link id="facebook">
                <FaFacebookF />
            </Link>
        </>

    );
};

export default SocialLogin;