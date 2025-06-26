import React from "react";
import ProjectCard from "./ProjectCard";
import { Orbitron } from "next/font/google";
import ViewMoreCard from "./ViewMoreCard";

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        <ProjectCard
          projectName="Magnet++"
          projectDesc="A torrent client written in C++"
          imgSrc="/images/magnet.png"
          index={0}
        />
        <ProjectCard
          projectName="Encrypted Ballot"
          projectDesc="Winter of Code 7.0 Cyberlabs IIT (ISM) Dhanbad"
          imgSrc="/images/woc.png"
          index={1}
        />
        <ProjectCard
          projectName="Hexstart"
          projectDesc="A minimal browser startpage"
          imgSrc="/images/hexstart.png"
          index={2}
        />
        <ProjectCard
          projectName="unixporn.github.io"
          projectDesc="A collection of dotfiles from r/unixporn community"
          imgSrc="/images/unixporn-dots.png"
          index={3}
        />
        <ProjectCard
          projectName="easy-enigma"
          projectDesc="An npm package to simulate an enigma machine"
          imgSrc="/images/easy-enigma.png"
          index={4}
        />
        <ViewMoreCard />
      </div>
    </div>
  );
};

export default Projects;
