import { SectionCarousel } from "@/components/ui/section-carousel";
import HighlightsGridVariant1 from "@/components/variants/highlights/HighlightsGridVariant1";
import HighlightsGridVariant2 from "@/components/variants/highlights/HighlightsGridVariant2";
import HighlightsGridVariant3 from "@/components/variants/highlights/HighlightsGridVariant3";

const HighlightsGridCarousel = () => {
  return (
    <SectionCarousel showDots={true} showArrows={true} arrowPosition="inside" autoPlay={false}>
      <HighlightsGridVariant1 />
      <HighlightsGridVariant2 />
      <HighlightsGridVariant3 />
    </SectionCarousel>
  );
};

export default HighlightsGridCarousel;
