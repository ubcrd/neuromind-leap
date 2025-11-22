import { SectionCarousel } from "@/components/ui/section-carousel";
import FinalCTAVariant1 from "@/components/variants/cta/FinalCTAVariant1";
import FinalCTAVariant2 from "@/components/variants/cta/FinalCTAVariant2";
import FinalCTAVariant3 from "@/components/variants/cta/FinalCTAVariant3";

const FinalCTACarousel = () => {
  return (
    <SectionCarousel showDots={true} showArrows={true} arrowPosition="inside" autoPlay={false}>
      <FinalCTAVariant1 />
      <FinalCTAVariant2 />
      <FinalCTAVariant3 />
    </SectionCarousel>
  );
};

export default FinalCTACarousel;
