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
          
            // ✅ ULTRA-SMOOTH SETTINGS
            highlightColor: 0xf6f2ee,
            midtoneColor: 0xd8d3ce,
            lowlightColor: 0xbcb9b6,
            baseColor: 0xf1efed,
          
            blurFactor: 0.20,   // ✅ was 0.60 — huge reduction
            zoom: 0.70,         // ✅ lower zoom = less GPU work
            speed: 0.80,        // ✅ smoother motion, easier to render
            scale: 1.0,         
            scaleMobile: 1.0,
          
            // ✅ MASSIVE LAG REDUCTION (hidden settings)
            points: 5.0,        // default is higher — lower = smoother
            waveHeight: 10,     // reduces vertical distortion
            waveSpeed: 0.2,     // very smooth gliding
            waveScale: 0.5,     // reduces shader complexity
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