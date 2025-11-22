import { SectionCarousel } from "@/components/ui/section-carousel";
import MainServicesVariant1 from "@/components/variants/services/MainServicesVariant1";
import MainServicesVariant2 from "@/components/variants/services/MainServicesVariant2";
import MainServicesVariant3 from "@/components/variants/services/MainServicesVariant3";

const MainServicesCarousel = () => {
  return (
    <SectionCarousel showDots={true} showArrows={true} arrowPosition="inside" autoPlay={false}>
      <MainServicesVariant1 />
      <MainServicesVariant2 />
      <MainServicesVariant3 />
    </SectionCarousel>
  );
};

export default MainServicesCarousel;
