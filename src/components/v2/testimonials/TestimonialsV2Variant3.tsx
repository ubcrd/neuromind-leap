import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsV2Variant3 = () => {
  const testimonial = {
    name: "María González",
    role: "Directora de Marketing",
    company: "Tech Startup",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    quote: "Después de años luchando con mi TDAH, las estrategias de Camila me ayudaron a recuperar el control. Ahora soy más productiva, feliz, y finalmente entiendo cómo funciona mi cerebro. El cambio ha sido absolutamente transformador.",
    rating: 5,
    years: "2 años como cliente",
    results: [
      { metric: "+40%", label: "Productividad" },
      { metric: "-60%", label: "Estrés" },
      { metric: "100%", label: "Satisfacción" }
    ]
  };

  const miniTestimonials = [
    { name: "Carlos R.", text: "Excelente profesional", rating: 5 },
    { name: "Ana P.", text: "Cambió mi vida", rating: 5 },
    { name: "Luis M.", text: "Altamente recomendado", rating: 5 },
    { name: "Sofia T.", text: "Resultados increíbles", rating: 5 }
  ];

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-br from-surface-warm via-white to-surface-warm overflow-hidden">
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
              TESTIMONIO DESTACADO
            </Badge>
            <h2 className="text-h2 font-bold text-ink-strong leading-tight">
              Historias de{" "}
              <span className="text-brand-primary-strong">transformación real</span>
            </h2>
          </motion.div>

          {/* Featured Testimonial - Hero Style */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid lg:grid-cols-[300px_1fr] gap-8 bg-white rounded-3xl p-10 md:p-14 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.2)] border border-ink-muted/10">
              {/* Left - Author Info */}
              <div className="flex flex-col items-center text-center lg:text-left lg:items-start space-y-6">
                <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-brand-primary shadow-lg">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-ink-strong">{testimonial.name}</h3>
                  <p className="text-sm text-ink-muted">{testimonial.role}</p>
                  <p className="text-xs text-brand-primary font-semibold">{testimonial.company}</p>
                  
                  {/* Rating */}
                  <div className="flex gap-1 justify-center lg:justify-start pt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-primary text-brand-primary" />
                    ))}
                  </div>
                  
                  <div className="text-xs text-ink-muted pt-2 border-t border-ink-muted/10">
                    {testimonial.years}
                  </div>
                </div>
              </div>

              {/* Right - Quote & Results */}
              <div className="space-y-8">
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-16 h-16 text-brand-primary/20" />
                  <blockquote className="text-2xl md:text-3xl font-medium text-ink-strong leading-relaxed relative z-10">
                    "{testimonial.quote}"
                  </blockquote>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-ink-muted/10">
                  {testimonial.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-brand-primary-strong mb-2">
                        {result.metric}
                      </div>
                      <div className="text-sm text-ink-muted uppercase tracking-wide">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mini Testimonials Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {miniTestimonials.map((mini, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-brand-primary/10 to-brand-primary/5 rounded-2xl px-6 py-4 border border-brand-primary/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-0.5">
                      {[...Array(mini.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-brand-primary text-brand-primary" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-ink-strong">
                      {mini.name}
                    </span>
                    <span className="text-xs text-ink-muted">
                      • {mini.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsV2Variant3;
