// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb]">
      <nav
        className="navbar-footer-gradient flex items-center justify-between p-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="rounded-md p-2 sm:text-2xl text-base font-semibold leading-6 text-gray-900 hover:bg-indigo-200 hover:text-blue-600 transition-all duration-300"
          >
            Ace
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            {/* Menu Icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="#about"
            className="rounded-md p-2 text-base font-semibold leading-6 text-gray-900 hover:bg-indigo-200 hover:text-blue-600 transition-all duration-300"
          >
            About
          </a>
          <a
            href="#projects"
            className="rounded-md p-2 text-base font-semibold leading-6 text-gray-900 hover:bg-indigo-200 hover:text-blue-600 transition-all duration-300"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="rounded-md p-2 text-base font-semibold leading-6 text-gray-900 hover:bg-indigo-200 hover:text-blue-600 transition-all duration-300"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="rounded-md p-2 text-base font-semibold leading-6 text-gray-900 hover:bg-indigo-200 hover:text-blue-600 transition-all duration-300"
          >
            Contact
          </a>
          <a
            href="/resume latest.pdf"
            target="_blank"
            rel="noopener noreferrer" // Optional: for security reasons
            className="rounded-md p-2 text-base font-semibold leading-6 bg-indigo-600 text-white shadow-2xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-gray-800 duration-300 ease-in-out"
          >
            Resume
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden navbar-gradient">
          <div className="space-y-2 px-2 pb-3 pt-2">
            <a
              href="#about"
              className="block rounded-md px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-indigo-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="block rounded-md px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-indigo-200"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="block rounded-md px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-indigo-200"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="block rounded-md px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-indigo-200"
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer" // Optional: for security reasons
              className="block ml-1 rounded-md px-2 py-2 text-base font-semibold leading-7 bg-indigo-600 text-white shadow-2xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-gray-800 duration-300 ease-in-out"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
