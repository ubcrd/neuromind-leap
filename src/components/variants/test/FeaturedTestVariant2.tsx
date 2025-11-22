import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Gift, Target } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";

const FeaturedTestVariant2 = () => {
  const features = [
    { icon: Clock, text: "Solo 3 minutos" },
    { icon: Gift, text: "Totalmente gratuito" },
    { icon: Target, text: "Resultados personalizados" },
  ];

  return (
    <SectionWrapper backgroundColor="dark" padding="lg">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-[1fr,1.3fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Descubre tu perfil de{" "}
                <span className="text-brand-primary">neuroproductividad</span>
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Un test rápido y científico que te revelará cómo optimizar tu enfoque y energía mental.
              </p>
            </div>

            <Button size="xl" className="group shadow-elevation-high">
              Hacer el test ahora
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-tile-lg bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="w-14 h-14 rounded-tile bg-brand-primary-strong flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-bold text-white">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FeaturedTestVariant2;
