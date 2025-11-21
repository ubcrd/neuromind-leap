import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OrganicShape } from "@/components/ui/organic-shape";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Users, Building2 } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/motion-presets";

const HowCanIHelpV2Variant1 = () => {
  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-br from-surface-warm via-white to-surface-warm overflow-hidden">
      <OrganicShape 
        variant="blob1" 
        color="orange" 
        size="lg" 
        position="bottom-left"
        opacity={0.06}
      />

      <div className="container mx-auto px-6">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="orange" className="text-xs font-semibold">
              ¿CÓMO PUEDO AYUDARTE?
            </Badge>
            <h2 className="text-h2 font-bold text-ink-strong leading-tight">
              Encuentra la solución perfecta para{" "}
              <span className="text-brand-primary-strong">tu camino</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Featured Card - Test Gratuito */}
            <div className="md:col-span-2 bg-brand-primary rounded-3xl p-10 shadow-[0_20px_60px_-15px_rgba(235,131,35,0.4)] relative overflow-hidden group cursor-pointer hover:shadow-[0_24px_70px_-15px_rgba(235,131,35,0.5)] transition-all duration-300">
              <div className="absolute top-4 right-4">
                <div className="px-4 py-2 bg-accent-deepgreen text-white text-xs font-bold rounded-full shadow-[0_8px_30px_rgba(0,40,34,0.4)]">
                  GRATIS
                </div>
              </div>
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Test de NeuroProductividad
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    Descubre tu perfil de productividad y recibe recomendaciones 
                    personalizadas basadas en neurociencia. Sin costo, sin compromiso.
                  </p>
                </div>

                <Button 
                  size="lg"
                  className="bg-white text-brand-primary-strong hover:bg-surface-warm border-none self-start group"
                >
                  Hacer el test ahora
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Card 2 - Evaluaciones */}
            <div className="bg-white border-2 border-ink-muted/10 rounded-3xl p-10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] hover:border-brand-primary/30 transition-all duration-300 cursor-pointer group">
              <div className="flex flex-col gap-6 h-full">
                <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-brand-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-ink-strong mb-3">
                    Evaluaciones TDAH
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    Evaluación neuropsicológica completa con informe detallado y plan personalizado.
                  </p>
                </div>

                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full group-hover:bg-brand-primary/5 group-hover:border-brand-primary/50"
                >
                  Más información
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Card 3 - Consultoría */}
            <div className="bg-white border-2 border-ink-muted/10 rounded-3xl p-10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] hover:border-brand-primary/30 transition-all duration-300 cursor-pointer group">
              <div className="flex flex-col gap-6 h-full">
                <div className="w-16 h-16 rounded-2xl bg-accent-navy/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-accent-navy" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-ink-strong mb-3">
                    Consultoría Empresarial
                  </h3>
                  <p className="text-ink-muted text-sm leading-relaxed">
                    Programas de inclusión y productividad para equipos con neurodiversidad.
                  </p>
                </div>

                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full group-hover:bg-brand-primary/5 group-hover:border-brand-primary/50"
                >
                  Contactar
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Card 4 - Coaching */}
            <div className="md:col-span-2 bg-accent-deepgreen rounded-3xl p-10 shadow-[0_12px_40px_-12px_rgba(0,40,34,0.3)] hover:shadow-[0_20px_60px_-15px_rgba(0,40,34,0.4)] transition-all duration-300 cursor-pointer">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Coaching Individual
                  </h3>
                  <p className="text-white/90 text-base">
                    Sesiones personalizadas para desarrollar estrategias que funcionen para ti.
                  </p>
                </div>

                <Button 
                  size="lg"
                  className="bg-white text-accent-deepgreen hover:bg-surface-warm border-none group"
                >
                  Ver planes
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowCanIHelpV2Variant1;
