"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiProtonmail, SiDiscord } from "react-icons/si";

const contacts = [
  {
    label: "Email",
    href: "mailto:armoredvortex@example.com",
    icon: <SiProtonmail className="w-7 h-7" />,
    type: "link",
  },
  {
    label: "GitHub",
    href: "https://github.com/ArmoredVortex",
    icon: <SiGithub className="w-7 h-7" />,
    type: "link",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/rachit-kumar-pandey-599a98319/",
    icon: <SiLinkedin className="w-7 h-7" />,
    type: "link",
  },
  {
    label: "Discord",
    icon: <SiDiscord className="w-7 h-7" />,
    type: "copy",
    copyText: "armoredvortex",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="px-4 py-12 max-w-6xl mx-auto flex flex-col"
    >
      <div className="flex space-x-6 w-full justify-start">
        {contacts.map((contact, index) => {
          const motionProps = {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: false, amount: 0.2 },
            whileHover: { scale: 1.2, y: -2 },
            transition: {
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeOut",
              type: "spring",
              stiffness: 300,
            },
            className:
              "text-neutral-800 dark:text-white hover:text-blue-500 transition-colors cursor-pointer",
            "aria-label": contact.label,
          };

          if (contact.type === "link") {
            return (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                {...motionProps}
              >
                {contact.icon}
              </motion.a>
            );
          } else {
            return (
              <motion.button
                key={index}
                onClick={() => handleCopy(contact.copyText!)}
                {...motionProps}
              >
                <div className="relative group">
                  {contact.icon}
                  <span className="absolute bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-black text-white dark:bg-white dark:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {copied ? "Copied!" : "Copy"}
                  </span>
                </div>
              </motion.button>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Contact;
