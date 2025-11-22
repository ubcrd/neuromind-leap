import { Button } from "@/components/ui/button";
import { Brain, Compass, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { SectionWrapper } from "@/components/SectionWrapper";
import { staggerContainer, fadeInUp } from "@/lib/motion-presets";

const MainServicesVariant1 = () => {
  const services = [
    {
      icon: Brain,
      title: "Evaluaciones clínicas y diagnósticas",
      description: "Entiende tu perfil cognitivo y emocional para tomar decisiones más acertadas.",
    },
    {
      icon: Compass,
      title: "Evaluaciones vocacionales y laborales",
      description: "Descubre tus fortalezas, intereses y valores para redirigir tu camino profesional.",
    },
    {
      icon: Users,
      title: "Talleres y conferencias",
      description: "Neurociencia aplicada al trabajo, la educación y el bienestar emocional.",
    },
  ];

  return (
    <SectionWrapper backgroundColor="dark" padding="lg">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-h2 md:text-5xl font-bold mb-6 text-white leading-tight">
            Lo que hacemos en The NeuroSpace
          </h2>
          <p className="text-body-l text-white/80 max-w-2xl mx-auto">
            Servicios especializados basados en neurociencia y psicología aplicada
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="p-10 rounded-tile-lg bg-brand-primary-strong border-0 transition-all duration-300 cursor-pointer hover:shadow-elevation-high h-full">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-24 h-24 rounded-tile bg-ink-strong flex items-center justify-center">
                    <IconWrapper 
                      icon={service.icon} 
                      size="xl" 
                      strokeWidth={3}
                      color="orange"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-ink-strong uppercase tracking-wide leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-ink-strong text-lg leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          variants={fadeInUp}
        >
          <Button 
            size="xl" 
            variant="outline" 
            className="group bg-transparent border-4 border-white text-white hover:bg-white hover:text-ink-strong"
          >
            Explora todos los servicios
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default MainServicesVariant1;
