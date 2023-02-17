import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { FaAngleRight, FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";
import useFetch from "../../../hooks/useFetch";

const Drawer = () => {
    const [interviewOpen, setInterviewOpen] = useState(false);
    const [errorDocOpen, setErrorDocOpen] = useState(false);
    const [openInstallation, setOpenInstallation] = useState(false);
    const { pathname } = useLocation();
    const { user } = useContext(AuthContext);
    const { data, loading } = useFetch(
        "https://easy-doc-server.vercel.app/doc-data"
    );
    const links = (
        <>
            <Link to="/">Home</Link>
            <Link to="/documentation">Documentation</Link>
            <Link to="/community">Community</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/courses">Courses</Link>
            {user?.uid ? (
                <>
                    <Link to="/dashboard">Dashboard</Link>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </>
    );

    if (loading) {
        return loading;
    }

    return (
        <div className="drawer md:hidden absolute">
            <input id="easy-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="easy-drawer" className="drawer-overlay"></label>
                <ul className="menu w-80 bg-base-100 text-base-content text-[1.2rem] space-y-1 px-2">
                    {pathname.includes("/documentation") ? (
                        <>
                            <Link
                                className="bg-slate-300 font-bold flex items-center p-2 gap-2"
                                to="/"
                            >
                                <FaArrowLeft></FaArrowLeft>back to main menu
                            </Link>

                            <label
                                onClick={() => setOpenInstallation(!openInstallation)}
                                className="hover:cursor-pointer px-4 py-2 flex items-center hover:bg-gray-300 justify-between"
                            >
                                React{" "}
                                <FaAngleRight
                                    className={`inline text-2xl text-gray-600 ${openInstallation ? "rotate-90" : ""
                                        } transition delay-50 `}
                                ></FaAngleRight>
                            </label>

                            {data
                                .filter((doc) => doc?.category === "installation")
                                .map((installation) => (
                                    <Link
                                        key={installation._id}
                                        className={`${openInstallation ? "block" : "hidden"
                                            } hover:bg-gray-300 cursor-pointer pl-6 py-1`}
                                        to={`/documentation/installation/${installation?._id}`}
                                    >
                                        {installation?.title}
                                    </Link>
                                ))}
                            <label
                                onClick={() => setInterviewOpen(!interviewOpen)}
                                className="hover:cursor-pointer px-4 py-2 flex items-center hover:bg-gray-300 justify-between"
                            >
                                Interview Question{" "}
                                <FaAngleRight
                                    className={`inline text-2xl text-gray-600 ${interviewOpen ? "rotate-90" : ""
                                        } transition delay-50 `}
                                ></FaAngleRight>
                            </label>

                            {data
                                .filter((doc) => doc?.category === "interview")
                                .map((interview) => (
                                    <Link
                                        key={interview._id}
                                        className={`${interviewOpen ? "block" : "hidden"
                                            } hover:bg-gray-300 cursor-pointer pl-6 py-1`}
                                        to={`/documentation/interview/${interview?._id}`}
                                    >
                                        {interview?.title}
                                    </Link>
                                ))}

                            <label
                                onClick={() => setErrorDocOpen(!errorDocOpen)}
                                className="hover:cursor-pointer px-4 py-2 flex items-center hover:bg-gray-300 justify-between"
                            >
                                Error Handling{" "}
                                <FaAngleRight
                                    className={`inline text-2xl text-gray-600 ${errorDocOpen ? "rotate-90" : ""
                                        } transition delay-50 `}
                                ></FaAngleRight>
                            </label>

                            {data
                                .filter((doc) => doc?.category === "error")
                                .map((error) => (
                                    <Link
                                        key={error._id}
                                        className={`${errorDocOpen ? "block" : "hidden"
                                            } hover:bg-gray-300 cursor-pointer pl-6 py-1`}
                                        to={`/documentation/error/${error?._id}`}
                                    >
                                        {error?.title}
                                    </Link>
                                ))}
                        </>
                    ) : (
                        <>
                            <li>{links}</li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Drawer;
