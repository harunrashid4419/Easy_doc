import React from "react";
import { useTheme } from "../../../hooks/useTheme";
import Member from "./Member/Member";

const Contact = () => {
  const { theme } = useTheme();
  const members = [
    {
      id: "01",
      image:
        "https://i.ibb.co/7Jw0Jkc/Photo-of-Md-Harun-Or-Rashid-removebg-preview.png",
      name: "Harun Or-Rashid",
      title: "Team Leader",
      description:
        "I am a hard-working and driven individual who isn't afraid to face a challenge.I'm passionate about my work and I know how to get the job done.",
      facebook: "https://www.facebook.com/mdharun.orrashid.79827",
      linkedin: "https://www.linkedin.com/in/md-harun-or-rashid2/",
      github: "https://github.com/harunrashid4419/",
    },
    {
      id: "02",
      image: "https://i.ibb.co/5YPmrdD/Toukir-ahmed-removebg-preview.png",
      name: "Toukir Ahmed",
      title: "Frontend Developer",
      description:
        "I am an optimistic, candid, responsible and social person.I am confident with my thinking analysis that I can convince people with my points.",
      facebook: "https://www.facebook.com/profile.php?id=100029985392696",
      linkedin: "https://www.linkedin.com/in/toukircse777/",
      github: "https://github.com/toukircse77",
    },
    {
      id: "03",
      image:
        "https://i.ibb.co/9HJ6GNq/330268195-623930759541376-8870168755201645329-n-removebg-preview.png",
      name: "Ashraful Islam",
      title: "Backend Developer",
      description:
        "I am ambitious and driven.I thrive on challenges and constantly set goals for myself, so I have something to strive toward.",
      facebook: "https://www.facebook.com/ashraful.rirdon",
      linkedin: "https://www.linkedin.com/in/ashraful-islam-webdev",
      github: "https://github.com/ashr-aful007",
    },
    {
      id: "04",
      image:
        "https://i.ibb.co/zsd1N4Z/IMG-20221223-WA0000-removebg-preview.png",
      name: "Mahmud Hasan",
      title: "Backend Developer",
      description:
        "I am an excellent communicator.I pride myself on making sure people have the right information because it drives better results.",
      facebook: "https://www.facebook.com/Mahmod90047",
      linkedin: "https://www.facebook.com/Mahmod90047",
      github: "https://github.com/Mahmod-Hassan",
    },
    {
      id: "05",
      image:
        "https://i.ibb.co/rGX8FzR/6edff7d2-d40f-466e-aa3a-ed2e59283269-removebg-preview-removebg-preview.png",
      name: "Poly Akhtar",
      title: "Frontend Developer",
      description:
        "I am highly organized.I always take notes and use a series of tools to help myself stay on top of deadlines.",
      facebook: "https://www.facebook.com/poly.akhter00",
      linkedin: "https://www.linkedin.com/in/poly-akhtar/",
      github: "https://github.com/polyakhtar",
    },
  ];
  return (
    <div>
      <div
        className={`flex items-center justify-center ${theme === "dark" ? "bg-slate-600" : "bg-violet-400"
          } h-60`}
      >
        <div className="w-50 flex flex-col items-center">
          <h1 className="text-5xl my-2 font-semibold">Contact Us</h1>
          <h3 className="text-lg">Contact The Help Team</h3>
        </div>
      </div>
      <section className="py-16 bg-violet-100">
        <div className="bg-neutral-content px-8 mx-auto max-w-screen-md border-2 border-violet-200 rounded py-12">
          <form
            action="https://formsubmit.co/munniakter00702@gmail.com"
            method="POST"
            className="space-y-8"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-lg font-medium text-base-content"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-400 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-lg font-medium text-base-content"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-400 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="username@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-lg font-medium text-base-content"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-400 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-lg font-medium text-base-content"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-400 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type Here"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className=" py-3 px-5 text-lg btn btn-primary font-medium text-center text-black rounded-lg bg-yellow-500 sm:w-fit hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
      <div className="my-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold my-4">Meet Our Beautiful Team</h1>
          <p className="text-lg font-semibold my-8">
            We are a small team of designers and developers, who help brand with
            big ideas
          </p>
        </div>
        <div className="mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          {members.map((member) => (
            <Member key={member.id} member={member}></Member>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
