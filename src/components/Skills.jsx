import React, { useState } from "react";
import { motion } from "framer-motion";

// Icons
import { FaJs, FaReact, FaPython, FaDatabase, FaJava, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus, SiJest, SiStreamlit, SiOpenai } from "react-icons/si";
import { MdOutlineLabel } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function Skills() {
  const [skills] = useState([
    // --- Programming Languages ---
    { id: 1, name: "Python (ML + DSA)", icon: <FaPython size={50} /> },
    { id: 2, name: "C++ (DSA)", icon: <SiCplusplus size={50} /> },
    { id: 3, name: "Java", icon: <FaJava size={50} /> },
    { id: 4, name: "JavaScript (ES2025)", icon: <FaJs size={50} /> },

    // --- AI / ML ---
    { id: 5, name: "Deep Learning (CNN • YOLO)", icon: <GiArtificialIntelligence size={50} /> },
    { id: 6, name: "Model Optimization", icon: <MdOutlineLabel size={50} /> },
    { id: 7, name: "Dataset Engineering", icon: <MdOutlineLabel size={50} /> },

    // --- Full Stack ---
    { id: 8, name: "React.js", icon: <FaReact size={50} /> },
    { id: 9, name: "Node.js (APIs)", icon: <FaNodeJs size={50} /> },
    { id: 10, name: "Tailwind CSS", icon: <RiTailwindCssFill size={50} /> },

    // --- Data Engineering ---
    { id: 11, name: "Streamlit Apps", icon: <SiStreamlit size={50} /> },
    { id: 12, name: "Data Pipelines", icon: <FaDatabase size={50} /> },

    // --- DevOps + Testing ---
    { id: 13, name: "CI/CD (Docker • GH Actions)", icon: <SiOpenai size={50} /> },
    { id: 14, name: "Testing (Jest)", icon: <SiJest size={50} /> },

    // --- Enterprise Platforms ---
    { id: 15, name: "ServiceNow CSA and CAD", icon: <SiOpenai size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Saint Gobain",
      role: "AI Intern - Smart Devices",
      period: "Jul 2025 – Aug 2025",
      description: [
        "Designed and implemented a YOLO-based real-time safety detection pipeline.",
        "Annotated and cleaned 40,000+ images for robust model training.",
        "Optimized deep learning workflows to improve accuracy and inference speed.",
        "Performed model robustness testing under varying lighting and object conditions.",
        "Enhanced system performance and reliability for industrial deployment.",
      ],
      logo: "/assets/sg.png",
    },
    {
      id: 2,
      company: "Chennai Institute of Technology",
      role: "Research Intern",
      period: "May 2024 – Jul 2024",
      description: [
        "Developed drone-based object detection models with edge optimization.",
        "Built an acoustic analysis tool generating sustainability scores.",
        "Contributed to two journal papers through experimentation and data analysis.",
        "Used Python, EfficientNet, CNN, React.js, and Streamlit for ML pipelines.",
      ],
      logo: "/assets/cit.png",
    },
    {
      id: 3,
      company: "Anjane Technologies",
      role: "Backend Developer Intern",
      period: "Nov 2024 – Jan 2025",
      description: [
        "Built backend features for a React Native product in a startup environment.",
        "Implemented automated testing using Jest, improving code reliability.",
        "Managed CI/CD pipelines with Docker + GitHub Actions.",
        "Worked cross-functionally in an agile development team.",
      ],
      logo: "/assets/anjane.jpeg",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        {/* ✅ Title Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left mb-10"
        >
          <h2 className="text-3xl lg:text-5xl font-bold">
            <span className="font-serif text-black tracking-tight">My</span>{" "}
            <span className="font-serif italic text-black tracking-tight">Skills</span>
          </h2>

          <p className="mt-2 text-sm lg:text-base text-gray-600 max-w-xl">
            A curated, modern stack spanning AI, full-stack engineering, data systems,
            DevOps, and enterprise platforms — crafted through real project experience.
          </p>
        </motion.div>

        {/* ✅ Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold 
        mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer 
              border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-3"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.05 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p className="text-center text-xs lg:text-sm leading-tight">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="font-extrabold">My</span>{" "}
          <span className="font-extrabold">Experience</span>
        </motion.h2>

        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>

                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>

              {/* ✅ Bullet Points */}
              <ul className="list-disc ml-6 mt-6 text-[#D4D4D8] text-sm/6 lg:text-base space-y-2">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="font-light">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
