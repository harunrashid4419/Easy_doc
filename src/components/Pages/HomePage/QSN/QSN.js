import React from "react";

const QSN = () => {
  return (
    <div className="container">
      <h1 className="text-center text-5xl font-semibold  pt-16">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col  gap-5 md:py-20 md:pr-12">
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-neutral-content rounded-md shadow-2xl"
            >
              <div className="collapse-title text-xl font-medium">
                What is React?
              </div>
              <div className="collapse-content">
                <p>
                  {" "}
                  React is a JavaScript-based UI development library. Facebook
                  and an open-source developer community run it. Although React
                  is a library rather than a language, it is widely used in web
                  development. The library first appeared in May 2013 and is now
                  one of the most commonly used frontend libraries for web
                  development.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-neutral-content rounded-md shadow-2xl"
            >
              <div className="collapse-title text-xl font-medium">
                Is React backend of frontend?
              </div>
              <div className="collapse-content">
                <p>
                  {" "}
                  React is a JavaScript library used in web development to build
                  interactive elements on website User Interfaces (UI) based on
                  UI components. It is used in both frontend and backend, this
                  means it can be used to develop full-stack web applications.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-neutral-content rounded-md shadow-2xl"
            >
              <div className="collapse-title text-xl font-medium">
                What is the benefit of React ?
              </div>
              <div className="collapse-content">
                <p>
                  {" "}
                  One of the many benefits of React. js for app development is
                  its ability to test an application by keeping the code
                  testable. In other words, by maintaining the ability to test
                  the application, developers get a chance to analyze the app's
                  performance on various device types.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:py-20 md:pl-12">
          <div>
            <div
              tabIndex={0}
              className="bg-neutral-content collapse collapse-plus border rounded-md shadow-2xl border-base-300 rounded-md shadow-2xl "
            >
              <div className="collapse-title text-xl font-medium">
                Why React is important to learn ?
              </div>
              <div className="collapse-content">
                <p>
                  Among the most popular JavaScript libraries, ReactJS brings
                  with it rich features that make it an easy to use and popular
                  tool among developers. React libraries are growing at an
                  enormous rate, helping developers in building rich efficient
                  front-end abstractions by writing less code and in lesser time
                  as well!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              tabIndex={0}
              className="bg-neutral-content collapse collapse-plus border border-base-300 rounded-md shadow-2xl"
            >
              <div className="collapse-title text-xl font-medium">
                Focus me to see content
              </div>
              <div className="collapse-content">
                <p> attribute is necessary to make the div focusable</p>
              </div>
            </div>
          </div>
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-plus border border-base-300 bg-neutral-content rounded-md shadow-2xl"
            >
              <div className="collapse-title text-xl font-medium">
                Focus me to see content
              </div>
              <div className="collapse-content">
                <p> attribute is necessary to make the div focusable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QSN;
