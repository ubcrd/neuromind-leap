import { SectionCarousel } from "@/components/ui/section-carousel";
import AboutNeuroSpaceVariant1 from "@/components/variants/about/AboutNeuroSpaceVariant1";
import AboutNeuroSpaceVariant2 from "@/components/variants/about/AboutNeuroSpaceVariant2";
import AboutNeuroSpaceVariant3 from "@/components/variants/about/AboutNeuroSpaceVariant3";

const AboutNeuroSpaceCarousel = () => {
  return (
    <SectionCarousel showDots={true} showArrows={true} arrowPosition="inside" autoPlay={false}>
      <AboutNeuroSpaceVariant1 />
      <AboutNeuroSpaceVariant2 />
      <AboutNeuroSpaceVariant3 />
    </SectionCarousel>
  );
};

export default AboutNeuroSpaceCarousel;
