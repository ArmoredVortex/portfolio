"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { motion } from "framer-motion";

const ViewMoreCard = () => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
    >
      <CardContainer className="w-full h-full">
        <CardBody className="bg-[#2C2C2C] group/card relative border border-[#B39CD0]/30 rounded-xl p-4 flex flex-col h-full min-h-[285px] items-center hover:shadow-lg hover:shadow-[#A8DADC]/20 transition-shadow duration-300">
          <CardItem
            translateZ={60}
            className="flex-1 flex items-center justify-center"
          >
            <a
              href="https://github.com/ArmoredVortex?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-[#2C2C2C] rounded-lg bg-[#B39CD0] hover:bg-[#A8DADC] transition-all duration-200 ease-in-out focus:outline-none">
                View More
              </button>
            </a>
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

export default ViewMoreCard;
