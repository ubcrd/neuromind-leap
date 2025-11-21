import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const FeaturedTestV2Variant3 = () => {
  const steps = [
    "Responde 15 preguntas científicas",
    "Obtén tu perfil de neuroproductividad",
    "Recibe recomendaciones personalizadas",
    "Descarga tu reporte completo (PDF)"
  ];

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-br from-white via-surface-warm/50 to-white overflow-hidden">
      {/* Minimal geometric decoration */}
      <div className="absolute top-20 right-20 w-64 h-64 border-2 border-brand-primary/20 rounded-full" />
      <div className="absolute bottom-20 left-20 w-96 h-96 border-2 border-accent-deepgreen/20 rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-deepgreen/10 rounded-full">
                  <span className="text-xs font-bold text-accent-deepgreen uppercase tracking-wide">
                    Test Gratuito
                  </span>
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-ink-strong leading-tight">
                  Conoce tu perfil de{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-brand-primary-strong">NeuroProductividad</span>
                    <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                      <path d="M0,4 Q50,0 100,4 T200,4" stroke="#EB8323" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    </svg>
                  </span>
                </h2>

                <p className="text-xl text-ink-muted leading-relaxed">
                  Un test científico y personalizado que te ayudará a entender cómo funciona 
                  tu cerebro y qué estrategias son más efectivas para ti.
                </p>
              </div>

              {/* Steps Checklist */}
              <ul className="space-y-4">
                {steps.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                    </div>
                    <span className="text-lg text-ink-strong pt-0.5">{step}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <div className="pt-4">
                <Button 
                  size="xl" 
                  className="group text-lg px-12 py-8"
                >
                  Comenzar test gratuito
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
                
                <p className="text-sm text-ink-muted mt-4">
                  ⏱️ Solo 10 minutos • 🔒 100% privado • ✨ Sin registro
                </p>
              </div>
            </motion.div>

            {/* Right - Visual Stats Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-brand-primary to-brand-primary-strong rounded-3xl p-12 shadow-[0_30px_80px_-20px_rgba(235,131,35,0.5)] text-white">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="text-sm font-bold uppercase tracking-wider opacity-90">
                      Personas ya lo completaron
                    </div>
                    <div className="text-7xl font-bold">5,000+</div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20">
                    <div>
                      <div className="text-4xl font-bold mb-1">4.9/5</div>
                      <div className="text-sm opacity-90">Valoración</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold mb-1">10min</div>
                      <div className="text-sm opacity-90">Duración</div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/20">
                    <div className="text-sm opacity-90 mb-3">Basado en:</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                        Neurociencia
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                        Psicología
                      </span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                        TDAH
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestV2Variant3;
