import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HowCanIHelpV2Variant2 = () => {
  const paths = [
    {
      title: "Para ti",
      subtitle: "Personas con TDAH",
      color: "orange",
      features: [
        "Test de NeuroProductividad (GRATIS)",
        "Evaluación TDAH completa",
        "Coaching individual personalizado",
        "Recursos y guías prácticas"
      ],
      cta: "Comienza gratis"
    },
    {
      title: "Para tu empresa",
      subtitle: "Equipos y organizaciones",
      color: "navy",
      features: [
        "Talleres de sensibilización",
        "Protocolos de inclusión",
        "Consultoría organizacional",
        "Capacitación de líderes"
      ],
      cta: "Solicitar información"
    },
    {
      title: "Para aprender",
      subtitle: "Contenido educativo",
      color: "green",
      features: [
        "Blog con artículos especializados",
        "Videos educativos",
        "Podcast sobre TDAH",
        "Newsletter semanal"
      ],
      cta: "Explorar recursos"
    }
  ];

  const colorClasses = {
    orange: {
      bg: "bg-brand-primary",
      text: "text-brand-primary",
      border: "border-brand-primary/30",
      hover: "hover:border-brand-primary"
    },
    navy: {
      bg: "bg-accent-navy",
      text: "text-accent-navy",
      border: "border-accent-navy/30",
      hover: "hover:border-accent-navy"
    },
    green: {
      bg: "bg-accent-deepgreen",
      text: "text-accent-deepgreen",
      border: "border-accent-deepgreen/30",
      hover: "hover:border-accent-deepgreen"
    }
  };

  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <Badge variant="orange" className="text-xs font-semibold">
              ELIGE TU CAMINO
            </Badge>
            <h2 className="text-h2 font-bold text-ink-strong leading-tight">
              Soluciones diseñadas para{" "}
              <span className="text-brand-primary-strong">cada necesidad</span>
            </h2>
            <p className="text-body-l text-ink-muted">
              Sea cual sea tu objetivo, tengo un camino para ti
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {paths.map((path, index) => {
              const colors = colorClasses[path.color as keyof typeof colorClasses];
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`bg-white border-2 ${colors.border} ${colors.hover} rounded-3xl p-8 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 flex flex-col`}
                >
                  <div className="space-y-6 flex-1">
                    <div>
                      <div className={`text-sm font-bold ${colors.text} uppercase tracking-wide mb-2`}>
                        {path.title}
                      </div>
                      <h3 className="text-2xl font-bold text-ink-strong">
                        {path.subtitle}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {path.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-ink-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className={`${colors.bg} text-white hover:opacity-90 mt-8 group w-full`}
                    size="lg"
                  >
                    {path.cta}
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowCanIHelpV2Variant2;
