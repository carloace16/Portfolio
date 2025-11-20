import React from "react";

function About() {
  return (
    <>
      <div
        id="about"
        className="flex flex-col md:flex-row items-center justify-between p-8 max-w-screen-xl mx-auto text-white"
      >
        <div className="flex-1 mr-8 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-3xl font-bold mb-6">About Me</h1>

          {/* Paragraph 1: Who you are + Key Education/Fellowships */}
          <p className="text-lg md:text-base mb-4 text-gray-400 leading-relaxed">
            I am a{" "}
            <span className="text-white font-semibold">
              Full-Stack Software Engineer
            </span>{" "}
            dedicated to building scalable, user-centric applications. A
            Computer Science graduate from{" "}
            <span className="text-white font-semibold">
              CUNY Queens College
            </span>
            , I honed my engineering discipline through rigorous fellowships at{" "}
            <span className="text-white font-semibold">
              The Build Fellowship
            </span>{" "}
            and <span className="text-white font-semibold">CUNY Tech Prep</span>
            .
          </p>

          {/* Paragraph 2: Your Technical "Special Sauce" (AI & Complex UI) */}
          <p className="text-lg md:text-base mb-4 text-gray-400 leading-relaxed">
            I don't just write code; I engineer solutions. My recent work
            includes developing
            <span className="text-white font-semibold"> LinkUP NYC</span>, a
            geospatial meeting optimizer powered by AI, and
            <span className="text-white font-semibold"> SentiVest</span>, a 3D
            financial visualization dashboard. I thrive on bridging complex
            backend logic with immersive, modern frontend experiences.
          </p>

          {/* Paragraph 3: The "Call to Action" / Stack */}
          <p className="text-lg md:text-base text-gray-400 leading-relaxed">
            My core stack includes{" "}
            <span className="text-white font-semibold">
              React, Node.js, Python, and TypeScript
            </span>
            . I am currently looking for opportunities to join an engineering
            team and ship high-impact software.
          </p>
        </div>

        <div className="flex-none w-full md:w-1/4">
          <img
            src="Profile.jpg"
            alt="Carlo Ace Sagad"
            className="w-2/3 md:w-full h-auto rounded-lg shadow-lg mx-auto object-cover border-2 border-gray-700"
          />
        </div>
      </div>
    </>
  );
}

export default About;
