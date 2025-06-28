"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  BookOpen,
  Code,
  Wrench,
  BarChart3,
  Users,
} from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      institution: "Universitas Islam Negeri Sunan Ampel",
      period: "2021-Present",
      degree: "S1 Sistem Informasi",
      gpa: "GPA: 3.68",
    },
    {
      institution: "SMA Negeri 1 Krembung",
      period: "Graduated 2021",
      degree: "High School Diploma",
      gpa: "",
    },
  ];

  const skillCategories = [
    {
      title: "Web Development",
      icon: Code,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "PHP",
        "Laravel",
        "MySQL",
        "REST API",
      ],
    },
    {
      title: "Programming",
      icon: BookOpen,
      skills: ["Python", "Java", "OOP"],
    },
    {
      title: "Productivity & Tools",
      icon: Wrench,
      skills: ["Github", "Visual Studio Code", "Tableau", "Docker"],
    },
    {
      title: "Data Analysis",
      icon: BarChart3,
      skills: ["Excel Functions", "Pivot Tables"],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Communication",
        "Teamwork",
        "Problem Solving",
        "Critical Thinking",
      ],
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
      id="about"
      ref={ref}
      className="section-padding bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
              Professional Summary
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a Web Developer specializing in both backend and frontend
              systems, always oriented towards practical solutions. I am
              passionate about software development and continually open to
              learning new technologies and methodologies to build high-quality
              software.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
              <GraduationCap size={28} />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card"
                >
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {edu.institution}
                  </h4>
                  <p className="text-cyan-400 font-medium mb-1">{edu.period}</p>
                  <p className="text-gray-300 mb-1">{edu.degree}</p>
                  {edu.gpa && (
                    <p className="text-gray-400 text-sm">{edu.gpa}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="gradient-text">Skills</span>
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group hover:border-cyan-500/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon size={24} className="text-cyan-400" />
                  <h4 className="text-xl font-semibold text-white">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-700/50 text-cyan-300 rounded-full text-sm border border-gray-600 hover:border-cyan-500/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
