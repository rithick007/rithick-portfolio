import React, { useEffect, useRef } from "react";
import Home from "./pages/Home";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    let attempts = 0;

    function initVanta() {
      attempts++;

      if (window.VANTA && window.THREE && vantaRef.current) {
        try {
          vantaEffect.current = window.VANTA.FOG({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            highlightColor: 0xedeae2,
            midtoneColor: 0xcdc8c7,
            lowlightColor: 0xa19fa7,
            baseColor: 0xf2ecec,
            blurFactor: 0.6,
            speed: 1.5,
            zoom: 1.2,
          });

          console.log("✅ Vanta Initialized");

          // ✅ After content loads, set background height ONCE
          setTimeout(() => {
            if (vantaRef.current) {
              vantaRef.current.style.height =
                document.documentElement.scrollHeight + "px";
            }
          }, 300);

          return;
        } catch (err) {
          console.error("❌ Vanta Init Error:", err);
        }
      }

      if (attempts < 15) {
        setTimeout(initVanta, 200);
      }
    }

    initVanta();

    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch {}
      }
    };
  }, []);

  return (
    <>
      {/* ✅ Vanta Background (static height, no lag) */}
      <div ref={vantaRef} className="fixed inset-0 -z-10 w-full" />

      {/* ✅ Foreground Content */}
      <div className="relative z-10 font-sora scroll-smooth overflow-x-hidden">
        <Navbar />
        <Home />
        <Skills />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}