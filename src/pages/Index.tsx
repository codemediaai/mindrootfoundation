import HeroSection from "@/components/mindroot/HeroSection";
import AboutSection from "@/components/mindroot/AboutSection";
import ProblemSection from "@/components/mindroot/ProblemSection";
import VisionSection from "@/components/mindroot/VisionSection";
import SovereigntySection from "@/components/mindroot/SovereigntySection";
import PrinciplesSection from "@/components/mindroot/PrinciplesSection";
import CharterSection from "@/components/mindroot/CharterSection";
import GallerySection from "@/components/mindroot/GallerySection";
import TimelineSection from "@/components/mindroot/TimelineSection";
import CTASection from "@/components/mindroot/CTASection";
import FooterSection from "@/components/mindroot/FooterSection";
import ThemeToggle from "@/components/mindroot/ThemeToggle";

const Index = () => (
  <main className="bg-background transition-colors duration-500">
    <ThemeToggle />
    <HeroSection />
    <AboutSection />
    <ProblemSection />
    <VisionSection />
    <SovereigntySection />
    <PrinciplesSection />
    <CharterSection />
    <GallerySection />
    <TimelineSection />
    <CTASection />
    <FooterSection />
  </main>
);

export default Index;
