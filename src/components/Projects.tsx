"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Code } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Sistem Informasi Manajemen Layanan Teknologi",
      description:
        "A Laravel-based web app built to manage IT service requests at Diskominfo, featuring service management, meeting schedules, and resource mapping.",
      technologies: [
        "Laravel",
        "React",
        "TypeScript",
        "Inertia",
        "PHP",
        "MySQL",
        "TailwindCSS",
      ],
      github: "#",
      live: "#",
    },
    {
      title: "Automation Data Insert",
      description:
        "A Python script to automate inserting Excel/CSV data into a database, featuring automatic table creation and incremental backups.",
      technologies: ["Python", "Pandas", "SQL", "Automation"],
      github: "https://github.com/AndrianMeyhta/excelbatchinsert",
      live: "#",
    },
    {
      title: "InstaAPP",
      description:
        "A web app similar to Instagram, built with Laravel and React Typescript. API is built with Laravel Sanctum.",
      technologies: [
        "Laravel",
        "React",
        "TypeScript",
        "Laravel Sanctum",
        "TailwindCSS",
        "API",
      ],
      github: "https://github.com/AndrianMeyhta/instaapp",
      live: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card group hover:border-cyan-500/50"
            >
              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <Code size={24} className="text-cyan-400" />
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-700/50 text-cyan-300 rounded-full text-sm border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Andrian-Meyhta"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
