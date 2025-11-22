import { SectionCarousel } from "@/components/ui/section-carousel";
import HeroVariant1 from "@/components/variants/hero/HeroVariant1";
import HeroVariant2 from "@/components/variants/hero/HeroVariant2";
import HeroVariant3 from "@/components/variants/hero/HeroVariant3";

const HeroCarousel = () => {
  return (
    <SectionCarousel
      showDots={true}
      showArrows={true}
      arrowPosition="inside"
      autoPlay={false}
    >
      <HeroVariant1 />
      <HeroVariant2 />
      <HeroVariant3 />
    </SectionCarousel>
  );
};

export default HeroCarousel;
