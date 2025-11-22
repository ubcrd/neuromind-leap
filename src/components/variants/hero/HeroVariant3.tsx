import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Brain } from "lucide-react";

const HeroVariant3 = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary-strong to-accent-burgundy">
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-ink-strong/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <Brain className="w-5 h-5" />
              <span className="font-bold">Ciencia + Acción = Resultados</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Desbloquea
              <br />
              tu <span className="text-ink-strong">verdadero</span>
              <br />
              potencial
            </h1>

            <p className="text-2xl text-white/90 max-w-2xl leading-relaxed">
              Transforma tu vida con estrategias neurocientíficas personalizadas. 
              No más luchas, solo soluciones reales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button 
                size="xl" 
                variant="solid-dark"
                className="group shadow-elevation-high text-lg px-8"
              >
                Evaluación gratuita
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroVariant3;
