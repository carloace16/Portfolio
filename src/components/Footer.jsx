import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // React Icons package

const Footer = () => {
  return (
    <footer className=" flex bg-gray-900 text-gray-300 py-4 min-h-[10vh] justify-center">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left Side: Copyright */}
        <p className="text-sm">© {new Date().getFullYear()} Carlo Ace Sagad</p>

        {/* Right Side: Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/carlo-ace-sagad-223a72155/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/carloace16"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
