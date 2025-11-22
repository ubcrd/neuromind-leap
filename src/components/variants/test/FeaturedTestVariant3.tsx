import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";

const FeaturedTestVariant3 = () => {
  return (
    <SectionWrapper backgroundColor="cream" padding="lg">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary-strong to-accent-burgundy p-12 md:p-16">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-ink-strong/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white font-bold"
          >
            <Sparkles className="w-5 h-5" />
            Test de evaluación gratuito
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            ¿Qué tan bien conoces tu cerebro?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 leading-relaxed"
          >
            Responde 10 preguntas rápidas y descubre tu perfil cognitivo completo. 
            Recibe un informe personalizado con estrategias específicas para ti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pt-4"
          >
            <Button 
              size="xl" 
              variant="solid-dark"
              className="group shadow-elevation-high text-lg"
            >
              Comenzar test gratuito
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/70 text-sm"
          >
            ✓ Sin registro • ✓ Resultados inmediatos • ✓ 100% confidencial
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FeaturedTestVariant3;
