import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowCanIHelp from "@/components/HowCanIHelp";
import AboutNeuroSpace from "@/components/AboutNeuroSpace";
import MainServices from "@/components/MainServices";
import HighlightsGrid from "@/components/HighlightsGrid";
import FeaturedTest from "@/components/FeaturedTest";
import Testimonials from "@/components/Testimonials";
import ResourcesBlog from "@/components/ResourcesBlog";
import MediaAppearances from "@/components/MediaAppearances";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowCanIHelp />
      <AboutNeuroSpace />
      <MainServices />
      <HighlightsGrid />
      <FeaturedTest />
      <Testimonials />
      <ResourcesBlog />
      <MediaAppearances />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
