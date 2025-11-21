import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const PreFooterCTAVariant3 = () => {
  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      {/* Minimal geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-deepgreen/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-brand-primary/10 rounded-full">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-bold text-brand-primary uppercase tracking-wide">
                Da el primer paso
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-ink-strong leading-tight">
              Transforma tu{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-primary-strong">TDAH</span>
                <svg className="absolute -bottom-3 left-0 w-full" height="12" viewBox="0 0 200 12">
                  <path d="M0,6 Q50,0 100,6 T200,6" stroke="#EB8323" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              hoy mismo
            </h2>

            <p className="text-2xl text-ink-muted max-w-2xl mx-auto leading-relaxed">
              Únete a más de 500 personas que ya tomaron control de su vida 
              con estrategias personalizadas basadas en neurociencia
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="xl" 
              className="group text-lg px-12 py-8 shadow-[0_20px_60px_-15px_rgba(235,131,35,0.4)]"
            >
              Comenzar test gratuito
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="xl" 
              variant="outline"
              className="text-lg px-12 py-8 group"
            >
              Agendar consulta
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-ink-muted"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-primary" />
              <span>✓ Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-primary" />
              <span>✓ 100% confidencial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-primary" />
              <span>✓ Resultados comprobados</span>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-ink-muted/10"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary-strong mb-2">500+</div>
              <div className="text-sm text-ink-muted">Clientes satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary-strong mb-2">4.9/5</div>
              <div className="text-sm text-ink-muted">Valoración promedio</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-primary-strong mb-2">15+</div>
              <div className="text-sm text-ink-muted">Años de experiencia</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTAVariant3;
