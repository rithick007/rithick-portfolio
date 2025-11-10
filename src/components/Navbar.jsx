import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 110,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 left-0 w-full z-50 px-5 lg:px-28 p-5 
        transition-all duration-300
        ${isOpen ? "forced-solid" : "bg-white/40 backdrop-blur-md"}
        ${hasShadow ? "lg:shadow-md" : "lg:shadow-none"}
      `}
      style={{
        WebkitBackdropFilter: isOpen ? "none" : "blur(12px)",
        backdropFilter: isOpen ? "none" : "blur(12px)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">

        {/* ✅ Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
          {["about", "skills", "projects", "contact"].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} className="group">
              <button onClick={() => scrollToSection(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
              <span className="w-0 group-hover:w-full h-[2px] bg-black transition-all block"></span>
            </motion.li>
          ))}
        </ul>

        {/* ✅ Desktop Resume */}
        <motion.a
          href="/assets/resume.pdf"
          download="Rithick-Resume.pdf"
          className="hidden lg:inline-block relative px-4 py-2 font-medium group"
        >
          <span className="absolute inset-0 bg-black translate-x-1 translate-y-1 transition group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 bg-white border-2 border-black transition group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white flex items-center gap-x-3">
            Resume <TbDownload size={16} />
          </span>
        </motion.a>

        {/* ✅ Mobile Menu Icon */}
        <motion.button
          className="lg:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.2 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* ✅ Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-50"
          >
            <button
              className="absolute top-5 right-5 text-3xl"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>

            <ul className="flex flex-col items-start ml-16 mt-28 gap-y-6 font-semibold">
              {["about", "skills", "projects", "contact"].map((item) => (
                <motion.li key={item} whileHover={{ scale: 1.1 }} className="border-b">
                  <button onClick={() => scrollToSection(item)}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </motion.li>
              ))}

              {/* ✅ Mobile Resume */}
              <motion.a
                href="/assets/resume.pdf"
                download="Rithick-Resume.pdf"
                whileHover={{ scale: 1.1 }}
                className="relative inline-block px-4 py-2 font-semibold group mt-5"
              >
                <span className="absolute inset-0 bg-black translate-x-1 translate-y-1 transition group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 bg-white border-2 border-black group-hover:bg-black transition"></span>
                <span className="relative text-black group-hover:text-white flex items-center gap-x-3">
                  Resume <TbDownload size={16} />
                </span>
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}