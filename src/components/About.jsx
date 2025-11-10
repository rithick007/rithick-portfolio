import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div
      className="px-5 lg:px-28 py-10 lg:py-20 flex justify-between flex-col lg:flex-row gap-10 lg:gap-16"
      id="about"
    >
      {/* Left Image Section */}
      <motion.div
        className="lg:w-1/2 flex justify-center lg:justify-start items-center lg:items-start"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 12 }}
        viewport={{ once: true }}
      >
        <motion.img
          src="/assets/about-me.svg"
          alt="About Me Illustration"
          className="w-[80%] lg:w-[95%] max-w-[500px] object-contain"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Right Text Section */}
      <motion.div
        className="lg:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl font-semibold">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] leading-6 lg:text-base mt-5">
          I’m a developer who likes building things that actually work — whether it’s a full-stack
          app, a data pipeline, or an AI model that behaves on weekdays. I’m comfortable with React,
          Python, and anything that mixes logic with creativity, and I’ve worked on everything from
          YOLO-based detection systems to backend engineering in startup environments.
        </p>

        <p className="text-[#71717A] leading-6 lg:text-base mt-4">
          Outside code, you’ll usually find me behind a mic. I’m a public speaker and competitive
          debater, which means explaining complex ideas simply is kind of my thing — and yes, it
          also makes me the permanent “team presenter” whether I asked for the job or not.
        </p>

        <p className="text-[#71717A] leading-6 lg:text-base mt-4">
          I enjoy problems that force me to learn, teams that think boldly, and tech that isn’t
          afraid to break the mold. Whether it’s improving a UI, sharpening a model, or ripping a
          system apart to rebuild it better, I thrive where curiosity turns into execution, even if
          the compiler likes to test my patience.
        </p>
      </motion.div>
    </div>
  );
}
