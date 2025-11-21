import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OrganicShape } from "@/components/ui/organic-shape";
import { FloatingBadge } from "@/components/ui/floating-badge";
import { motion } from "framer-motion";
import { GraduationCap, Brain, Briefcase, ArrowRight } from "lucide-react";

const AboutNeuroSpaceV2 = () => {
  return (
    <section className="relative py-24 md:py-36 bg-surface-warm overflow-hidden">
      <OrganicShape 
        variant="blob2" 
        color="green" 
        size="xl" 
        position="bottom-left"
        opacity={0.08}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <OrganicShape 
                variant="circle" 
                color="orange" 
                size="lg"
                position="center"
                opacity={0.15}
                className="scale-125"
              />
              
              <div className="relative z-10 w-full aspect-square rounded-full overflow-hidden border-8 border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=800&fit=crop"
                  alt="Camila Belén en conferencia"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 z-20">
                <FloatingBadge 
                  variant="years"
                  text="15+ años"
                  subtext="Experiencia"
                />
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
              <Badge variant="orange">QUIÉN SOY</Badge>
              
              <h2 className="text-h2 font-bold text-ink-strong">
                Neuropsicóloga especializada en TDAH y productividad
              </h2>
              
              <p className="text-body-l text-ink-muted leading-relaxed">
                Soy Camila Belén, neuropsicóloga clínica con más de 15 años de experiencia 
                ayudando a personas con TDAH a transformar sus desafíos en fortalezas. 
                Combino rigurosidad científica con herramientas prácticas y accesibles.
              </p>

              <p className="text-body-l text-ink-muted leading-relaxed">
                Mi enfoque se basa en la neurociencia aplicada: entender cómo funciona tu 
                cerebro para desarrollar estrategias personalizadas que realmente funcionen 
                en tu día a día.
              </p>
            </div>

            {/* Mini Stats Inline */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-start gap-2">
                <div className="p-3 bg-brand-primary/10 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-strong">Neuropsicóloga</p>
                  <p className="text-xs text-ink-muted">Clínica</p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="p-3 bg-brand-primary/10 rounded-xl">
                  <Brain className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-strong">Especialista</p>
                  <p className="text-xs text-ink-muted">TDAH</p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="p-3 bg-brand-primary/10 rounded-xl">
                  <Briefcase className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-strong">Coach</p>
                  <p className="text-xs text-ink-muted">Organizacional</p>
                </div>
              </div>
            </div>

            <Button size="lg" variant="outline" className="group">
              Conoce mi trayectoria
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutNeuroSpaceV2;
