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
  return (
    <div className="min-h-screen overflow-x-hidden bg-[--bg]">
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
