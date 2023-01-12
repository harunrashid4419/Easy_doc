import React from 'react';

const FAQ = () => {
    return (
        <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-5 md:p-10'>
            <h1 className='text-4xl md:text-6xl text-white text-center font-bold mb-10 md:mb-16'>Frequently Asked Questions</h1>

            <div className='w-full md:w-3/4 lg:w-1/2 mx-auto grid gap-3 md:gap-5'>
                <div tabIndex={0} className="bg-white collapse ring-2 ring-blue-600 hover:ring-4 collapse-arrow rounded-lg">
                    <div className="collapse-title text-xl text-purple-700 font-bold">
                        What is React?
                    </div>
                    <div className="collapse-content font-medium text-gray-900 first-letter:text-xl first-letter:font-bold first-letter:text-black">
                        <p>React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.</p>
                    </div>
                </div>
                <div tabIndex={1} className="bg-white collapse ring-2 ring-blue-600 hover:ring-4 collapse-arrow rounded-lg">
                    <div className="collapse-title text-xl text-purple-700 font-bold">
                        Is React backend of frontend?
                    </div>
                    <div className="collapse-content font-medium text-gray-900  first-letter:text-xl first-letter:font-bold first-letter:text-black">
                        <p>React is a JavaScript library used in web development to build interactive elements on website User Interfaces (UI) based on UI components. It is used in both frontend and backend, this means it can be used to develop full-stack web applications.</p>
                    </div>
                </div>

                <div tabIndex={2} className="bg-white collapse ring-2 ring-blue-600 hover:ring-4 collapse-arrow rounded-lg">
                    <div className="collapse-title text-xl text-purple-700 font-bold">
                        What is the benefit of React ?
                    </div>
                    <div className="collapse-content font-medium text-gray-900  first-letter:text-xl first-letter:font-bold first-letter:text-black">
                        <p>One of the many benefits of React. js for app development is its ability to test an application by keeping the code testable. In other words, by maintaining the ability to test the application, developers get a chance to analyze the app's performance on various device types.</p>
                    </div>
                </div>
                <div tabIndex={3} className="bg-white collapse ring-2 ring-blue-600 hover:ring-4 collapse-arrow rounded-lg">
                    <div className="collapse-title text-xl text-purple-700 font-bold">
                        Why React is important to learn ?
                    </div>
                    <div className="collapse-content font-medium text-gray-900  first-letter:text-xl first-letter:font-bold first-letter:text-black">
                        <p>Among the most popular JavaScript libraries, ReactJS brings with it rich features that make it an easy to use and popular tool among developers. React libraries are growing at an enormous rate, helping developers in building rich efficient front-end abstractions by writing less code and in lesser time as well!</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FAQ;