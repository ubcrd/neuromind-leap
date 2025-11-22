import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";

const TestimonialsVariant2 = () => {
  const testimonials = [
    {
      quote: "Mi hijo logró comprender su forma de aprender y mejoró significativamente en el colegio. El cambio fue evidente en pocos meses.",
      author: "Gabriela Pérez",
      role: "Madre de familia",
      rating: 5
    },
    {
      quote: "Entendí que mi falta de foco tenía que ver con mi entorno, no con mi capacidad. Ahora tengo herramientas concretas para mejorar.",
      author: "Daniela Batista",
      role: "Profesional independiente",
      rating: 5
    },
    {
      quote: "Después del taller, el equipo empezó a trabajar con más claridad y calma. Los resultados hablan por sí mismos.",
      author: "Karil Taveras",
      role: "AFP Popular",
      rating: 5
    },
  ];

  return (
    <SectionWrapper backgroundColor="white" padding="lg">
      <div className="text-center mb-16">
        <Badge variant="orange" className="mb-6">TESTIMONIOS</Badge>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-h2 font-bold text-ink-strong mb-4"
        >
          Lo que dicen mis clientes
        </motion.h2>
        <p className="text-xl text-ink-muted">Transformaciones reales, historias auténticas</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="flex flex-col md:flex-row gap-6 p-8 rounded-tile-lg bg-surface-warm hover:shadow-card transition-all duration-300"
          >
            <div className="flex-1 space-y-4">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-primary-strong text-brand-primary-strong" />
                ))}
              </div>
              <p className="text-lg text-ink-strong leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
            <div className="flex flex-col justify-center md:text-right space-y-1 md:min-w-[200px]">
              <p className="font-bold text-ink-strong">{testimonial.author}</p>
              <p className="text-sm text-ink-muted">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsVariant2;
