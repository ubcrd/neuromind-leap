import { SectionCarousel } from "@/components/ui/section-carousel";
import FeaturedTestV2Variant1 from "./test/FeaturedTestV2Variant1";
import FeaturedTestV2Variant2 from "./test/FeaturedTestV2Variant2";
import FeaturedTestV2Variant3 from "./test/FeaturedTestV2Variant3";

const FeaturedTestV2Carousel = () => {
  return (
    <SectionCarousel
      showDots={true}
      showArrows={true}
      arrowPosition="inside"
      autoPlay={false}
    >
      <FeaturedTestV2Variant1 />
      <FeaturedTestV2Variant2 />
      <FeaturedTestV2Variant3 />
    </SectionCarousel>
  );
};

export default FeaturedTestV2Carousel;
