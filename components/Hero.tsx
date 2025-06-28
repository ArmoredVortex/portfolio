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
      className="relative h-screen w-full bg-[#2c2c2c] overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#B39CD0_0.5px,transparent_0.5px)]",
          "dark:[background-image:radial-gradient(#B39CD0_0.5px,transparent_0.5px)]"
        )}
      />

      {/* Radial Mask */}
      <div className="absolute inset-0 z-10 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-[#2c2c2c]" />

      {/* Main Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-6 sm:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-10 space-y-8 md:space-y-0">
          {/* Text Section */}
          <div className="text-left">
            <p className="text-2xl sm:text-4xl font-semibold">
              👋{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#A8DADC] to-[#FFC1CC] mb-8">
                Hi! I’m
              </span>
            </p>
            <h1
              style={{ fontFamily: "Copernicus" }}
              className="text-5xl sm:text-7xl md:text-9xl font-bold text-[#e4e4e4] pt-7"
            >
              <Typewriter
                words={["Rachit"]}
                cursor={false}
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
          <HoverBorderGradient containerClassName="w-[180px] h-[180px] rounded-full flex items-center justify-center bg-[#2c2c2c]">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full shadow-md"
            />
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
};

export default Hero;
