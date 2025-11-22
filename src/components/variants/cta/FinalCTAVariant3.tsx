import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Brain } from "lucide-react";

const FinalCTAVariant3 = () => {
  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-br from-accent-deepgreen via-accent-navy to-ink-strong overflow-hidden px-6">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
            <Brain className="w-5 h-5" />
            <span className="font-bold">Tu transformación comienza aquí</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            No esperes más para alcanzar tu máximo potencial
          </h2>

          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Agenda una consulta inicial gratuita y descubre cómo la neurociencia 
            puede transformar tu vida personal y profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="xl" className="group shadow-elevation-high">
              Agendar ahora (Gratis)
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <p className="text-white/70 text-sm pt-4">
            ✓ Sin compromiso • ✓ 30 minutos • ✓ Online o presencial
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTAVariant3;
