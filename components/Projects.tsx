"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import ViewMoreCard from "./ViewMoreCard";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-12 max-w-6xl mx-auto">
      <motion.h2
        className={`text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#A8DADC] to-[#B39CD0] mb-8`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

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
    </section>
  );
};

export default Projects;
