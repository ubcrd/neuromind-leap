import { Brain, Target, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { IconWrapper } from "@/components/ui/icon-wrapper";
import { SectionWrapper } from "@/components/SectionWrapper";
import { staggerContainer, fadeInUp } from "@/lib/motion-presets";

const HowCanIHelpVariant1 = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Evalúa",
      description: "Conoce tus fortalezas cognitivas, emocionales y de aprendizaje.",
    },
    {
      icon: Target,
      title: "Enfoca",
      description: "Encuentra dirección en tu vida personal, académica o laboral.",
    },
    {
      icon: MessageSquare,
      title: "Aplica",
      description: "Entrena tu atención, energía y comunicación con base científica.",
    },
  ];

  return (
    <SectionWrapper backgroundColor="cream" padding="lg">
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
          <h2 className="text-h2 md:text-5xl font-bold mb-6 text-ink-strong leading-tight max-w-4xl mx-auto">
            Comprender tu mente es el primer paso para transformarla
          </h2>
          <p className="text-body-l text-ink-muted max-w-2xl mx-auto">
            Un enfoque científico y práctico para tu desarrollo personal y profesional
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="p-10 rounded-tile-lg bg-brand-primary-strong border-0 h-full cursor-pointer hover:shadow-elevation-high transition-shadow">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-24 h-24 rounded-tile bg-ink-strong flex items-center justify-center">
                    <IconWrapper 
                      icon={benefit.icon}
                      size="xl"
                      strokeWidth={3}
                      color="white"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-ink-strong uppercase tracking-wide">
                    {benefit.title}
                  </h3>
                  <p className="text-ink-strong text-lg leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default HowCanIHelpVariant1;
