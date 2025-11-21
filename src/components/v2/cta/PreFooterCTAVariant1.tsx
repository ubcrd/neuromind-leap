import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Users, Star, TrendingUp } from "lucide-react";
import { StatsCounter } from "@/components/ui/stats-counter";

const PreFooterCTA = () => {
  return (
    <section className="relative py-24 md:py-36 bg-accent-navy overflow-hidden">
      {/* Background with blurred photos */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-navy via-accent-navy/50 to-accent-navy" />
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop"
          alt="Background"
          className="w-full h-full object-cover blur-2xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-h2 md:text-5xl font-bold text-white leading-tight">
              Únete a cientos de personas que transformaron su vida
            </h2>
            
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Da el primer paso hacia una mente más enfocada, organizada y productiva
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-8 md:gap-12 max-w-3xl mx-auto"
          >
            <div className="space-y-2">
              <Users className="w-8 h-8 text-white/60 mx-auto mb-2" />
              <div className="text-4xl md:text-5xl font-bold text-white">
                <StatsCounter value={500} suffix="+" />
              </div>
              <p className="text-sm text-white/80">Clientes satisfechos</p>
            </div>

            <div className="space-y-2">
              <Star className="w-8 h-8 text-white/60 mx-auto mb-2" />
              <div className="text-4xl md:text-5xl font-bold text-white">
                <StatsCounter value={4.9} suffix="/5" format="decimal" />
              </div>
              <p className="text-sm text-white/80">Rating promedio</p>
            </div>

            <div className="space-y-2">
              <TrendingUp className="w-8 h-8 text-white/60 mx-auto mb-2" />
              <div className="text-4xl md:text-5xl font-bold text-white">
                <StatsCounter value={95} suffix="%" />
              </div>
              <p className="text-sm text-white/80">Tasa de éxito</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <Button 
              size="xl" 
              className="group bg-white text-accent-navy hover:bg-white/90"
            >
              Empieza gratis
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="xl" 
              variant="outline"
              className="bg-white/10 text-white hover:bg-white/20 border-white backdrop-blur-sm"
            >
              Habla con Camila
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-sm text-white/60"
          >
            ✓ Primera consulta sin costo · ✓ Sin compromiso · ✓ Resultados garantizados
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA;
