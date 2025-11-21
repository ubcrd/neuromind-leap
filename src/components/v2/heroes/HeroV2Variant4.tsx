import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star, Quote } from "lucide-react";

const HeroV2Variant4 = () => {
  const miniTestimonials = [
    { name: "María G.", text: "Cambió mi vida completamente", rating: 5 },
    { name: "Carlos R.", text: "Finalmente entiendo mi TDAH", rating: 5 },
    { name: "Ana P.", text: "Las mejores estrategias", rating: 5 },
    { name: "Luis M.", text: "Profesional y empática", rating: 5 },
    { name: "Sofia T.", text: "Resultados desde la primera sesión", rating: 5 },
    { name: "Diego F.", text: "Recomendado 100%", rating: 5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-surface-warm via-white to-surface-warm overflow-hidden">
      {/* Blurred testimonials background grid */}
      <div className="absolute inset-0 p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 opacity-20 blur-sm">
        {miniTestimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white border border-ink-muted/20 rounded-2xl p-4 space-y-2"
          >
            <div className="flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-brand-primary text-brand-primary" />
              ))}
            </div>
            <p className="text-xs text-ink-muted">{testimonial.text}</p>
            <p className="text-xs font-semibold text-ink-strong">{testimonial.name}</p>
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 py-32 md:py-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Central Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent-deepgreen text-white text-sm font-bold">
              <Star className="w-4 h-4 fill-white" />
              <span>4.9/5 basado en 500+ clientes</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink-strong leading-tight">
              Más de{" "}
              <span className="text-brand-primary-strong">500 personas</span>{" "}
              ya transformaron su vida
            </h1>
            
            <p className="text-xl md:text-2xl text-ink-muted max-w-2xl mx-auto leading-relaxed">
              Únete a la comunidad de profesionales y personas con TDAH que lograron 
              aumentar su productividad y bienestar emocional
            </p>
          </motion.div>

          {/* Featured Quote */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-ink-muted/10">
              <Quote className="w-12 h-12 text-brand-primary mb-6 opacity-50" />
              
              <blockquote className="text-2xl md:text-3xl font-medium text-ink-strong leading-relaxed mb-8">
                "Después de años luchando con mi TDAH, las estrategias de Camila me 
                ayudaron a recuperar el control. Ahora soy más productiva y feliz."
              </blockquote>
              
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-primary">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                    alt="Cliente testimonial"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-ink-strong">María González</div>
                  <div className="text-sm text-ink-muted">Directora de Marketing • Cliente por 2 años</div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-primary text-brand-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-6"
          >
            <Button 
              size="xl" 
              className="text-lg px-10 py-7 group shadow-[0_20px_60px_rgba(235,131,35,0.3)]"
            >
              Únete a la comunidad
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            
            <p className="text-sm text-ink-muted mt-4">
              Empieza con una evaluación gratuita • Sin compromiso
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2Variant4;
