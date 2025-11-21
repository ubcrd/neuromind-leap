import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Brain, Users, MessageSquare, Building2, BookOpen, Lightbulb, ArrowRight } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/motion-presets";

const MainServicesV2Variant1 = () => {
  const services = [
    {
      icon: Brain,
      title: "Evaluaciones TDAH",
      description: "Evaluaciones neuropsicológicas completas con informe detallado y recomendaciones personalizadas",
      variant: "orange" as const,
      featured: true
    },
    {
      icon: Users,
      title: "Coaching Individual",
      description: "Sesiones personalizadas para desarrollar estrategias adaptadas a tu estilo de vida",
      variant: "orange" as const
    },
    {
      icon: Building2,
      title: "Consultoría Empresas",
      description: "Programas de inclusión y productividad para equipos con neurodiversidad",
      variant: "navy" as const
    },
    {
      icon: MessageSquare,
      title: "Talleres & Charlas",
      description: "Conferencias educativas sobre TDAH para empresas y organizaciones",
      variant: "green" as const
    },
    {
      icon: BookOpen,
      title: "Recursos Educativos",
      description: "Guías prácticas, videos y herramientas para tu desarrollo diario",
      variant: "orange" as const
    },
    {
      icon: Lightbulb,
      title: "Mentorías Grupales",
      description: "Espacios de aprendizaje compartido con otros profesionales",
      variant: "orange" as const
    }
  ];

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-br from-white via-surface-warm/30 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="orange" className="text-xs font-semibold">
              MIS SERVICIOS
            </Badge>
            <h2 className="text-h2 font-bold text-ink-strong leading-tight">
              Soluciones personalizadas para cada{" "}
              <span className="text-brand-primary-strong">necesidad</span>
            </h2>
            <p className="text-body-l text-ink-muted">
              Desde evaluaciones completas hasta coaching empresarial
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 60px -15px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.2 }}
                className={`rounded-3xl p-10 flex flex-col gap-4 cursor-pointer
                  ${service.featured ? 'md:col-span-2 lg:row-span-2 md:p-12' : ''}
                  ${service.variant === 'orange' ? 'bg-brand-primary text-white' : ''}
                  ${service.variant === 'navy' ? 'bg-accent-navy text-white' : ''}
                  ${service.variant === 'green' ? 'bg-accent-deepgreen text-white' : ''}
                  shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]
                `}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm">
                  <service.icon className="w-8 h-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>

                {service.featured && (
                  <Button 
                    variant="outline" 
                    className="mt-auto bg-white text-brand-primary-strong border-none hover:bg-surface-warm group"
                  >
                    Más información
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainServicesV2Variant1;
