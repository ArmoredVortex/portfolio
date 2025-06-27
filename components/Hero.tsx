"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-screen w-full bg-white dark:bg-black overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* Radial Mask */}
      <div className="absolute inset-0 z-10 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-white dark:bg-black" />

      {/* Main Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-6 sm:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 space-y-8 md:space-y-0">
          {/* Text Section */}
          <div className="text-left">
            <p className="text-2xl sm:text-4xl font-semibold text-blue-600 dark:text-blue-400">
              👋{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8">
                Hi! I’m
              </span>
            </p>
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-black dark:text-white">
              <Typewriter
                words={["armoredvortex"]}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
                loop={1}
                cursorBlinking={false}
              />
            </h1>
          </div>

          {/* Profile Image */}
          <HoverBorderGradient containerClassName="w-[180px] h-[180px] rounded-full flex items-center justify-center">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={160}
              height={160}
              className="rounded-full border-4 border-gray-300 dark:border-gray-600 shadow-md"
            />
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
};

export default Hero;
