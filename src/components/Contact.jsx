import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin, IoMailOutline } from 'react-icons/io5';
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/mdkyngpv", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    setIsSubmitting(false);

    if (res.ok) {
      setIsSent(true);
      e.target.reset();
      setTimeout(() => setIsSent(false), 4000);
    } else {
      alert("Something went wrong. Try again!");
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:my-16 lg:px-28 my-8 px-5 relative"
      id="contact"
    >

      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl lg:text-4xl text-center"
      >
        Contact <span className="font-extrabold">Me</span>
      </motion.h2>

      <div className="flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row">

        {/* ✅ LEFT SIDE — FORM */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-[40%]"
        >
          <form onSubmit={handleSubmit} className="w-full space-y-3 lg:space-y-5">

            <input
              name="name"
              className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] 
              text-sm w-full focus:ring-2 focus:ring-black/40 outline-none transition"
              type="text"
              placeholder="Your name"
              required
            />

            <input
              name="email"
              className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] 
              text-sm w-full focus:ring-2 focus:ring-black/40 outline-none transition"
              type="email"
              placeholder="Email"
              required
            />

            <input
              name="website"
              className="border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] 
              text-sm w-full focus:ring-2 focus:ring-black/40 outline-none transition"
              type="text"
              placeholder="Your website (If exists)"
            />

            <textarea
              name="message"
              className="resize-none border-2 px-5 py-3 h-32 border-black 
              placeholder:text-[#71717A] rounded text-sm w-full 
              focus:ring-2 focus:ring-black/40 outline-none transition"
              placeholder="How can I help?*"
              required
            ></textarea>

            {/* ✅ BUTTON + SOCIALS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row"
            >

              {/* ✅ SUBMIT BUTTON */}
              <motion.button
                whileHover={{ scale: isSent ? 1 : 1.05 }}
                type="submit"
                disabled={isSubmitting}
                className={`bg-black justify-center w-fit lg:w-auto lg:flex-1 text-white px-3 py-2 
                rounded flex items-center gap-x-3 font-medium transition-all
                ${isSent ? "bg-green-600" : "hover:shadow-lg"}`}
              >
                {isSent ? (
                  "Sent !!"
                ) : isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 border-2 border-white 
                    border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </div>
                ) : (
                  "Get In Touch"
                )}
              </motion.button>

              {/* ✅ SOCIAL ICONS WITH LINKS — TWITTER REMOVED */}
              <div
                className={`flex items-center gap-x-2 lg:gap-x-5 transition-opacity 
                ${isSubmitting ? "opacity-40" : "opacity-100"}`}
              >
                <motion.a
                  href="mailto:rithick.s060@gmail.com"
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                >
                  <BiLogoGmail className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/rithick-bharathwaj-s-6b5841296/"
                  target="_blank"
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                >
                  <IoLogoLinkedin className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>

                <motion.a
                  href="https://github.com/rithick007"
                  target="_blank"
                  className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                  whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                >
                  <BsGithub className="w-4 h-4 lg:w-5 lg:h-5" />
                </motion.a>
              </div>

            </motion.div>

          </form>
        </motion.div>

        {/* ✅ RIGHT SIDE — CONTACT INFO */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <div className="font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3">
            <h2>Let's <span className="text-white" style={{ WebkitTextStroke: "1px black" }}>talk</span> for</h2>
            <h2>Something special</h2>
          </div>

          <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6">
            I seek to push the limits of creativity to create high-engaging, user-friendly, 
            and memorable interactive experiences.
          </p>

          <div className="font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4">

            <motion.a
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 group"
              href="mailto:rithick.s060@gmail.com"
            >
              <span className="border-2 transition-all border-transparent group-hover:border-black rounded-full p-1">
                <IoMailOutline className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              rithick.s060@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 group"
              href="tel:8148627887"
            >
              <span className="border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]">
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              8148627887
            </motion.a>

          </div>
        </motion.div>

      </div>

    </motion.div>
  );
}
