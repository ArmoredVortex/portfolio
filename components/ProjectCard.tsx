"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectCardProps = {
  projectName: string;
  projectDesc: string;
  imgSrc: string;
  index?: number;
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
        <CardBody className="bg-[#2C2C2C] group/card relative border border-[#B39CD0]/30 rounded-xl p-4 flex flex-col justify-between h-full hover:shadow-lg hover:shadow-[#A8DADC]/20 transition-shadow duration-300">
          <div>
            <CardItem
              translateZ="50"
              className="text-lg font-semibold text-[#E4E4E4]"
            >
              {projectName}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-sm mt-2 text-[#A8DADC]"
            >
              {projectDesc}
            </CardItem>
          </div>

          <CardItem translateZ="100" className="w-full mt-4">
            <div className="relative w-full h-40 rounded-lg overflow-hidden border border-[#FFC1CC]/40">
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
