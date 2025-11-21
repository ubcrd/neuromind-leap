import { Card } from "@/components/ui/card";
import { Quote as QuoteComponent } from "@/components/ui/quote";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { staggerContainer, fadeInUp } from "@/lib/motion-presets";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Mi hijo logró comprender su forma de aprender y mejoró significativamente en el colegio. El cambio fue evidente en pocos meses.",
      author: "Gabriela Pérez",
      role: "Madre de familia",
    },
    {
      quote: "Entendí que mi falta de foco tenía que ver con mi entorno, no con mi capacidad. Ahora tengo herramientas concretas para mejorar.",
      author: "Daniela Batista",
      role: "Profesional independiente",
    },
    {
      quote: "Después del taller, el equipo empezó a trabajar con más claridad y calma. Los resultados hablan por sí mismos.",
      author: "Karil Taveras",
      role: "AFP Popular",
    },
  ];

  return (
    <SectionWrapper backgroundColor="cream" padding="lg">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-h2 md:text-5xl font-bold mb-6 text-ink-strong leading-tight">
            Resultados reales de personas reales
          </h2>
          <p className="text-body-l text-ink-muted max-w-2xl mx-auto">
            Descubre cómo The NeuroSpace ha transformado la vida de nuestros clientes.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="p-10 rounded-tile border-[6px] border-brand-primary-strong bg-white shadow-card h-full cursor-pointer hover:shadow-card-hover transition-shadow">
                <QuoteComponent
                  author={testimonial.author}
                  role={testimonial.role}
                  size="lg"
                >
                  {testimonial.quote}
                </QuoteComponent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Testimonials;
