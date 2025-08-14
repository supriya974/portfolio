import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.png.jpg";
const About = () => {
  const words = [
    "Fullstack Developer",
    //"App Developer",
    //"UI/UX Designer",
    "Problem Solver",
    "Coder",
  ];

  const [index, setIndex] = useState(0); // Current word index
  const [subIndex, setSubIndex] = useState(0); // Letter index
  const [blink, setBlink] = useState(true); // Cursor blink
  const [reverse, setReverse] = useState(false); // Typing or deleting

  // Typing effect logic
  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  // Cursor blinking effect
  useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout2);
  }, []);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Supriya Das
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              {`${words[index].substring(0, subIndex)}`}
            </span>
            <span className="text-[#8245ec]">{blink ? "|" : " "}</span>
          </h3>
          {/* about me paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a Full-stack developer with moderate expertise in Java and DSA.
            Skilled in solving complex problems with efficient, optimized
            solutions. Experienced in building scalable web applications from
            frontend to backend. Passionate about clean code, performance, and
            continuous learning.
          </p>
          <a
            href="https://drive.google.com/file/d/1YP3tPJ_j0-VUyEqKnPQhIzag7WlNe70Q/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end pl-5">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 
           border-purple-900 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Supriya Das"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
