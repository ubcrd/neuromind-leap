import { SectionCarousel } from "@/components/ui/section-carousel";
import FeaturedTestVariant1 from "@/components/variants/test/FeaturedTestVariant1";
import FeaturedTestVariant2 from "@/components/variants/test/FeaturedTestVariant2";
import FeaturedTestVariant3 from "@/components/variants/test/FeaturedTestVariant3";

const FeaturedTestCarousel = () => {
  return (
    <SectionCarousel showDots={true} showArrows={true} arrowPosition="inside" autoPlay={false}>
      <FeaturedTestVariant1 />
      <FeaturedTestVariant2 />
      <FeaturedTestVariant3 />
    </SectionCarousel>
  );
};

export default FeaturedTestCarousel;
