import { SectionCarousel } from "@/components/ui/section-carousel";
import HowCanIHelpVariant1 from "@/components/variants/help/HowCanIHelpVariant1";
import HowCanIHelpVariant2 from "@/components/variants/help/HowCanIHelpVariant2";
import HowCanIHelpVariant3 from "@/components/variants/help/HowCanIHelpVariant3";

const HowCanIHelpCarousel = () => {
  return (
    <SectionCarousel showDots={true} showArrows={true} arrowPosition="inside" autoPlay={false}>
      <HowCanIHelpVariant1 />
      <HowCanIHelpVariant2 />
      <HowCanIHelpVariant3 />
    </SectionCarousel>
  );
};

export default HowCanIHelpCarousel;
