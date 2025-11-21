import { SectionCarousel } from "@/components/ui/section-carousel";
import HeroV2Variant1 from "./heroes/HeroV2Variant1";
import HeroV2Variant2 from "./heroes/HeroV2Variant2";
import HeroV2Variant3 from "./heroes/HeroV2Variant3";
import HeroV2Variant4 from "./heroes/HeroV2Variant4";

const HeroV2Carousel = () => {
  return (
    <SectionCarousel
      showDots={true}
      showArrows={true}
      arrowPosition="inside"
      autoPlay={false}
    >
      <HeroV2Variant1 />
      <HeroV2Variant2 />
      <HeroV2Variant3 />
      <HeroV2Variant4 />
    </SectionCarousel>
  );
};

export default HeroV2Carousel;
