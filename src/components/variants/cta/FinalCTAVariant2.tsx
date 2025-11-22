import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const FinalCTAVariant2 = () => {
  const benefits = [
    "Primera consulta gratuita",
    "Estrategias personalizadas",
    "Resultados comprobados",
  ];

  return (
    <section className="py-24 md:py-36 bg-ink-strong px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              ¿Listo para transformar tu vida?
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Únete a cientos de personas que ya tomaron control de su desarrollo 
              personal y profesional con base científica.
            </p>

            <ul className="space-y-3 pt-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary-strong flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <Button size="xl" className="group shadow-elevation-high">
              Empezar ahora
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="xl" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-ink-strong">
              Agendar consulta
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTAVariant2;
