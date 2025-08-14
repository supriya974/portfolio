import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram,} from "react-icons/fa";
const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500 ">
         <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Supriya</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Das</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
        </h2>
        {/* navigation list */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            {name:"About", id:"about"},
            {name:"Skills", id:"skills"},
            {name:"Projects", id:"work"},
            {name:"Education", id:"education"},
          ].map((item, index) => (
            <button
            key={index}
            onClick={() =>handleScroll(item.id)}
            className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
         </nav>
        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/supriyo.das.646244" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/supriya062002/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/supriyo_das18/" },
           // { icon: <FatakeUforward />, link: "https://takeuforward.org/profile/supriyadas18" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Supriya Das. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer