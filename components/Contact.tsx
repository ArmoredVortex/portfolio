"use client";

import React from "react";
import { Orbitron } from "next/font/google";
import { motion } from "framer-motion";
import {
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMailboxdotorg,
  SiMailgun,
  SiMinutemailer,
  SiProtonmail,
} from "react-icons/si"; // ✅ from Simple Icons

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "700",
});

const contacts = [
  {
    label: "Email",
    href: "mailto:armoredvortex@example.com",
    icon: <SiProtonmail className="w-6 h-6" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/ArmoredVortex",
    icon: <SiGithub className="w-6 h-6" />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rachit-kumar-pandey-599a98319/",
    icon: <SiLinkedin className="w-6 h-6" />,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 py-12 max-w-6xl mx-auto flex flex-col"
    >
      <div className="flex space-x-6 w-full justify-start">
        {contacts.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="text-neutral-800 dark:text-white hover:text-blue-500 transition-colors"
            aria-label={contact.label}
          >
            {contact.icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
