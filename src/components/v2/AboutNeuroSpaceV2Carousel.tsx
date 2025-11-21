import { SectionCarousel } from "@/components/ui/section-carousel";
import AboutNeuroSpaceV2Variant1 from "./about/AboutNeuroSpaceV2Variant1";
import AboutNeuroSpaceV2Variant2 from "./about/AboutNeuroSpaceV2Variant2";
import AboutNeuroSpaceV2Variant3 from "./about/AboutNeuroSpaceV2Variant3";

const AboutNeuroSpaceV2Carousel = () => {
  return (
    <SectionCarousel
      showDots={true}
      showArrows={true}
      arrowPosition="inside"
      autoPlay={false}
    >
      <AboutNeuroSpaceV2Variant1 />
      <AboutNeuroSpaceV2Variant2 />
      <AboutNeuroSpaceV2Variant3 />
    </SectionCarousel>
  );
};

export default AboutNeuroSpaceV2Carousel;
