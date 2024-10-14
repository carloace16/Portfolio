import React from "react";
import projects from "./projectsData"; // Adjust the path if necessary

// ProjectCard Component
const ProjectCard = ({ title, description, image, tools, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative  shadow-2xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-gray-400 duration-300 ease-in-out"
    >
      <div className="w-full h-64">
        {" "}
        {/* Increased height for larger images */}
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

// Projects Component
const Projects = () => {
  return (
    <section id="projects" className="py-12 body-color">
      <div className="container mx-auto px-6">
        <h1 className="text-7xl font-bold text-center mt-12 mb-20">📁</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map(
            (
              project,
              index // Display only the first 6 projects
            ) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                tools={project.tools}
                link={project.link} // Pass the link prop to the ProjectCard
              />
            )
          )}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://github.com/carloace16?tab=repositories" // Replace with your actual GitHub repo link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 rounded-md bg-indigo-600 px-4 py-2 text-lg font-semibold text-white shadow-2xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-gray-400 duration-300 ease-in-out"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
