import React, { useEffect, useState } from "react";

function Hero() {
  const fullText = "Hii, my name is Carlo Ace Sagad 🧑‍💻.";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
        // Start blinking cursor after typing is complete
        setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 350); // Blink every 500ms
      }
    }, 70); // Adjust speed here (100 ms between each letter)

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    // bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb]
    <div className="bg-gradient-to-r from-[#a1c4fd] to-[#c2e9fb] min-h-screen flex flex-col pt-24">
      <div className="relative isolate px-6 pt-24 lg:px-8 flex-grow flex items-center">
        {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            {displayedText}
            {showCursor && <span className="animate-blink">|</span>}
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-600">
            Passionate about building a brighter world
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-6">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor click behavior
                const aboutSection = document.getElementById("about");
                const navbarHeight = document.querySelector("nav").offsetHeight; // Get navbar height
                const sectionTop =
                  aboutSection.getBoundingClientRect().top + window.scrollY; // Get the top position of the section
                window.scrollTo({
                  top: sectionTop - navbarHeight, // Subtract navbar height
                  behavior: "smooth", // Smooth scrolling
                });
              }}
              className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-2xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-gray-800 duration-300 ease-in-out"
            >
              Learn more about me
            </a>
          </div>
        </div>
        {/* <div
          className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Hero;
