import Navbar from "@/components/Navbar";
import HeroV2Carousel from "@/components/v2/HeroV2Carousel";
import LogoStrip from "@/components/v2/LogoStrip";
import HowCanIHelpV2Carousel from "@/components/v2/HowCanIHelpV2Carousel";
import AboutNeuroSpaceV2Carousel from "@/components/v2/AboutNeuroSpaceV2Carousel";
import MainServicesV2Carousel from "@/components/v2/MainServicesV2Carousel";
import StatsBar from "@/components/v2/StatsBar";
import HighlightsGridV2Carousel from "@/components/v2/HighlightsGridV2Carousel";
import FeaturedTestV2Carousel from "@/components/v2/FeaturedTestV2Carousel";
import TestimonialsV2Carousel from "@/components/v2/TestimonialsV2Carousel";
import ResourcesBlogV2Carousel from "@/components/v2/ResourcesBlogV2Carousel";
import MediaAppearancesV2Carousel from "@/components/v2/MediaAppearancesV2Carousel";
import PreFooterCTACarousel from "@/components/v2/PreFooterCTACarousel";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const IndexV2 = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroV2Carousel />
      <LogoStrip />
      <HowCanIHelpV2Carousel />
      <AboutNeuroSpaceV2Carousel />
      <MainServicesV2Carousel />
      <StatsBar />
      <HighlightsGridV2Carousel />
      <FeaturedTestV2Carousel />
      <TestimonialsV2Carousel />
      <ResourcesBlogV2Carousel />
      <MediaAppearancesV2Carousel />
      <PreFooterCTACarousel />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default IndexV2;
