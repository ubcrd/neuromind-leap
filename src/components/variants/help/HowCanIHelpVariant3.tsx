import { Brain, Target, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const HowCanIHelpVariant3 = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Evalúa",
      description: "Conoce tus fortalezas cognitivas, emocionales y de aprendizaje.",
      color: "from-accent-deepgreen to-accent-navy"
    },
    {
      icon: Target,
      title: "Enfoca",
      description: "Encuentra dirección en tu vida personal, académica o laboral.",
      color: "from-brand-primary to-brand-primary-strong"
    },
    {
      icon: MessageSquare,
      title: "Aplica",
      description: "Entrena tu atención, energía y comunicación con base científica.",
      color: "from-accent-burgundy to-ink-strong"
    },
  ];

  return (
    <SectionWrapper backgroundColor="dark" padding="lg">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-h2 font-bold text-white mb-4"
        >
          ¿Cómo puedo ayudarte?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-white/70"
        >
          Mi proceso en tres etapas clave
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
          >
            <div className={`h-full rounded-tile-lg bg-gradient-to-br ${benefit.color} p-8 relative overflow-hidden`}>
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              
              <div className="relative space-y-6">
                <benefit.icon className="w-16 h-16 text-white" strokeWidth={2} />
                
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-white">{benefit.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{benefit.description}</p>
                </div>

                <ArrowRight className="w-6 h-6 text-white/70 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default HowCanIHelpVariant3;
