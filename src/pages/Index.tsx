
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Update page title
    document.title = "JANA.AI - Smart AI Agents for Business Automation";
  }, []);

  return (
    <div className="min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-jana-DEFAULT z-50 origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Benefits />
        <ContactForm />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
