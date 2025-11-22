import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/carousels/HeroCarousel";
import HowCanIHelpCarousel from "@/components/carousels/HowCanIHelpCarousel";
import AboutNeuroSpaceCarousel from "@/components/carousels/AboutNeuroSpaceCarousel";
import MainServicesCarousel from "@/components/carousels/MainServicesCarousel";
import HighlightsGridCarousel from "@/components/carousels/HighlightsGridCarousel";
import FeaturedTestCarousel from "@/components/carousels/FeaturedTestCarousel";
import TestimonialsCarousel from "@/components/carousels/TestimonialsCarousel";
import ResourcesBlogCarousel from "@/components/carousels/ResourcesBlogCarousel";
import MediaAppearancesCarousel from "@/components/carousels/MediaAppearancesCarousel";
import FinalCTACarousel from "@/components/carousels/FinalCTACarousel";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <HowCanIHelpCarousel />
      <AboutNeuroSpaceCarousel />
      <MainServicesCarousel />
      <HighlightsGridCarousel />
      <FeaturedTestCarousel />
      <TestimonialsCarousel />
      <ResourcesBlogCarousel />
      <MediaAppearancesCarousel />
      <FinalCTACarousel />
      <Footer />
    </div>
  );
};

export default Index;
