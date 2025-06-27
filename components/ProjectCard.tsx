"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectCardProps = {
  projectName: string;
  projectDesc: string;
  imgSrc: string;
  index?: number; // Optional, if you want staggered animation
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  projectDesc,
  imgSrc,
  index = 0,
}) => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <CardContainer className="w-full h-full">
        <CardBody className="bg-gray-50 group/card relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] rounded-xl p-4 flex flex-col justify-between h-full">
          <div>
            <CardItem
              translateZ="50"
              className="text-lg font-semibold text-neutral-800 dark:text-white"
            >
              {projectName}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
            >
              {projectDesc}
            </CardItem>
          </div>

          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-full h-40 rounded-lg overflow-hidden">
              <Image
                src={imgSrc}
                alt={projectName}
                fill
                className="object-cover"
              />
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

export default ProjectCard;
