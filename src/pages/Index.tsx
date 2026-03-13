import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
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
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#0A0A0A" }}>
      <Navbar />
      <HeroSection />
      <ProblemSection />      {/* LIGHT */}
      <VideoSection />        {/* DARK — video + solução */}
      <ProcessSection />      {/* LIGHT */}
      <ServicesSection />     {/* DARK */}
      <ResultsSection />      {/* LIGHT */}
      <WhyUsSection />        {/* DARK */}
      <ForWhoSection />       {/* LIGHT */}
      <AboutSection />        {/* DARK — layered image + glass */}
      <CTASection />          {/* DARK */}
      <Footer />
    </div>
  );
};

export default Index;
