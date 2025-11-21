import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const PreFooterCTAVariant2 = () => {
  const benefits = [
    "Evaluación personalizada de tu perfil",
    "Estrategias adaptadas a tu cerebro",
    "Resultados comprobados en 500+ clientes",
    "Acompañamiento profesional continuo"
  ];

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-br from-brand-primary via-brand-primary-strong to-brand-primary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  ¿Listo para transformar tu vida?
                </h2>
                <p className="text-xl text-white/90 leading-relaxed">
                  Únete a cientos de personas que ya tomaron control de su TDAH 
                  y alcanzaron su máximo potencial
                </p>
              </div>

              {/* Benefits List */}
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-white/90">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right CTA */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <Button 
                size="xl" 
                className="bg-white text-brand-primary-strong hover:bg-surface-warm border-none shadow-[0_20px_60px_rgba(0,0,0,0.3)] group text-lg px-12 py-8 w-full lg:w-auto"
              >
                Empezar ahora (Gratis)
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                size="xl" 
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm group text-lg px-12 py-8 w-full lg:w-auto"
              >
                Agendar consulta
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-sm text-white/70 text-center lg:text-left mt-4">
                Primera sesión de consulta sin costo
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTAVariant2;
