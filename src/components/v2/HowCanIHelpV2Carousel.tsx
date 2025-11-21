import { SectionCarousel } from "@/components/ui/section-carousel";
import HowCanIHelpV2Variant1 from "./help/HowCanIHelpV2Variant1";
import HowCanIHelpV2Variant2 from "./help/HowCanIHelpV2Variant2";
import HowCanIHelpV2Variant3 from "./help/HowCanIHelpV2Variant3";

const HowCanIHelpV2Carousel = () => {
  return (
    <SectionCarousel
      showDots={true}
      showArrows={true}
      arrowPosition="inside"
      autoPlay={false}
    >
      <HowCanIHelpV2Variant1 />
      <HowCanIHelpV2Variant2 />
      <HowCanIHelpV2Variant3 />
    </SectionCarousel>
  );
};

export default HowCanIHelpV2Carousel;
