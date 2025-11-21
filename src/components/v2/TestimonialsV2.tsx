import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "María González",
    role: "Diseñadora UX",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    quote: "Trabajar con Camila transformó completamente mi manera de enfocar mi TDAH. Pasé de sentirme abrumada constantemente a tener sistemas que realmente funcionan para mi cerebro.",
    rating: 5,
    badge: "Cliente por 2 años",
    background: "orange" as const,
  },
  {
    name: "Carlos Ramírez",
    role: "Gerente de Proyectos",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    quote: "Las estrategias de productividad que aprendí en el coaching me ayudaron a duplicar mi eficiencia sin sacrificar mi bienestar. Un cambio de vida real.",
    rating: 5,
    badge: "Coaching Ejecutivo",
    background: "white" as const,
  },
  {
    name: "Ana Martínez",
    role: "Emprendedora",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    quote: "El test de neuroproductividad me abrió los ojos sobre cómo funciona mi mente. Ahora puedo aprovechar mis fortalezas en lugar de luchar contra ellas.",
    rating: 5,
    badge: "Test + Mentoría",
    background: "cream" as const,
  },
];

const backgroundStyles = {
  orange: "bg-gradient-to-br from-brand-primary via-brand-primary-strong to-brand-primary text-white",
  white: "bg-white border-2 border-brand-primary/20 text-ink-strong",
  cream: "bg-surface-warm border-2 border-ink-muted/10 text-ink-strong",
};

const TestimonialsV2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="orange">TESTIMONIOS</Badge>
          <h2 className="text-h2 font-bold text-ink-strong">
            Historias de transformación
          </h2>
          <p className="text-body-l text-ink-muted max-w-2xl mx-auto">
            Personas reales que transformaron su relación con su TDAH y productividad
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className={`
                rounded-3xl p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]
                ${backgroundStyles[current.background]}
              `}
            >
              <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
                {/* Avatar and Info */}
                <div className="flex flex-col items-center md:items-start gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                    <img 
                      src={current.avatar}
                      alt={current.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h3 className={`font-bold text-lg ${current.background === 'orange' ? 'text-white' : 'text-ink-strong'}`}>
                      {current.name}
                    </h3>
                    <p className={`text-sm ${current.background === 'orange' ? 'text-white/80' : 'text-ink-muted'}`}>
                      {current.role}
                    </p>
                  </div>

                  <Badge 
                    variant={current.background === 'orange' ? 'dark' : 'orange'}
                    className="text-xs"
                  >
                    {current.badge}
                  </Badge>
                </div>

                {/* Quote Content */}
                <div className="space-y-6">
                  <Quote className={`w-12 h-12 ${current.background === 'orange' ? 'text-white/20' : 'text-brand-primary/20'}`} />
                  
                  <p className={`text-lg md:text-xl leading-relaxed ${current.background === 'orange' ? 'text-white' : 'text-ink-strong'}`}>
                    "{current.quote}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${current.background === 'orange' ? 'text-white fill-white' : 'text-brand-primary fill-brand-primary'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${index === currentIndex 
                      ? 'bg-brand-primary w-8' 
                      : 'bg-ink-muted/30 hover:bg-ink-muted/50'
                    }
                  `}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsV2;
