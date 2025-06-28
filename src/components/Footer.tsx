"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Andrian-Meyhta",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/andrian-meyhta-ferdiansyah-20aa88320",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:andrianmeyf@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <p className="text-gray-400">
              © 2024{" "}
              <span className="gradient-text font-semibold">
                Andrian Meyhta Ferdiansyah
              </span>
              . All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-800/50"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
