import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Brain, Users, Building2, ArrowRight, CheckCircle2 } from "lucide-react";

const MainServicesV2Variant2 = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Evaluaciones TDAH",
      description: "Diagnóstico completo y profesional",
      features: [
        "Entrevista clínica profunda",
        "Test neuropsicológicos validados",
        "Informe detallado con recomendaciones",
        "Sesión de devolución personalizada"
      ],
      price: "Desde $150",
      color: "orange"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Coaching Individual",
      description: "Sesiones personalizadas 1 a 1",
      features: [
        "Plan personalizado según tus objetivos",
        "Estrategias prácticas y aplicables",
        "Seguimiento continuo de progreso",
        "Material y recursos exclusivos"
      ],
      price: "Desde $80/sesión",
      color: "green"
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Consultoría Empresarial",
      description: "Programas para organizaciones",
      features: [
        "Talleres de sensibilización",
        "Protocolos de inclusión",
        "Capacitación de líderes",
        "Seguimiento y medición de resultados"
      ],
      price: "Consultar",
      color: "navy"
    }
  ];

  const colorClasses = {
    orange: {
      bg: "bg-brand-primary",
      text: "text-brand-primary",
      bgLight: "bg-brand-primary/10",
      border: "border-brand-primary/20"
    },
    green: {
      bg: "bg-accent-deepgreen",
      text: "text-accent-deepgreen",
      bgLight: "bg-accent-deepgreen/10",
      border: "border-accent-deepgreen/20"
    },
    navy: {
      bg: "bg-accent-navy",
      text: "text-accent-navy",
      bgLight: "bg-accent-navy/10",
      border: "border-accent-navy/20"
    }
  };

  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <Badge variant="orange" className="text-xs font-semibold">
            MIS SERVICIOS
          </Badge>
          <h2 className="text-h2 font-bold text-ink-strong leading-tight">
            Elige el servicio que mejor se adapte a ti
          </h2>
        </motion.div>

        {/* Services List */}
        <div className="max-w-6xl mx-auto space-y-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-white border-2 ${colors.border} rounded-3xl p-8 md:p-10 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-300`}
              >
                <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-start">
                  {/* Icon */}
                  <div className={`w-20 h-20 rounded-2xl ${colors.bgLight} flex items-center justify-center ${colors.text}`}>
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-ink-strong mb-2">{service.title}</h3>
                      <p className="text-ink-muted">{service.description}</p>
                    </div>

                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-ink-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col items-end gap-4 md:min-w-[200px]">
                    <div className="text-right">
                      <div className="text-sm text-ink-muted mb-1">Inversión</div>
                      <div className="text-2xl font-bold text-ink-strong">{service.price}</div>
                    </div>
                    <Button 
                      className={`${colors.bg} text-white hover:opacity-90 group w-full md:w-auto`}
                    >
                      Más información
                      <ArrowRight className="transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MainServicesV2Variant2;
