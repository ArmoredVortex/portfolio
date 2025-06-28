"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-40 bg-[rgba(44,44,44,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-1">
            <span className="text-[#e4e4e4] font-semibold">armoredvortex</span>
            <span className="text-[#a8dadc] font-semibold">.is-a.dev</span>
          </a>

          {/* Hamburger */}
          <div
            className="w-7 h-5 flex flex-col justify-between md:hidden cursor-pointer z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`h-[2px] w-full bg-[#e4e4e4] transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-[#e4e4e4] transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-[#e4e4e4] transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {["home", "about", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-[#e4e4e4] hover:text-white transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-[#2c2c2c]/80 backdrop-blur border-t border-white/10 transform transition-transform duration-1000 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-[100vh]"
        }`}
      >
        <div className="flex flex-col items-center py-6 space-y-6">
          {["home", "about", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setIsOpen(false)} // close on click
              className="text-[#e4e4e4] text-lg hover:text-white transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
