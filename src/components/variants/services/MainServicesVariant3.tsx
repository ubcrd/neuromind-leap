import { Button } from "@/components/ui/button";
import { Brain, Compass, Users, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const MainServicesVariant3 = () => {
  const services = [
    {
      icon: Brain,
      title: "Evaluaciones clínicas y diagnósticas",
      description: "Entiende tu perfil cognitivo y emocional para tomar decisiones más acertadas.",
      features: ["Evaluación completa", "Informe detallado", "Sesión de devolución"]
    },
    {
      icon: Compass,
      title: "Evaluaciones vocacionales y laborales",
      description: "Descubre tus fortalezas, intereses y valores para redirigir tu camino profesional.",
      features: ["Test vocacionales", "Análisis de fortalezas", "Plan de acción"]
    },
    {
      icon: Users,
      title: "Talleres y conferencias",
      description: "Neurociencia aplicada al trabajo, la educación y el bienestar emocional.",
      features: ["Talleres corporativos", "Conferencias", "Material didáctico"]
    },
  ];

  return (
    <SectionWrapper backgroundColor="white" padding="lg">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-h2 font-bold text-ink-strong">
            Mis servicios profesionales
          </h2>
          <p className="text-xl text-ink-muted max-w-2xl mx-auto">
            Elige el servicio que mejor se adapte a tus necesidades
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="h-full rounded-tile-lg border-4 border-brand-primary-strong/20 bg-surface-warm p-8 hover:border-brand-primary-strong hover:shadow-elevation-high transition-all duration-300">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-tile bg-brand-primary-strong flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-ink-strong">{service.title}</h3>
                  <p className="text-ink-muted leading-relaxed">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-ink-muted">
                      <Check className="w-4 h-4 text-brand-primary-strong flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group-hover:bg-brand-primary-strong group-hover:text-white group-hover:border-brand-primary-strong">
                  Más información
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button size="xl" className="group">
          Agendar consulta inicial
          <ArrowRight className="transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </SectionWrapper>
  );
};

export default MainServicesVariant3;
