import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { User, ArrowRight } from "lucide-react";

const HeroVariant1 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-surface-warm px-6 pt-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-h1 font-bold text-ink-strong leading-tight"
            >
              Transforma tu potencial en resultados
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl text-brand-primary-strong font-['Scope_One',Georgia,serif]"
            >
              Coaching neurocientífico para adultos y empresas
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-body-l text-ink-muted leading-relaxed"
            >
              Descubre cómo funciona tu mente y aprende estrategias prácticas basadas en ciencia 
              para mejorar tu enfoque, organización y bienestar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="xl" className="group">
                Agenda ahora
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="xl" variant="outline">
                Conoce más
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-[8px] border-brand-primary-strong shadow-elevation-high">
              <div className="aspect-[3/4] bg-gradient-to-br from-surface-warm to-white flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full bg-brand-primary-strong/10 flex items-center justify-center">
                    <User className="w-16 h-16 text-brand-primary-strong" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-ink-strong">Camila Hasbún</h3>
                    <p className="text-brand-primary-strong font-['Scope_One',Georgia,serif]">
                      Neuropsicóloga & Coach
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroVariant1;
