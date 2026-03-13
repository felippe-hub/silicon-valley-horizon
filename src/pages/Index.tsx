import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
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
