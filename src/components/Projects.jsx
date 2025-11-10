import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "AI Governance & Bias Mitigation Platform",
    description:
      "An AI governance system that monitors models for bias, prevents hallucinations, and automates continuous auditing with real-time anomaly detection.",
    image: "/assets/sentra.jpeg",
    link: "https://github.com/rithick007/sentra-future-guard",
    tech: ["Python", "Streamlit", "GitHub Actions", "AI Governance"]
  },
  {
    id: 2,
    title: "Drone Object Detection Optimization Framework",
    description:
      "An optimization pipeline for drone-based detection using pruning, quantization, and knowledge distillation with YOLOv5, ONNX, and PyTorch.",
    image: "/assets/drone.jpeg",
    link: "https://github.com/rithick007/drone-vision-spark",
    tech: ["React JS", "YOLOv5", "PyTorch", "ONNX"]
  },
  {
    id: 3,
    title: "Pan-India Deforestation & Fire Detection System",
    description:
      "A CNN-based system for satellite-image analysis to detect fire risks and deforestation trends, with an interactive Streamlit dashboard.",
    image: "/assets/forest.jpeg",
    link: "https://github.com/rithick007/Deforestation-and-Forestfire-Analyser-using-ML",
    tech: ["CNN", "Python", "Streamlit", "React JS"]
  }
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-12 my-8 lg:py-20 lg:my-20" id="projects">
      
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-10 lg:space-y-20 space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 12, delay: index * 0.15 }}
            viewport={{ once: true }}
          >

            {/* ✅ IMAGE CARD */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="lg:w-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-white/10 
              bg-white/5 backdrop-blur-lg hover:border-white/20 transition-all"
            >
              <img
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
                src={project.image}
                alt={project.title}
              />
            </motion.div>

            {/* ✅ PROJECT DETAILS */}
            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              
              {/* Number */}
              <h2 className="font-extrabold text-white opacity-80 
              text-3xl lg:text-5xl tracking-wider">
                {String(project.id).padStart(2, "0")}
              </h2>

              {/* Title */}
              <p className="font-bold text-white text-2xl lg:text-3xl leading-snug">
                {project.title}
              </p>

              {/* Description */}
              <p className="font-light text-sm/6 lg:text-base text-[#b5b5b5] max-w-xl">
                {project.description}
              </p>

              {/* ✅ TECH STACK BADGES */}
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs lg:text-sm px-3 py-1 rounded-full 
                    bg-white/10 text-white border border-white/20 backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* ✅ ACTION BUTTONS */}
              <div className="flex gap-4 mt-4">
                {/* GitHub */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-md 
                  bg-white/10 border border-white/20 text-white backdrop-blur-md
                  hover:bg-white/20 transition"
                >
                  <BsGithub size={18} />
                  <span className="text-sm">View Code</span>
                </motion.a>

                {/* Live Demo (optional placeholder) */}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-md 
                  bg-white/5 border border-white/10 text-white/60 backdrop-blur-md cursor-not-allowed"
                >
                  <TbExternalLink size={18} />
                  <span className="text-sm">Live Demo</span>
                </motion.a>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
