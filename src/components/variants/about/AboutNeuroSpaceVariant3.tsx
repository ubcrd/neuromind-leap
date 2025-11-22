import { Button } from "@/components/ui/button";
import { ArrowRight, User } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const AboutNeuroSpaceVariant3 = () => {
  return (
    <SectionWrapper backgroundColor="orange" padding="lg">
      <div className="grid lg:grid-cols-[1fr,1.2fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-block">
            <div className="text-sm font-bold tracking-widest text-ink-strong mb-4">
              SOBRE THE NEUROSPACE
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Donde la ciencia encuentra la acción
          </h2>

          <p className="text-xl text-ink-strong leading-relaxed">
            The NeuroSpace es más que un servicio de coaching. Es un espacio donde 
            la neurociencia aplicada se convierte en estrategias reales para tu vida.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-white mt-2" />
              <p className="text-ink-strong">
                Fundado por Camila Hasbún, psicóloga especializada en neurociencia
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-white mt-2" />
              <p className="text-ink-strong">
                15+ años de experiencia transformando vidas
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-white mt-2" />
              <p className="text-ink-strong">
                Metodología respaldada por evidencia científica
              </p>
            </div>
          </div>

          <Button size="lg" variant="solid-dark" className="group mt-6">
            Descubre mi historia
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-tile-lg overflow-hidden shadow-elevation-high">
            <div className="aspect-[4/5] bg-gradient-to-br from-ink-strong to-accent-navy flex items-center justify-center p-12">
              <div className="text-center space-y-8">
                <div className="w-48 h-48 mx-auto rounded-full bg-brand-primary-strong/30 flex items-center justify-center border-8 border-white/20">
                  <User className="w-24 h-24 text-white" strokeWidth={2} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-white">Camila Hasbún</h3>
                  <p className="text-xl text-brand-primary-strong font-['Scope_One',Georgia,serif]">
                    Psicóloga, M.S.
                  </p>
                  <p className="text-white/70">Neurociencia Aplicada</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutNeuroSpaceVariant3;
