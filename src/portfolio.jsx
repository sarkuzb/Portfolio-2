import { useState, useEffect, useRef } from "react";
import Up from "./assets/up.svg";

function Portfolio() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const formattedDate = `©${year}`;

  const [backToTop, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 800) {
          setBackToTopButton(true);
        } else {
          setBackToTopButton(false);
        }
      },
      []
    );
  });

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const aboutYouRef = useRef(null);

  const scrollToAboutYouSection = () => {
    aboutYouRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const yourSkillsRef = useRef(null);

  const scrollToYourSkillsSection = () => {
    yourSkillsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const yourProjectRef = useRef(null);

  const scrollToYourProjectsSection = () => {
    yourProjectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* {} */}
      <div className="mx-auto max-w-full bg-gradient-to-r from-slate-100 to-slate-300 h-[1820px]">
        <div className="bg-slate-400 h-20 shadow-md shadow-gray-800/50 flex justify-center items-center">
          <div className="flex gap-6 text-sm text-slate-300 font-LilitaOne ">
            <p
              onClick={scrollToAboutYouSection}
              className="hover-underline-animation left cursor-pointer hover:text-white transition duration-200"
            >
              About You
            </p>
            <p
              onClick={scrollToYourSkillsSection}
              className="hover-underline-animation left cursor-pointer hover:text-white transition duration-200"
            >
              Your Skills
            </p>
            <p
              onClick={scrollToYourProjectsSection}
              className="hover-underline-animation left cursor-pointer hover:text-white transition duration-200"
            >
              Your Projects
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-32">
          <p className="text-slate-600 text-lg font-lilita p-2">Your Name</p>
          <p className="text-slate-600 text-lg font-light hover:scale-105 transition duration-200 cursor-pointer p-2">
            Your Direction
          </p>
          <p className="bg-slate-100 px-20 py-28 rounded-full text-slate-600 font-light mt-4 hover:scale-105 transition duration-200 cursor-pointer">
            Your Picture
          </p>
        </div>

        <div className="flex flex-col items-center mt-24">
          <p
            ref={aboutYouRef}
            className="text-slate-600 text-lg font-lilita p-2"
          >
            About You
          </p>
          <p className="bg-gradient-to-r from-geyser-200 to-link-200 text-slate-600 w-[500px] text-lg font-light p-2 hover:scale-105 hover:text-slate-800 transition duration-200 cursor-pointer max-sm:w-[350px]">
            The text which describes you displays here...
          </p>
        </div>

        <div className="flex flex-col items-center mt-24">
          <p
            ref={yourSkillsRef}
            className="text-slate-600 text-lg font-lilita p-2"
          >
            Your Skills
          </p>
          <div className="max-sm:w-[340px] flex flex-col items-center">
            <div className="flex flex-col">
              <p className="flex py-2 font-lilita text-slate-400">Languages</p>
              <div className="flex gap-2 w-[500px] max-sm:w-[350px] flex-wrap bg-gradient-to-r from-geyser-300 to-link-200 hover:scale-105 transition duration-150 cursor-pointer p-2">
                <p className="bg-sky-500 px-2 text-white">Java</p>
                <p className="bg-sky-600 px-2 text-white">Python</p>
                <p className="bg-yellow-500 px-2 text-white">Javascript</p>
                <p className="bg-sky-600 px-2 text-white">CSS</p>
                <p className="bg-orange-600 px-2 text-white">HTML</p>
              </div>
            </div>

            <div>
              <p className="py-2 font-lilita text-slate-400">Frameworks</p>
              <div className="flex gap-2 w-[500px] max-sm:w-[350px] flex-wrap bg-gradient-to-r from-geyser-300 to-link-200 hover:scale-105 transition duration-150 cursor-pointer p-2">
                <p className="bg-sky-500 px-2 text-white">React</p>
                <p className="bg-red-600 px-2 text-white">Angular</p>
                <p className="bg-green-600 px-2 text-white">NODE.js</p>
                <p className="bg-purple-600 px-2 text-white">.Net Core</p>
                <p className="bg-gray-600 px-2 text-white">SSIS</p>
              </div>
            </div>

            <div>
              <p className="py-2 font-lilita text-slate-400">Technologies</p>
              <div className="flex gap-2 w-[500px] max-sm:w-[350px] flex-wrap bg-gradient-to-r from-geyser-300 to-link-200 hover:scale-105 transition duration-150 cursor-pointer p-2">
                <p className="bg-green-500 px-2 text-white">MongoDB</p>
                <p className="bg-orange-600 px-2 text-white">Git</p>
                <p className="bg-sky-600 px-2 text-white">Visual Studio Code</p>
                <p className="bg-orange-600 px-2 text-white">Postman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-24">
          <p
            ref={yourProjectRef}
            className="text-slate-600 text-lg font-lilita p-2"
          >
            Your Projects
          </p>
          <div className="w-[500px] max-sm:w-[350px] h-32 bg-slate-300 shadow-md mb-3 hover:scale-105 transition duration-200 cursor-pointer">
            <p className="p-2 font-lilita text-slate-600">Your Project Name</p>
            <p className="text-sm text-slate-500 px-2">Description Here...</p>
          </div>

          <div className="w-[500px] max-sm:w-[350px] h-32 bg-slate-300 shadow-md mb-3 hover:scale-105 transition duration-200 cursor-pointer">
            <p className="p-2 font-lilita text-slate-600">Your Project Name</p>
            <p className="text-sm text-slate-500 px-2">Description Here...</p>
          </div>

          <div className="w-[500px] max-sm:w-[350px] h-32 bg-slate-300 shadow-md mb-3 hover:scale-105 transition duration-200 cursor-pointer">
            <p className="p-2 font-lilita text-slate-600">Your Project Name</p>
            <p className="text-sm text-slate-500 px-2">Description Here...</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-400 h-20 flex justify-center items-center gap-2 text-slate-800 font-light">
        <p>{formattedDate}</p>
        <p>Your Contacts Here...</p>
      </div>

      {backToTop && (
        <img
          className={`bg-link-300 p-2 rounded-full fixed bottom-10 right-10 cursor-pointer hover:scale-90 transition-all duration-500 ease-in-out ${
            backToTop ? "opacity-100 visible" : "opacity-0 invisible"
          } max-sm:w-[35px] max-sm:bottom-4 max-sm:right-4`}
          src={Up}
          alt="UP"
          onClick={toTop}
        />
      )}
    </>
  );
}

export default Portfolio;
