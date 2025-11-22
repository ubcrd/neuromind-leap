import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";

const TestimonialsVariant3 = () => {
  const testimonials = [
    {
      quote: "Mi hijo logró comprender su forma de aprender y mejoró significativamente en el colegio.",
      author: "Gabriela Pérez",
      role: "Madre de familia",
      color: "from-accent-deepgreen to-accent-navy"
    },
    {
      quote: "Entendí que mi falta de foco tenía que ver con mi entorno, no con mi capacidad.",
      author: "Daniela Batista",
      role: "Profesional independiente",
      color: "from-brand-primary to-brand-primary-strong"
    },
    {
      quote: "Después del taller, el equipo empezó a trabajar con más claridad y calma.",
      author: "Karil Taveras",
      role: "AFP Popular",
      color: "from-accent-burgundy to-accent-deepgreen"
    },
  ];

  return (
    <SectionWrapper backgroundColor="dark" padding="lg">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-h2 font-bold text-white mb-4"
        >
          Historias de éxito
        </motion.h2>
        <p className="text-xl text-white/70">
          Resultados que hablan por sí mismos
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="group cursor-pointer"
          >
            <div className={`h-full rounded-tile-lg bg-gradient-to-br ${testimonial.color} p-8 relative overflow-hidden`}>
              <Quote className="absolute top-4 right-4 w-12 h-12 text-white/20" />
              
              <div className="relative space-y-6">
                <p className="text-white text-lg leading-relaxed">
                  {testimonial.quote}
                </p>
                
                <div className="pt-4 border-t border-white/20">
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-white/70">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsVariant3;
