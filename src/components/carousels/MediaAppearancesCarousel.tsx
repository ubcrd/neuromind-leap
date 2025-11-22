import { SectionCarousel } from "@/components/ui/section-carousel";
import MediaAppearancesVariant1 from "@/components/variants/media/MediaAppearancesVariant1";
import MediaAppearancesVariant2 from "@/components/variants/media/MediaAppearancesVariant2";
import MediaAppearancesVariant3 from "@/components/variants/media/MediaAppearancesVariant3";

const MediaAppearancesCarousel = () => {
  return (
    <SectionCarousel showDots={true} showArrows={true} arrowPosition="inside" autoPlay={false}>
      <MediaAppearancesVariant1 />
      <MediaAppearancesVariant2 />
      <MediaAppearancesVariant3 />
    </SectionCarousel>
  );
};

export default MediaAppearancesCarousel;
