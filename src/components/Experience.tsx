"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "Programmer (Intern)",
      company: "Dinas Komunikasi dan Informatika Sidoarjo",
      period: "Jan 2024 - Apr 2024",
      location: "Sidoarjo, Indonesia",
      contributions: [
        "Designed and implemented a Python automation script for call center data backups, achieving a 100% success rate.",
        "Developed an OCR prototype for e-KTP data using Python and Tesseract.",
        "Managed hosting trials, database maintenance, and functionality testing for over 100 government web servers and village websites.",
        "Trained 150 village administrators in web management and handled the administrative activation for 347 websites.",
      ],
    },
    {
      role: "Data Analyst Assistant",
      company: "AKMI (Kemenag RI)",
      period: "Sep 2024 - Oct 2024",
      location: "Jakarta, Indonesia",
      contributions: [
        "Processed and analyzed over 15,000 student data entries as part of the national data team.",
        "Developed data visualizations using Tableau and Excel to support decision-making for Kemenag stakeholders.",
      ],
    },
    {
      role: "Data Entry Specialist",
      company: "Quantum HRM Internasional",
      period: "Dec 2024",
      location: "Remote",
      contributions: [
        "Handled the entry and validation of over 500 interview data records, ensuring high accuracy.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900 transform md:-translate-x-1/2 mt-6" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:text-right"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="card hover:border-cyan-500/50"
                  >
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Building size={16} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Contributions */}
                    <div className="space-y-2">
                      <h4 className="text-cyan-400 font-semibold mb-3">
                        Key Contributions:
                      </h4>
                      <ul className="space-y-2">
                        {exp.contributions.map((contribution, contIndex) => (
                          <li
                            key={contIndex}
                            className="text-gray-300 text-sm leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-cyan-400 mt-1.5">•</span>
                            <span>{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
