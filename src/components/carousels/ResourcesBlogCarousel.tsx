import { SectionCarousel } from "@/components/ui/section-carousel";
import ResourcesBlogVariant1 from "@/components/variants/resources/ResourcesBlogVariant1";
import ResourcesBlogVariant2 from "@/components/variants/resources/ResourcesBlogVariant2";
import ResourcesBlogVariant3 from "@/components/variants/resources/ResourcesBlogVariant3";

const ResourcesBlogCarousel = () => {
  return (
    <SectionCarousel showDots={true} showArrows={true} arrowPosition="inside" autoPlay={false}>
      <ResourcesBlogVariant1 />
      <ResourcesBlogVariant2 />
      <ResourcesBlogVariant3 />
    </SectionCarousel>
  );
};

export default ResourcesBlogCarousel;
