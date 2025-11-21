import { SectionCarousel } from "@/components/ui/section-carousel";
import MainServicesV2Variant1 from "./services/MainServicesV2Variant1";
import MainServicesV2Variant2 from "./services/MainServicesV2Variant2";
import MainServicesV2Variant3 from "./services/MainServicesV2Variant3";

const MainServicesV2Carousel = () => {
  return (
    <SectionCarousel
      showDots={true}
      showArrows={true}
      arrowPosition="inside"
      autoPlay={false}
    >
      <MainServicesV2Variant1 />
      <MainServicesV2Variant2 />
      <MainServicesV2Variant3 />
    </SectionCarousel>
  );
};

export default MainServicesV2Carousel;
