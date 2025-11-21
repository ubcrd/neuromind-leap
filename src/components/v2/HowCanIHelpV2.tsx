import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Brain, Users, ArrowRight, Sparkles } from "lucide-react";
import { IconWrapper } from "@/components/ui/icon-wrapper";

const services = [
  {
    icon: Brain,
    title: "Evaluaciones TDAH",
    description: "Diagnóstico completo con herramientas neuropsicológicas validadas científicamente.",
    cta: "Agendar evaluación",
    variant: "normal" as const,
  },
  {
    icon: Sparkles,
    title: "Test de NeuroProductividad",
    badge: "GRATIS",
    description: "Descubre tu perfil cognitivo y obtén estrategias personalizadas en 10 minutos.",
    cta: "Hacer test ahora",
    variant: "featured" as const,
  },
  {
    icon: Users,
    title: "Talleres Empresariales",
    description: "Capacitaciones sobre neurodiversidad, productividad y bienestar para equipos.",
    cta: "Ver talleres",
    variant: "normal" as const,
  },
];

const HowCanIHelpV2 = () => {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="orange" className="mb-2">CÓMO PUEDO AYUDARTE</Badge>
          <h2 className="text-h2 font-bold text-ink-strong">
            Soluciones adaptadas a tus necesidades
          </h2>
          <p className="text-body-l text-ink-muted max-w-2xl mx-auto">
            Desde evaluaciones completas hasta herramientas gratuitas para comenzar tu camino
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const isFeatured = service.variant === "featured";
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`
                  relative rounded-3xl p-10 border transition-all duration-300
                  ${isFeatured 
                    ? 'bg-gradient-to-br from-brand-primary via-brand-primary-strong to-brand-primary text-white border-transparent shadow-[0_20px_60px_-15px_rgba(235,131,35,0.4)] md:scale-105' 
                    : 'bg-white border-ink-muted/15 hover:border-brand-primary/40 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]'
                  }
                `}
              >
                {service.badge && (
                  <Badge 
                    variant="dark" 
                    className="absolute top-4 right-4 bg-accent-deepgreen border-accent-deepgreen"
                  >
                    {service.badge}
                  </Badge>
                )}

                <div className="space-y-6">
                  <div className={`
                    inline-flex p-4 rounded-2xl
                    ${isFeatured ? 'bg-white/20' : 'bg-brand-primary/10'}
                  `}>
                    <IconWrapper 
                      icon={service.icon}
                      size="xl"
                      color={isFeatured ? "white" : "orange"}
                      strokeWidth={2.5}
                    />
                  </div>

                  <div>
                    <h3 className={`text-h4 font-bold mb-3 ${isFeatured ? 'text-white' : 'text-ink-strong'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-body-m ${isFeatured ? 'text-white/90' : 'text-ink-muted'}`}>
                      {service.description}
                    </p>
                  </div>

                  <Button 
                    size="lg" 
                    variant="outline"
                    className={`w-full group ${isFeatured ? 'bg-white text-brand-primary-strong hover:bg-white/90 border-white' : ''}`}
                  >
                    {service.cta}
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowCanIHelpV2;
