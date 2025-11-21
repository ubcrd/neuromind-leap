import { SectionCarousel } from "@/components/ui/section-carousel";
import TestimonialsV2Variant1 from "./testimonials/TestimonialsV2Variant1";
import TestimonialsV2Variant2 from "./testimonials/TestimonialsV2Variant2";
import TestimonialsV2Variant3 from "./testimonials/TestimonialsV2Variant3";

const TestimonialsV2Carousel = () => {
  return (
    <SectionCarousel
      showDots={true}
      showArrows={true}
      arrowPosition="inside"
      autoPlay={false}
    >
      <TestimonialsV2Variant1 />
      <TestimonialsV2Variant2 />
      <TestimonialsV2Variant3 />
    </SectionCarousel>
  );
};

export default TestimonialsV2Carousel;
