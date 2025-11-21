import { SectionCarousel } from "@/components/ui/section-carousel";
import ResourcesBlogV2Variant1 from "./resources/ResourcesBlogV2Variant1";
import ResourcesBlogV2Variant2 from "./resources/ResourcesBlogV2Variant2";
import ResourcesBlogV2Variant3 from "./resources/ResourcesBlogV2Variant3";

const ResourcesBlogV2Carousel = () => {
  return (
    <SectionCarousel
      showDots={true}
      showArrows={true}
      arrowPosition="inside"
      autoPlay={false}
    >
      <ResourcesBlogV2Variant1 />
      <ResourcesBlogV2Variant2 />
      <ResourcesBlogV2Variant3 />
    </SectionCarousel>
  );
};

export default ResourcesBlogV2Carousel;
