import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { fadeInUp } from "@/lib/motion-presets";

const AboutNeuroSpace = () => {
  return (
    <SectionWrapper backgroundColor="white" padding="lg">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div 
          className="relative order-2 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-square rounded-tile-lg bg-gradient-to-br from-ink-strong to-accent-navy p-2 shadow-elevation-high">
            <div className="w-full h-full rounded-tile bg-ink-strong flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-brand-primary-strong/20 flex items-center justify-center border-4 border-brand-primary-strong">
                  <User className="w-16 h-16 text-brand-primary-strong" strokeWidth={3} />
                </div>
                <div>
                  <p className="text-white text-2xl font-bold">Camila Hasbún</p>
                  <p className="text-brand-primary-strong text-lg font-['Scope_One',Georgia,serif]">
                    Psicóloga, M.S.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="space-y-6 order-1 lg:order-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="orange" className="text-base px-6 py-2">
            <Zap className="w-5 h-5" strokeWidth={3} />
            Sobre el proyecto
          </Badge>
          
          <h2 className="text-h2 md:text-5xl font-bold text-ink-strong leading-tight">
            ¿Qué es The NeuroSpace?
          </h2>
          
          <p className="text-xl text-brand-primary-strong font-['Scope_One',Georgia,serif] leading-relaxed">
            The NeuroSpace es un espacio donde la psicología y la neurociencia se encuentran para ayudarte a entenderte mejor.
          </p>
          
          <p className="text-body-l text-ink-muted leading-relaxed">
            Fundado por Camila Hasbún, psicóloga y divulgadora de neurociencia aplicada, este proyecto une ciencia, educación y acción práctica para promover bienestar mental, claridad y rendimiento humano.
          </p>
          
          <Button size="lg" variant="outline" className="group mt-4">
            Conoce a Camila
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutNeuroSpace;
