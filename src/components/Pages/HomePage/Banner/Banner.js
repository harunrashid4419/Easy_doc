import React from "react";

const Banner = () => {
  return (
    <div
      className="bg-[url('https://img.freepik.com/free-photo/3d-render-books-stack-book-covers-textbook-bookmark-design_460848-11167.jpg?size=626&ext=jpg&ga=GA1.1.1815370125.1670900571')] bg-no-repeat bg-cover flex justify-center items-center md:py-36 py-16"
    >
      <div className="text-white text-center container">
        <h1 className="lg:text-6xl md:text-6xl text-4xl mb-2 font-bold my-6">How can we help you?</h1>
        <h2 className="text-xl font-semibold">
          Search here to get your answers to your questions
        </h2>
        <form className="my-8">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="px-4 block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 py-4 rounded-full text-lg"
              placeholder="Search For Topics"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
