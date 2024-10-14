// Experience.jsx
import React from "react";
import experiences from "./experiences"; // Adjust the path if necessary

const Experience = () => {
  return (
    <section id="experience" className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="flex items-start p-6 bg-white-300 rounded-lg shadow-2xl hover:shadow-gray-400 transition duration-300"
            >
              {/* Date Section */}
              <div className="w-1/4 text-center border-r-2 border-gray-300 pr-4">
                <p className="text-gray-300 mb-2">{experience.date}</p>
              </div>

              {/* Title and Description Section */}
              <div className="w-3/4 pl-4">
                <h3 className="text-xl font-semibold text-white">
                  {experience.title}
                </h3>
                <ul className="list-disc list-inside text-gray-300 mt-2">
                  {experience.description.map((point, index) => (
                    <li key={index} className="mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
