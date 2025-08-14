import React from "react";
import { education } from "../../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-Skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
       <div className="relative">
        {/* Vertical Line */}
        <div className="absolute sm:left-1/2 left-0 sm:-translate-x-1/2 -translate-x-6 w-1 bg-gray-700 h-full"></div>
        {/* Desktop center line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 bg-white h-full hidden sm:block"></div>
        {/* Mobile left line */}
        <div className="absolute top-0 left-5 w-1 bg-white h-full sm:hidden"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className="relative flex flex-col sm:flex-row sm:items-center mb-16"
          >
            {/* Timeline Circle */}
            <div
              className="absolute z-10 flex justify-center items-center bg-gray-200 border-4 border-[#8245ec] rounded-full overflow-hidden shadow-lg
             w-12 h-12 sm:w-16 sm:h-16
             left-5 sm:left-1/2 sm:-translate-x-1/2
             -top-6 sm:top-1/2 sm:-translate-y-1/2"
            >
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div
              className={`bg-gray-900 border border-purple-800 rounded-2xl shadow-2x2 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] p-6 sm:p-6 backdrop-blur-md transition-transform duration-300 hover:scale-105
    w-full sm:max-w-md
    mt-8 sm:mt-0
    ${
      index % 2 === 0
        ? "sm:ml-0 sm:mr-auto sm:pr-20"
        : "sm:mr-0 sm:ml-auto sm:pl-20"
    }`}
            >
              {/* Top Row: Logo & Info */}
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-md text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              {/* Grade & Description */}
              <p className="mt-4 text-gray-400 font-bold">{edu.grade}</p>
              {/* <p className="mt-4 text-gray-400">{edu.desc}</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

};

export default Education;
