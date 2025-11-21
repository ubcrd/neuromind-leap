import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Brain, Users, Building2, ArrowRight, Sparkles } from "lucide-react";

const HowCanIHelpV2Variant3 = () => {
  const services = [
    {
      icon: Brain,
      number: "01",
      title: "Test Gratuito",
      description: "Descubre tu perfil de neuroproductividad",
      badge: "GRATIS",
      action: "Comenzar test"
    },
    {
      icon: Users,
      number: "02",
      title: "Evaluaciones",
      description: "Diagnóstico completo y profesional",
      action: "Ver más"
    },
    {
      icon: Building2,
      number: "03",
      title: "Coaching",
      description: "Sesiones personalizadas 1 a 1",
      action: "Agendar"
    },
    {
      icon: Sparkles,
      number: "04",
      title: "Empresas",
      description: "Consultoría y talleres corporativos",
      action: "Contactar"
    }
  ];

  return (
    <section className="relative py-24 md:py-36 bg-ink-deep-brown overflow-hidden">
      {/* Minimal geometric background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <circle cx="200" cy="150" r="100" fill="white" />
          <rect x="900" y="500" width="150" height="150" fill="white" />
          <polygon points="600,50 700,200 500,200" fill="white" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-16">
          {/* Minimal Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-brand-primary" />
              <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">
                Servicios
              </span>
              <div className="w-12 h-0.5 bg-brand-primary" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Encuentra tu camino
            </h2>
          </motion.div>

          {/* Vertical List with Numbers */}
          <div className="max-w-4xl mx-auto space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-300">
                  <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
                    {/* Number + Icon */}
                    <div className="flex items-center gap-6">
                      <div className="text-6xl font-bold text-brand-primary/30 group-hover:text-brand-primary transition-colors">
                        {service.number}
                      </div>
                      <div className="w-16 h-16 rounded-xl bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary group-hover:scale-110 transition-all">
                        <service.icon className="w-8 h-8 text-brand-primary group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">
                          {service.title}
                        </h3>
                        {service.badge && (
                          <span className="px-3 py-1 bg-accent-deepgreen text-white text-xs font-bold rounded-full">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-white/70">{service.description}</p>
                    </div>

                    {/* Action */}
                    <Button 
                      variant="outline"
                      className="bg-white/5 text-white border-white/20 hover:bg-brand-primary hover:border-brand-primary group/btn"
                    >
                      {service.action}
                      <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                    </Button>
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

export default HowCanIHelpV2Variant3;
