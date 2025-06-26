"use client";

import React from "react";
import { CardContainer, CardBody } from "./ui/3d-card";
import { motion } from "framer-motion";

const ViewMoreCard = () => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.6, delay: 5 * 0.1, ease: "easeOut" }}
    >
      <CardContainer className="w-full h-full">
        <CardBody className="bg-gray-50 group/card relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] rounded-xl p-4 flex flex-col h-full min-h-[260px]">
          {/* Here's the fix: make it flex-1 to stretch */}
          <div className="flex-1 flex items-center justify-center">
            <a
              href="https://github.com/ArmoredVortex?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="max-h-11 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  View More
                </span>
              </button>
            </a>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

export default ViewMoreCard;
