import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsV2Variant2 = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Directora de Marketing",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      quote: "Las estrategias de Camila transformaron completamente mi forma de trabajar. Ahora soy más productiva y feliz.",
      rating: 5,
      years: "2 años como cliente"
    },
    {
      name: "Carlos Rodríguez",
      role: "Emprendedor Tech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      quote: "Finalmente entiendo cómo funciona mi cerebro. El coaching con Camila me dio las herramientas que necesitaba.",
      rating: 5,
      years: "1 año como cliente"
    },
    {
      name: "Ana Paula Silva",
      role: "Gerente de Proyectos",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      quote: "Profesional, empática y con resultados comprobados. Recomiendo sus servicios sin dudarlo.",
      rating: 5,
      years: "3 años como cliente"
    }
  ];

  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <Badge variant="orange" className="text-xs font-semibold">
              TESTIMONIOS
            </Badge>
            <h2 className="text-h2 font-bold text-ink-strong leading-tight">
              Lo que dicen mis{" "}
              <span className="text-brand-primary-strong">clientes</span>
            </h2>
          </motion.div>

          {/* Grid of testimonials */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-gradient-to-br from-surface-warm to-white rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-ink-muted/10 flex flex-col"
              >
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-brand-primary/30 mb-6" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-primary text-brand-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-ink-strong text-lg leading-relaxed mb-6 flex-1">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-ink-muted/10">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-primary flex-shrink-0">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-ink-strong">{testimonial.name}</div>
                    <div className="text-sm text-ink-muted">{testimonial.role}</div>
                    <div className="text-xs text-brand-primary font-semibold mt-1">
                      {testimonial.years}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsV2Variant2;
