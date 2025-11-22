import { Button } from "@/components/ui/button";
import { Brain, Compass, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const MainServicesVariant2 = () => {
  const services = [
    {
      icon: Brain,
      title: "Evaluaciones clínicas y diagnósticas",
      description: "Entiende tu perfil cognitivo y emocional para tomar decisiones más acertadas.",
      color: "bg-accent-deepgreen"
    },
    {
      icon: Compass,
      title: "Evaluaciones vocacionales y laborales",
      description: "Descubre tus fortalezas, intereses y valores para redirigir tu camino profesional.",
      color: "bg-accent-burgundy"
    },
    {
      icon: Users,
      title: "Talleres y conferencias",
      description: "Neurociencia aplicada al trabajo, la educación y el bienestar emocional.",
      color: "bg-accent-navy"
    },
  ];

  return (
    <SectionWrapper backgroundColor="cream" padding="lg">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-h2 font-bold text-ink-strong mb-4"
        >
          Servicios profesionales
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-ink-muted max-w-2xl mx-auto"
        >
          Soluciones personalizadas basadas en ciencia
        </motion.p>
      </div>

      <div className="space-y-6 mb-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ x: 10 }}
            className="group"
          >
            <div className={`${service.color} rounded-tile-lg p-8 cursor-pointer transition-all duration-300 hover:shadow-elevation-high`}>
              <div className="flex items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-tile bg-white/20 flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{service.description}</p>
                </div>
                <ArrowRight className="w-6 h-6 text-white/70 group-hover:translate-x-2 transition-transform flex-shrink-0 mt-2" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button size="xl" className="group">
          Ver todos los servicios
          <ArrowRight className="transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </SectionWrapper>
  );
};

export default MainServicesVariant2;
