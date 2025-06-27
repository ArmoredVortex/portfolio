"use client";

import React from "react";
import { motion } from "framer-motion";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "700", // Bold
});

const About = () => {
  return (
    <div
      id="about"
      className="relative min-h-[90vh] w-full pt-24 px-6 bg-black text-white flex flex-col justify-center items-start overflow-hidden"
    >
      {/* Left vertical line */}
      <div className="absolute left-6 top-24 bottom-24 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-40 rounded-full" />

      <div className="max-w-6xl">
        {/* Animated right-side geometric design */}
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
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <linearGradient id="grad3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Main content */}
        <div className="max-w-3xl ml-12 z-10">
          <motion.h2
            className={`${orbitron.className} text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I&apos;m a passionate developer with a love for building elegant,
            performant, and user-friendly applications. I enjoy working with
            modern technologies, designing thoughtful user experiences, and
            constantly learning and experimenting.
          </motion.p>

          <motion.p
            className="mt-6 text-lg text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Whether it&apos;s frontend interfaces or backend systems, I focus on
            crafting clean, maintainable code and bringing ideas to life.
            Let&apos;s build something amazing together.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
