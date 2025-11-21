import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Brain, 
  Compass, 
  TrendingUp, 
  Users, 
  Mic, 
  Heart,
  ArrowRight 
} from "lucide-react";
import { IconWrapper } from "@/components/ui/icon-wrapper";

const services = [
  {
    icon: Brain,
    title: "Evaluaciones TDAH",
    description: "Diagnóstico completo con protocolos neuropsicológicos internacionales. Incluye informe detallado y plan de acción.",
    color: "orange" as const,
    size: "large" as const,
  },
  {
    icon: Compass,
    title: "Evaluaciones Vocacionales",
    description: "Orientación profesional basada en tus fortalezas cognitivas y perfil neuropsicológico.",
    color: "white" as const,
    size: "normal" as const,
  },
  {
    icon: TrendingUp,
    title: "Coaching Ejecutivo",
    description: "Desarrollo de habilidades de liderazgo, gestión del tiempo y productividad para profesionales.",
    color: "white" as const,
    size: "normal" as const,
  },
  {
    icon: Users,
    title: "Talleres Empresariales",
    description: "Capacitaciones sobre neurodiversidad, TDAH en el trabajo y estrategias de productividad para equipos.",
    color: "green" as const,
    size: "normal" as const,
  },
  {
    icon: Mic,
    title: "Conferencias",
    description: "Charlas inspiradoras sobre neurociencia, TDAH y productividad para eventos corporativos y educativos.",
    color: "navy" as const,
    size: "normal" as const,
  },
  {
    icon: Heart,
    title: "Mentoría 1:1",
    description: "Acompañamiento personalizado para desarrollar estrategias adaptadas a tu cerebro único.",
    color: "burgundy" as const,
    size: "normal" as const,
  },
];

const colorStyles = {
  orange: {
    bg: "bg-gradient-to-br from-brand-primary via-brand-primary-strong to-brand-primary",
    text: "text-white",
    iconBg: "bg-white/20",
    iconColor: "white" as const,
    button: "bg-white text-brand-primary-strong hover:bg-white/90",
  },
  white: {
    bg: "bg-white border border-ink-muted/20",
    text: "text-ink-strong",
    iconBg: "bg-brand-primary/10",
    iconColor: "orange" as const,
    button: "border-brand-primary text-brand-primary hover:bg-brand-primary/5",
  },
  green: {
    bg: "bg-accent-deepgreen",
    text: "text-white",
    iconBg: "bg-white/20",
    iconColor: "white" as const,
    button: "bg-white text-accent-deepgreen hover:bg-white/90",
  },
  navy: {
    bg: "bg-accent-navy",
    text: "text-white",
    iconBg: "bg-white/20",
    iconColor: "white" as const,
    button: "bg-white text-accent-navy hover:bg-white/90",
  },
  burgundy: {
    bg: "bg-accent-burgundy",
    text: "text-white",
    iconBg: "bg-white/20",
    iconColor: "white" as const,
    button: "bg-white text-accent-burgundy hover:bg-white/90",
  },
};

const MainServicesV2 = () => {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="orange">MIS SERVICIOS</Badge>
          <h2 className="text-h2 font-bold text-ink-strong">
            Soluciones completas para tu desarrollo
          </h2>
          <p className="text-body-l text-ink-muted max-w-2xl mx-auto">
            Evaluaciones, coaching, talleres y conferencias adaptadas a tus necesidades
          </p>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid gap-8">
          {/* First Row - 1 Large + 2 Normal */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Large Featured Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`
                rounded-3xl p-10 md:p-12 transition-all duration-300 shadow-[0_20px_60px_-15px_rgba(235,131,35,0.3)]
                ${colorStyles[services[0].color].bg}
              `}
            >
              <div className="space-y-6">
                <div className={`inline-flex p-5 rounded-2xl ${colorStyles[services[0].color].iconBg}`}>
                  <IconWrapper 
                    icon={services[0].icon}
                    size="2xl"
                    color={colorStyles[services[0].color].iconColor}
                    strokeWidth={2.5}
                  />
                </div>

                <div>
                  <h3 className={`text-h3 font-bold mb-4 ${colorStyles[services[0].color].text}`}>
                    {services[0].title}
                  </h3>
                  <p className={`text-body-l ${colorStyles[services[0].color].text} opacity-90`}>
                    {services[0].description}
                  </p>
                </div>

                <Button 
                  size="lg" 
                  className={`group ${colorStyles[services[0].color].button}`}
                >
                  Más información
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>

            {/* Two Normal Cards Stacked */}
            <div className="grid grid-rows-2 gap-8">
              {services.slice(1, 3).map((service, index) => {
                const styles = colorStyles[service.color];
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 1) * 0.1 }}
                    whileHover={{ y: -8 }}
                    className={`
                      rounded-3xl p-6 transition-all duration-300
                      ${styles.bg}
                      ${service.color === 'white' ? 'hover:shadow-lg hover:border-brand-primary/30' : 'shadow-md'}
                    `}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl flex-shrink-0 ${styles.iconBg}`}>
                        <IconWrapper 
                          icon={service.icon}
                          size="lg"
                          color={styles.iconColor}
                          strokeWidth={2.5}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg font-bold mb-2 ${styles.text}`}>
                          {service.title}
                        </h3>
                        <p className={`text-sm ${styles.text} opacity-90 line-clamp-2`}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Second Row - 3 Equal Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(3).map((service, index) => {
              const styles = colorStyles[service.color];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 3) * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`
                    rounded-3xl p-8 transition-all duration-300 shadow-md
                    ${styles.bg}
                  `}
                >
                  <div className="space-y-6">
                    <div className={`inline-flex p-4 rounded-2xl ${styles.iconBg}`}>
                      <IconWrapper 
                        icon={service.icon}
                        size="xl"
                        color={styles.iconColor}
                        strokeWidth={2.5}
                      />
                    </div>

                    <div>
                      <h3 className={`text-xl font-bold mb-3 ${styles.text}`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm ${styles.text} opacity-90`}>
                        {service.description}
                      </p>
                    </div>

                    <Button 
                      size="sm"
                      variant="outline"
                      className={`group ${styles.button}`}
                    >
                      Ver más
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainServicesV2;
