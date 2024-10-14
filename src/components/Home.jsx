import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom"; // Import useLocation for tracking page changes
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
    // Check if the window is in a new session
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      window.scrollTo(0, 0); // Scroll to the top on reload
    }
  }, [location]);

  return (
    <>
      <Navbar />
      {sections.map((section) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 100 }} // Start with an offset and hidden
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position
          viewport={{ once: false, amount: 0.2 }} // Controls when animation is triggered
          transition={{ duration: 0.8 }} // Animation duration
        >
          {section.component}
        </motion.div>
      ))}
    </>
  );
}

export default Home;
