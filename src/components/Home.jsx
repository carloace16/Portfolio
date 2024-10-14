import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Marquee from "./FeaturedWorkMarquee";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

const sections = [
  { component: <Hero />, id: "hero" },
  { component: <About />, id: "about" },
  { component: <Marquee />, id: "marquee" },
  { component: <Projects />, id: "projects" },
  { component: <Experience />, id: "experience" },
  { component: <Contact />, id: "contact" },
  { component: <Footer />, id: "footer" },
];

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top on reload
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      {sections.map((section) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 100 }} // Start with an offset
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible position
          viewport={{
            once: false,
            amount: section.id === "projects" ? 0.05 : 0.2, // Trigger Projects section earlier
          }}
          transition={{ duration: 0.8 }} // Control the animation duration
        >
          {section.component}
        </motion.div>
      ))}
    </>
  );
}

export default Home;
