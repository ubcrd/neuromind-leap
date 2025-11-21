import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Clock, CheckCircle2, Sparkles } from "lucide-react";

const FeaturedTestV2Variant2 = () => {
  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-br from-brand-primary via-brand-primary-strong to-brand-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white uppercase tracking-wide">
                100% Gratuito • Sin Registro
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Descubre tu perfil de{" "}
              <span className="relative inline-block">
                <span className="relative z-10">NeuroProductividad</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-white/30 -z-0" />
              </span>
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Un test científico de 10 minutos que te ayudará a entender cómo funciona 
              tu cerebro y qué estrategias funcionan mejor para ti.
            </p>
          </motion.div>

          {/* Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <Clock className="w-8 h-8 text-white mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">10 min</div>
              <div className="text-sm text-white/80">Duración del test</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <CheckCircle2 className="w-8 h-8 text-white mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">Científico</div>
              <div className="text-sm text-white/80">Basado en neurociencia</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <Sparkles className="w-8 h-8 text-white mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">Personal</div>
              <div className="text-sm text-white/80">Reporte personalizado</div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6"
          >
            <Button 
              size="xl" 
              className="bg-white text-brand-primary-strong hover:bg-surface-warm border-none shadow-[0_20px_60px_rgba(0,0,0,0.3)] group text-lg px-12 py-8"
            >
              Comenzar el test ahora
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            
            <p className="text-sm text-white/80 mt-6">
              Más de 5,000 personas ya descubrieron su perfil • 100% gratis
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestV2Variant2;
