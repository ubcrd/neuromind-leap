import { SectionCarousel } from "@/components/ui/section-carousel";
import HighlightsGridV2Variant1 from "./highlights/HighlightsGridV2Variant1";
import HighlightsGridV2Variant2 from "./highlights/HighlightsGridV2Variant2";
import HighlightsGridV2Variant3 from "./highlights/HighlightsGridV2Variant3";

const HighlightsGridV2Carousel = () => {
  return (
    <SectionCarousel
      showDots={true}
      showArrows={true}
      arrowPosition="inside"
      autoPlay={false}
    >
      <HighlightsGridV2Variant1 />
      <HighlightsGridV2Variant2 />
      <HighlightsGridV2Variant3 />
    </SectionCarousel>
  );
};

export default HighlightsGridV2Carousel;
