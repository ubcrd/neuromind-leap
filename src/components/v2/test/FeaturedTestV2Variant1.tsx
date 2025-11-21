import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OrganicShape } from "@/components/ui/organic-shape";
import { motion } from "framer-motion";
import { Check, ArrowRight, Clock, Target, Zap } from "lucide-react";

const benefits = [
  { icon: Clock, text: "Complétalo en solo 10 minutos" },
  { icon: Target, text: "Resultados personalizados instantáneos" },
  { icon: Zap, text: "Estrategias adaptadas a tu perfil" },
];

const FeaturedTestV2 = () => {
  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      <OrganicShape 
        variant="blob1" 
        color="green" 
        size="xl" 
        position="top-left"
        opacity={0.1}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <OrganicShape 
                variant="circle" 
                color="green" 
                size="xl"
                position="center"
                opacity={0.15}
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=800&fit=crop"
                    alt="Test de NeuroProductividad"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge variant="solid" className="bg-accent-deepgreen">
                GRATIS
              </Badge>
              
              <h2 className="text-h2 font-bold text-ink-strong">
                Test de NeuroProductividad
              </h2>
              
              <p className="text-body-l text-ink-muted leading-relaxed">
                Descubre tu perfil cognitivo único y recibe estrategias personalizadas 
                para mejorar tu concentración, organización y productividad.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-deepgreen/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-accent-deepgreen" strokeWidth={2.5} />
                    </div>
                    <span className="text-body-m text-ink-strong font-medium">
                      {benefit.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-4 space-y-4">
              <Button 
                size="xl" 
                className="w-full sm:w-auto group bg-accent-deepgreen hover:bg-accent-deepgreen/90"
              >
                Hacer el test ahora
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              
              <p className="text-sm text-ink-muted">
                ✓ Sin registro requerido · ✓ Resultados inmediatos · ✓ 100% confidencial
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestV2;
