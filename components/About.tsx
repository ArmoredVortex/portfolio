"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-[90vh] pt-24 px-6 bg-[#2C2C2C] text-[#E4E4E4] flex flex-col justify-center items-start overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Animated geometric design */}
        <motion.svg
          className="absolute right-10 top-1/4 hidden md:block z-0"
          width="300"
          height="400"
          viewBox="0 0 300 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
        >
          <motion.polygon
            points="50,15 100,100 0,100"
            fill="url(#grad1)"
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.polygon
            points="250,300 280,350 220,350"
            fill="url(#grad2)"
            animate={{ y: [0, 12, 0], x: [0, -8, 0], rotate: [0, -3, 3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.line
            x1="150"
            y1="0"
            x2="150"
            y2="400"
            stroke="url(#grad3)"
            strokeWidth="1"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A8DADC" />
              <stop offset="100%" stopColor="#B39CD0" />
            </linearGradient>
            <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFC1CC" />
              <stop offset="100%" stopColor="#B39CD0" />
            </linearGradient>
            <linearGradient id="grad3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B39CD0" />
              <stop offset="100%" stopColor="#A8DADC" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Main content */}
        <div className="max-w-3xl z-10">
          <motion.h2
            className={`text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#A8DADC] to-[#B39CD0] mb-8`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-[#E4E4E4] leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hey there! I&apos;m Rachit — a sophomore studying Computer Science
            at IIT (ISM) Dhanbad.
          </motion.p>
          <motion.p
            className="mt-6 text-lg text-[#C0C0C0] leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Passionate about Cybersecurity.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
