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
            Hello! My name is Ace, and I enjoy creating and developing
            applications.
            <br />
            <br />
            My fascination with technology started at a young age, driven by a
            desire to understand how software works and how I can create
            engaging experiences with it. This curiosity has guided my academic
            journey and has led me to develop a strong foundation in web and
            software development.
            <br />
            <br />
            I have honed my skills in various languages and frameworks,
            including React, HTML, CSS, Bootstrap, Tailwind CSS, JavaScript,
            Java, Node.js, MS SQL, and jQuery. As a proud recipient of the SWE
            Best Practices Award at the CTP Hackathon 2024, I have demonstrated
            my commitment to excellence in software development and
            collaboration.
            <br />
            <br />
            As a CUNY Tech Prep Web Development Fellow, I have gained invaluable
            experience through mentorship programs and hands-on projects. These
            opportunities have not only enhanced my technical abilities but also
            improved my capacity to communicate complex ideas effectively. I am
            passionate about both front-end and back-end development and am
            eager to contribute to impactful projects in a dynamic team
            environment.
            <br />
            <br />
            With a dedication to continuous learning and a drive to stay current
            with emerging technologies, I look forward to making meaningful
            contributions in the tech world. My goal is to build user-friendly
            applications that inspire and delight users while solving real-world
            problems.
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
