import React from "react";
import ProjectCard from "./ProjectCard";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "700", // Bold
});

const Projects = () => {
  return (
    <div id="projects" className="px-4 py-12 max-w-6xl mx-auto">
      <h2
        className={`${orbitron.className} text-5xl sm:text-6xl font-extrabold text-left text-blue-500 tracking-tight mb-10`}
      >
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard
          projectName="Hexstart"
          projectDesc="A minimal browser startpage"
          imgSrc="/images/hexstart.png"
        />
        <ProjectCard
          projectName="easy-enigma"
          projectDesc="An npm package to simulate an enigma machine"
          imgSrc="/images/easy-enigma.png"
        />
        <ProjectCard
          projectName="unixporn.github.io"
          projectDesc="A collection of dotfiles from r/unixporn community"
          imgSrc="/images/unixporn-dots.png"
        />
        <ProjectCard
          projectName="Encrypted Ballot"
          projectDesc="Winter of Code 7.0 Cyberlabs project for Infosec division IIT (ISM) Dhanbad"
          imgSrc="/images/woc.png"
        />
      </div>
    </div>
  );
};

export default Projects;
