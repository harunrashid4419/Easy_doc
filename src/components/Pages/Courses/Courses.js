import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import courses from "../../../assets/course-banner.json";
import { useTheme } from "../../../hooks/useTheme";
import ShowCourses from "./ShowCourses";

function Courses() {
  const { theme } = useTheme();
  const [allcoursesdata, setallCoursesData] = useState([]);
  useEffect(() => {
    fetch("https://easy-doc-server.vercel.app/allcourses")
      .then((res) => res.json())
      .then((data) => setallCoursesData(data));
  }, []);
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center mt-16  bg-neutral-content mb-5 px-5">
        <div>
          <h1 className="text-3xl font-bold mb-5">
            Discover Your Potential Browse Online Courses
          </h1>
          <p
            className={`${theme === "dark" ? "text-[#ffffff94]" : "text-[6b707f]"
              }`}
          >
            Expand your knowledge and enhance your skills with our comprehensive
            selection of online courses. Whether you're looking to start a new
            career or just want to learn something new.
          </p>
        </div>
        <div>
          <Player src={courses} className="h-72 w-full" loop autoplay></Player>
        </div>
      </div>
      {/* courses section */}
      <h2 className="text-center font-semibold text-2xl my-12">Our courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 my-0 m-4">
        {allcoursesdata.map((courses, i) => (
          <ShowCourses courses={courses} key={i}></ShowCourses>
        ))}
      </div>
    </div>
  );
}

export default Courses;
