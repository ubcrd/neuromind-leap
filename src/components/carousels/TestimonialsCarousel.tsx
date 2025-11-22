import { SectionCarousel } from "@/components/ui/section-carousel";
import TestimonialsVariant1 from "@/components/variants/testimonials/TestimonialsVariant1";
import TestimonialsVariant2 from "@/components/variants/testimonials/TestimonialsVariant2";
import TestimonialsVariant3 from "@/components/variants/testimonials/TestimonialsVariant3";

const TestimonialsCarousel = () => {
  return (
    <SectionCarousel showDots={true} showArrows={true} arrowPosition="inside" autoPlay={false}>
      <TestimonialsVariant1 />
      <TestimonialsVariant2 />
      <TestimonialsVariant3 />
    </SectionCarousel>
  );
};

export default TestimonialsCarousel;
