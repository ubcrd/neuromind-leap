import { SectionCarousel } from "@/components/ui/section-carousel";
import MediaAppearancesV2Variant1 from "./media/MediaAppearancesV2Variant1";
import MediaAppearancesV2Variant2 from "./media/MediaAppearancesV2Variant2";
import MediaAppearancesV2Variant3 from "./media/MediaAppearancesV2Variant3";

const MediaAppearancesV2Carousel = () => {
  return (
    <SectionCarousel
      showDots={true}
      showArrows={true}
      arrowPosition="inside"
      autoPlay={false}
    >
      <MediaAppearancesV2Variant1 />
      <MediaAppearancesV2Variant2 />
      <MediaAppearancesV2Variant3 />
    </SectionCarousel>
  );
};

export default MediaAppearancesV2Carousel;
