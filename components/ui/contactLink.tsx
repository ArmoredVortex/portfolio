"use client";

import React from "react";
import { motion } from "framer-motion";

interface ContactLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  index: number;
}

const ContactLink: React.FC<ContactLinkProps> = ({
  href,
  icon,
  label,
  index,
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.2, y: -2 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="text-neutral-800 dark:text-white hover:text-blue-500 transition-colors cursor-pointer"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
};

export default ContactLink;
