import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroVariant2 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-ink-strong px-6 py-24">
      <div className="container mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <Badge variant="orange" className="text-sm px-6 py-2">
            <Sparkles className="w-4 h-4" />
            NEUROCIENCIA APLICADA
          </Badge>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Tu cerebro es{" "}
            <span className="text-brand-primary">único</span>
            <br />
            Tu estrategia también
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Coaching basado en neurociencia para maximizar tu potencial 
            y alcanzar resultados extraordinarios
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="xl" className="group shadow-elevation-high">
              Comienza ahora
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="xl" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-ink-strong">
              Ver servicios
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-brand-primary">15+</div>
              <div className="text-white/70">Años experiencia</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-brand-primary">500+</div>
              <div className="text-white/70">Clientes</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-brand-primary">98%</div>
              <div className="text-white/70">Satisfacción</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroVariant2;
