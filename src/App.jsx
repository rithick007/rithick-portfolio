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

    function tryInitVanta() {
      attempts++;

      // Check if scripts are fully loaded
      if (window.VANTA && window.THREE && vantaRef.current) {
        console.log("✅ Vanta requirements ready. Initializing...");

        try {
          vantaEffect.current = window.VANTA.FOG({
            el: vantaRef.current,
            THREE: window.THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0xedeae2,
            midtoneColor: 0xcdc8c7,
            lowlightColor: 0xa19fa7,
            baseColor: 0xf2ecec,
            blurFactor: 0.6,
            speed: 1.5,
            zoom: 1.2,
          });

          console.log("✅ Vanta FOG Initialized Successfully");
          return;
        } catch (err) {
          console.error("❌ Vanta Init Error:", err);
        }
      }

      // If still not loaded, retry
      if (attempts < 20) {
        setTimeout(tryInitVanta, 300); // retry every 300ms
      } else {
        console.warn("⚠️ Vanta initialization failed after max attempts");
      }
    }

    tryInitVanta();

    // Cleanup
    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
          console.log("✅ Vanta destroyed on unmount");
        } catch (err) {
          console.warn("⚠️ Vanta destroy error:", err);
        }
      }
    };
  }, []);

  return (
    <>
      {/* ✅ Vanta Background */}
      <div ref={vantaRef} className="fixed inset-0 -z-10" />

      {/* ✅ Site Content */}
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
