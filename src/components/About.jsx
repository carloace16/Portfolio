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
            Hello! My name is Carlo Ace Sagad, and I&apos;m a passionate
            full-stack developer who loves creating applications that are both
            functional and delightful to use. My journey into tech started with
            a deep curiosity for how software works, which led me to develop a
            strong skill set in languages and frameworks like JavaScript,
            Python, Java, React, and Node.js.
            <br />
            <br />
            As a recent graduate with a degree in Computer Science from Queens
            College, CUNY, I’ve gained hands-on experience and honed my skills
            through programs like the CUNY Tech Prep Fellowship and The Build
            Fellowship by Open Avenues. I&apos;m incredibly proud of leading
            projects like EventSphere, an event management platform, and winning
            the SWE Best Practices Award at CTP Hacks 2024 for the CUNY Student
            Needs Survey project.
            <br />
            <br />
            I&apos;m an end-to-end builder who thrives on solving complex
            problems, from designing robust backend APIs to crafting engaging
            user interfaces. I’m always looking to expand my knowledge and apply
            my skills to impactful projects. Let&apos;s make something amazing
            together!
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
