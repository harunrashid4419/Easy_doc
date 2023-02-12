
import React, { useState } from "react";
import { FaAngleRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

const LeftSideBer = () => {
    const [interviewOpen, setInterviewOpen] = useState(false);
    const [errorDocOpen, setErrorDocOpen] = useState(false);
    const { data, loading, error } = useFetch('https://easy-doc-server.vercel.app/doc-data');
    if (loading) {
        return <p>Loading...</p>
    }

    return (
        // this is leftsidbar main div
        <div className='bg-gray-100 md:h-screen md:border-r-4 border-gray-200 overflow-y-scroll md:sticky top-0 p-4'>
            <div className="divider text-gray-500">Menu</div>
            <div className='relative'>
                <input className="w-full border-2 mb-4 pl-16 p-2 rounded" type="text" placeholder='Quick Search' /><FaSearch className='absolute top-3 left-4 w-10 text-slate-400'></FaSearch>
            </div>
            <ul>
                <li onClick={() => setInterviewOpen(!interviewOpen)}
                    className="flex justify-between transition duration-700 ease-in-out cursor-pointer items-center text-[1.5rem]"
                >
                    Interview Question <FaAngleRight className={`inline text-2xl text-gray-600 ${interviewOpen ? 'rotate-90' : ''} transition delay-50`}></FaAngleRight>
                </li>
                <li>
                    {
                        data && data.filter(item => item?.category === 'interview').map(interview => <Link
                            key={interview._id}
                            className={`ml-4 ${interviewOpen ? 'block' : 'hidden'} hover:bg-gray-300 cursor-pointer p-1 rounded text-[1.2rem]`} to={`/documentation/${interview?.id}`}
                        >{interview?.title}
                        </Link>
                        )
                    }
                </li>
            </ul>
            <ul>
                <li onClick={() => setErrorDocOpen(!errorDocOpen)}
                    className="flex justify-between transition duration-700 ease-in-out cursor-pointer items-center text-[1.5rem]"
                >
                    Error <FaAngleRight className={`inline text-2xl text-gray-600 ${errorDocOpen ? 'rotate-90' : ''} transition delay-50`}></FaAngleRight>
                </li>
                <li>
                    {
                        data && data.filter(item => item?.category === 'error').map(error => <Link
                            key={error._id}
                            className={`ml-4 ${errorDocOpen ? 'block' : 'hidden'} hover:bg-gray-300 cursor-pointer p-1 rounded text-[1.2rem]`} to={`/documentation/${error?.id}`}
                        >{error?.title}
                        </Link>
                        )
                    }
                </li>
            </ul>
        </div >
    );
};

export default LeftSideBer;