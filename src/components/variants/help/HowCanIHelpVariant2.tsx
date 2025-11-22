import { Brain, Target, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/SectionWrapper";
import { fadeInUp } from "@/lib/motion-presets";

const HowCanIHelpVariant2 = () => {
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
    <SectionWrapper backgroundColor="white" padding="lg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="orange" className="mb-6">METODOLOGÍA</Badge>
          <h2 className="text-h2 font-bold text-ink-strong mb-4">
            Tres pasos hacia tu transformación
          </h2>
        </motion.div>

        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex gap-6 items-start p-8 rounded-tile-lg bg-surface-warm hover:shadow-card transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-tile bg-brand-primary-strong flex items-center justify-center">
                  <benefit.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-5xl font-bold text-brand-primary-strong/30">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl font-bold text-ink-strong">{benefit.title}</h3>
                </div>
                <p className="text-lg text-ink-muted leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowCanIHelpVariant2;
