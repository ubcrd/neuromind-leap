import { SectionCarousel } from "@/components/ui/section-carousel";
import PreFooterCTAVariant1 from "./cta/PreFooterCTAVariant1";
import PreFooterCTAVariant2 from "./cta/PreFooterCTAVariant2";
import PreFooterCTAVariant3 from "./cta/PreFooterCTAVariant3";

const PreFooterCTACarousel = () => {
  return (
    <SectionCarousel
      showDots={true}
      showArrows={true}
      arrowPosition="inside"
      autoPlay={false}
    >
      <PreFooterCTAVariant1 />
      <PreFooterCTAVariant2 />
      <PreFooterCTAVariant3 />
    </SectionCarousel>
  );
};

export default PreFooterCTACarousel;
