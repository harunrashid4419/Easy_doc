import React from 'react';
import { useState } from 'react';
import { FaAngleDoubleRight, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DocRoutes = ({ data, isLoading }) => {
    const [interviewOpen, setInterviewOpen] = useState(false);
    const [errorDocOpen, setErrorDocOpen] = useState(false);
    const [openInstallation, setOpenInstallation] = useState(false);
    const [openHooks, setOpenHooks] = useState(false);
    const [openMainConcept, setOpenMainConcept] = useState(false);
    const [openApi, setOpenApi] = useState(false);
    return (
        <div>
            {/* React Installation start from here */}
            <ul className="space-y-2 md:text-xl">
                <li
                    onClick={() => setOpenInstallation(!openInstallation)}
                    className="flex justify-between p-1 md:p-2 cursor-pointer items-center hover:bg-slate-300 pl-2"
                >
                    Installation
                    <FaAngleRight
                        className={`inline text-2xl text-gray-600 ${openInstallation ? "rotate-90" : ""
                            } transition delay-50`}
                    ></FaAngleRight>
                </li>
                <li className="text-sm md:text-[18px] space-y-2">
                    {data &&
                        data
                            ?.filter((item) => item?.category === "installation")
                            .map((installation) => (
                                <Link
                                    key={installation._id}
                                    className={`pl-4 ${openInstallation ? "block" : "hidden"
                                        } hover:bg-gray-300 cursor-pointer p-1 flex gap-2`}
                                    to={`/documentation/installation/${installation._id}`}
                                >
                                    <FaAngleDoubleRight></FaAngleDoubleRight>
                                    {installation?.title}
                                </Link>
                            ))}
                </li>
            </ul>

            {/* React Open Api start from here */}
            <ul className='space-y-2 md:text-xl'>
                <li
                    onClick={() => setOpenApi(!openApi)}
                    className="flex justify-between p-1 md:p-2 cursor-pointer items-center hover:bg-slate-300 pl-2"
                >
                    Api Reference
                    <FaAngleRight
                        className={`inline text-2xl text-gray-600 ${openApi ? "rotate-90" : ""
                            } transition delay-50`}
                    ></FaAngleRight>
                </li>
                <li className="text-sm md:text-[18px] space-y-2">
                    {data &&
                        data
                            ?.filter((item) => item?.category === "apireference")
                            .map((api) => (
                                <Link
                                    key={api._id}
                                    className={`pl-4 ${openApi ? "block" : "hidden"
                                        } hover:bg-gray-300 cursor-pointer p-1 flex gap-2`}
                                    to={`/documentation/apireference/${api._id}`}
                                >
                                    <FaAngleDoubleRight></FaAngleDoubleRight>
                                    {api?.title}
                                </Link>
                            ))}
                </li>
            </ul>

            {/* React Main Concept start from here */}
            <ul className="space-y-2 md:text-xl">
                <li
                    onClick={() => setOpenMainConcept(!openMainConcept)}
                    className="flex justify-between p-1 md:p-2 cursor-pointer items-center hover:bg-slate-300 pl-2"
                >
                    Main Concept
                    <FaAngleRight
                        className={`inline text-2xl text-gray-600 ${openMainConcept ? "rotate-90" : ""
                            } transition delay-50`}
                    ></FaAngleRight>
                </li>
                <li className="text-sm md:text-[18px] space-y-2">
                    {data &&
                        data
                            ?.filter((item) => item?.category === "MAIN CONCEPTS")
                            .map((main) => (
                                <Link
                                    key={main._id}
                                    className={`pl-4 ${openMainConcept ? "block" : "hidden"
                                        } hover:bg-gray-300 cursor-pointer p-1 flex gap-2`}
                                    to={`/documentation/mainConcept/${main._id}`}
                                >
                                    <FaAngleDoubleRight></FaAngleDoubleRight>
                                    {main?.title}
                                </Link>
                            ))}
                </li>
            </ul>


            {/* React Hooks start from here */}
            <ul className="space-y-2 md:text-xl">
                <li
                    onClick={() => setOpenHooks(!openHooks)}
                    className="flex justify-between p-1 md:p-2 cursor-pointer items-center hover:bg-slate-300 pl-2"
                >
                    Hooks
                    <FaAngleRight
                        className={`inline text-2xl text-gray-600 ${openHooks ? "rotate-90" : ""
                            } transition delay-50`}
                    ></FaAngleRight>
                </li>
                <li className="text-sm md:text-[18px] space-y-2">
                    {data &&
                        data
                            ?.filter((item) => item?.category === "hooks")
                            .map((hooks) => (
                                <Link
                                    key={hooks._id}
                                    className={`pl-4 ${openHooks ? "block" : "hidden"
                                        } hover:bg-gray-300 cursor-pointer p-1 flex gap-2`}
                                    to={`/documentation/hooks/${hooks._id}`}
                                >
                                    <FaAngleDoubleRight></FaAngleDoubleRight>
                                    {hooks?.title}
                                </Link>
                            ))}
                </li>
            </ul>
            <h1 className="text-2xl font-bold text-center mt-8">Others</h1>

            {/* Interview docs data here */}
            <ul className="space-y-2 md:text-xl">
                <li
                    onClick={() => setInterviewOpen(!interviewOpen)}
                    className="flex justify-between p-1 md:p-2 cursor-pointer items-center hover:bg-slate-300 pl-2"
                >
                    Interview Question{" "}
                    <FaAngleRight
                        className={`inline text-2xl text-gray-600 ${interviewOpen ? "rotate-90" : ""
                            } transition delay-50`}
                    ></FaAngleRight>
                </li>
                <li className="text-sm md:text-[18px] space-y-2">
                    {data &&
                        data
                            .filter((item) => item?.category === "interview")
                            .map((interview) => (
                                <Link
                                    key={interview._id}
                                    className={`ml-4 ${interviewOpen ? "block" : "hidden"
                                        } hover:bg-gray-300 cursor-pointer p-1 flex gap-2`}
                                    to={`/documentation/interview/${interview._id}`}
                                >
                                    <FaAngleDoubleRight></FaAngleDoubleRight>
                                    {interview?.title}
                                </Link>
                            ))}
                </li>
            </ul>

            {/* Error docs data here */}
            <ul className="space-y-2 md:text-xl">
                <li
                    onClick={() => setErrorDocOpen(!errorDocOpen)}
                    className="flex justify-between p-1 md:p-2 cursor-pointer items-center hover:bg-slate-300 pl-2"
                >
                    Error{" "}
                    <FaAngleRight
                        className={`inline text-2xl text-gray-600 ${errorDocOpen ? "rotate-90" : ""
                            } transition delay-50`}
                    ></FaAngleRight>
                </li>
                <li className="text-sm md:text-[18px] space-y-2">
                    {data &&
                        data
                            .filter((item) => item?.category === "error")
                            .map((error) => (
                                <Link
                                    key={error._id}
                                    className={`pl-4 ${errorDocOpen ? "block" : "hidden"
                                        } hover:bg-gray-300 cursor-pointer p-1 flex gap-2`}
                                    to={`/documentation/error/${error._id}`}
                                >
                                    <FaAngleDoubleRight></FaAngleDoubleRight>
                                    {error?.title}
                                </Link>
                            ))}
                </li>
            </ul>
        </div>
    );
};

export default DocRoutes;