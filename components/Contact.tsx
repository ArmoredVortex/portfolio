"use client";

import React, { useState } from "react";
import { SiGithub, SiLinkedin, SiProtonmail, SiDiscord } from "react-icons/si";
import ContactLink from "./ui/contactLink";
import ContactCopy from "./ui/contactCopy";

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
        {contacts.map((contact, index) =>
          contact.type === "link" ? (
            <ContactLink
              key={index}
              href={contact.href!}
              icon={contact.icon}
              label={contact.label}
              index={index}
            />
          ) : (
            <ContactCopy
              key={index}
              icon={contact.icon}
              label={contact.label}
              copyText={contact.copyText!}
              index={index}
              copied={copied}
              onCopy={handleCopy}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Contact;
