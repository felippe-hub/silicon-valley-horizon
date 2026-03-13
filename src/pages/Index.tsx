import { motion, useScroll } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import MarqueeSection from "@/components/landing/MarqueeSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import VideoSection from "@/components/landing/VideoSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ResultsSection from "@/components/landing/ResultsSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import ForWhoSection from "@/components/landing/ForWhoSection";
import AboutSection from "@/components/landing/AboutSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen overflow-x-hidden bg-lets-black">
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Noise texture overlay */}
      <div className="noise-overlay hidden md:block">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="nf">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#nf)" />
        </svg>
      </div>

      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ProblemSection />
      <SolutionSection />
      <VideoSection />
      <ProcessSection />
      <ServicesSection />
      <ResultsSection />
      <WhyUsSection />
      <ForWhoSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;