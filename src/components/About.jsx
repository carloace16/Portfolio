import React from "react";

function About() {
  return (
    <>
      <div
        id="about"
        className="flex flex-col md:flex-row items-center justify-between p-8 max-w-screen-xl mx-auto text-white"
      >
        <div className="flex-1 mr-8 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-3xl font-bold mb-4">About</h1>
          <p className="text-lg md:text-base mb-2 text-gray-400">
            Hello! My name is Ace, and I love building applications that create
            engaging user experiences.
            <br />
            <br />
            My journey into tech started with a fascination for how software
            works, leading me to develop skills in React, JavaScript, Node.js,
            HTML, CSS, and more.
            <br />
            <br />
            As a SWE Best Practices Award winner at the 2024 CTP Hackathon and a
            CUNY Tech Prep Fellow, I’ve gained hands-on experience and honed my
            ability to work on impactful projects.
            <br />
            <br />
            I’m passionate about both front-end and back-end development and
            strive to create applications that are not only functional but also
            delightful to use. Let’s make something amazing together!
          </p>
        </div>
        <div className="flex-none w-full md:w-1/4">
          <img
            src="Profile.jpg" // Replace with the actual path to your profile picture
            alt="Profile"
            className="w-2/3 md:w-full h-auto rounded-lg shadow-lg mx-auto" // Adjusted image size for mobile
          />
        </div>
      </div>
    </>
  );
}

export default About;
