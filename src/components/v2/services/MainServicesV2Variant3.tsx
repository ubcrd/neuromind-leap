import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Brain, Users, Building2, MessageSquare, BookOpen, Lightbulb, ArrowUpRight } from "lucide-react";

const MainServicesV2Variant3 = () => {
  const services = [
    {
      icon: Brain,
      title: "Evaluaciones TDAH",
      description: "Evaluación neuropsicológica completa",
      price: "Desde $150",
      features: ["Entrevista clínica", "Tests validados", "Informe detallado"],
      highlighted: true
    },
    {
      icon: Users,
      title: "Coaching Individual",
      description: "Sesiones personalizadas 1 a 1",
      price: "Desde $80",
      features: ["Plan personalizado", "Seguimiento continuo"]
    },
    {
      icon: Building2,
      title: "Consultoría Empresarial",
      description: "Programas para organizaciones",
      price: "Consultar",
      features: ["Talleres", "Protocolos de inclusión"]
    },
    {
      icon: MessageSquare,
      title: "Talleres & Charlas",
      description: "Conferencias educativas",
      price: "Desde $200",
      features: ["Personalizados", "Para equipos"]
    },
    {
      icon: BookOpen,
      title: "Recursos Educativos",
      description: "Guías y herramientas prácticas",
      price: "Gratis",
      features: ["Blog", "Videos", "Newsletter"]
    },
    {
      icon: Lightbulb,
      title: "Mentorías Grupales",
      description: "Aprendizaje compartido",
      price: "Desde $50",
      features: ["Grupos pequeños", "Networking"]
    }
  ];

  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          {/* Minimal Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <Badge variant="orange" className="text-xs font-semibold mb-6">
              SERVICIOS
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-ink-strong leading-tight">
              Todo lo que necesitas para{" "}
              <span className="text-brand-primary-strong">tu transformación</span>
            </h2>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl p-8 cursor-pointer transition-all duration-300
                  ${service.highlighted 
                    ? 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-brand-primary to-brand-primary-strong text-white' 
                    : 'bg-gradient-to-br from-surface-warm to-white border border-ink-muted/10 hover:border-brand-primary/30'
                  }
                  hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]
                `}
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-current rounded-full blur-3xl" />
                </div>

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 
                    ${service.highlighted 
                      ? 'bg-white/20 backdrop-blur-sm' 
                      : 'bg-brand-primary/10'
                    }`}
                  >
                    <service.icon className={`w-7 h-7 ${service.highlighted ? 'text-white' : 'text-brand-primary'}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 ${service.highlighted ? 'text-white' : 'text-ink-strong'}`}>
                        {service.title}
                      </h3>
                      <p className={service.highlighted ? 'text-white/90' : 'text-ink-muted'}>
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className={`text-sm flex items-center gap-2 ${service.highlighted ? 'text-white/80' : 'text-ink-muted'}`}>
                          <div className={`w-1 h-1 rounded-full ${service.highlighted ? 'bg-white/60' : 'bg-brand-primary'}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-current/20">
                    <span className={`text-lg font-bold ${service.highlighted ? 'text-white' : 'text-ink-strong'}`}>
                      {service.price}
                    </span>
                    <ArrowUpRight className={`w-6 h-6 opacity-0 group-hover:opacity-100 transform translate-x-0 translate-y-0 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all ${service.highlighted ? 'text-white' : 'text-brand-primary'}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainServicesV2Variant3;
