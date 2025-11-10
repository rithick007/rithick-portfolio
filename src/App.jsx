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
    let resizeListenerAdded = false;

    function syncVantaHeight() {
      if (!vantaRef.current || !vantaEffect.current) return;

      const fullHeight = document.documentElement.scrollHeight;
      vantaRef.current.style.height = `${fullHeight}px`;

      // prevent unnecessary constant resizing
      if (vantaEffect.current.resize) {
        vantaEffect.current.resize();
      }
    }

    function tryInitVanta() {
      attempts++;

      if (window.VANTA && window.THREE && vantaRef.current) {
        console.log("✅ Vanta Ready — Initializing");

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

          console.log("✅ Vanta Initialized");

          // ✅ Fix white gap at bottom
          syncVantaHeight();

          // ✅ Ensure canvas updates on every scroll + resize
          if (!resizeListenerAdded) {
            resizeListenerAdded = true;

            window.addEventListener("scroll", syncVantaHeight, { passive: true });
            window.addEventListener("resize", syncVantaHeight);
            window.addEventListener("orientationchange", syncVantaHeight);
          }

          return;
        } catch (err) {
          console.error("❌ Vanta Init Error:", err);
        }
      }

      if (attempts < 20) {
        setTimeout(tryInitVanta, 300);
      } else {
        console.warn("⚠️ Vanta failed after maximum retries");
      }
    }

    tryInitVanta();

    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
          console.log("✅ Vanta Destroyed");
        } catch (err) {
          console.warn("⚠️ Destroy Error:", err);
        }
      }

      window.removeEventListener("scroll", syncVantaHeight);
      window.removeEventListener("resize", syncVantaHeight);
      window.removeEventListener("orientationchange", syncVantaHeight);
    };
  }, []);

  return (
    <>
      {/* ✅ Vanta Background */}
      <div ref={vantaRef} className="fixed inset-0 -z-10" />

      {/* ✅ Main Content */}
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