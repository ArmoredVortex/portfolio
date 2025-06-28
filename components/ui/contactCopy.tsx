"use client";

import React from "react";
import { motion } from "framer-motion";

interface ContactCopyProps {
  icon: React.ReactNode;
  label: string;
  copyText: string;
  index: number;
  copied: boolean;
  onCopy: (text: string) => void;
}

const ContactCopy: React.FC<ContactCopyProps> = ({
  icon,
  label,
  copyText,
  copied,
  onCopy,
}) => {
  return (
    <motion.button
      onClick={() => onCopy(copyText)}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.2, y: -2 }}
      transition={{
        delay: 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="text-[#e4e4e4] hover:text-[#B39CD0] transition-colors cursor-pointer"
      aria-label={label}
    >
      <div className="relative group">
        {icon}
        <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-[#e4e4e4] text-[#2c2c2c] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {copied ? "Copied!" : "Copy"}
        </span>
      </div>
    </motion.button>
  );
};

export default ContactCopy;
