import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const AboutNeuroSpaceVariant2 = () => {
  const highlights = [
    { icon: Award, text: "15+ años de experiencia" },
    { icon: Users, text: "500+ vidas transformadas" },
    { icon: BookOpen, text: "Basado en ciencia" },
  ];

  return (
    <SectionWrapper backgroundColor="cream" padding="lg">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-h2 font-bold text-ink-strong">
            Ciencia, experiencia y resultados reales
          </h2>

          <p className="text-xl text-ink-muted max-w-3xl mx-auto leading-relaxed">
            The NeuroSpace es un espacio donde la psicología y la neurociencia se encuentran 
            para ayudarte a entenderte mejor y alcanzar tu máximo potencial.
          </p>

          <div className="grid md:grid-cols-3 gap-8 py-12">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-4 p-6 rounded-tile-lg bg-white"
              >
                <div className="w-16 h-16 rounded-full bg-brand-primary-strong flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <p className="font-bold text-lg text-ink-strong text-center">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-lg text-ink-muted leading-relaxed max-w-2xl mx-auto">
            Fundado por <strong className="text-brand-primary-strong">Camila Hasbún</strong>, 
            psicóloga y divulgadora de neurociencia aplicada, este proyecto une ciencia, 
            educación y acción práctica.
          </p>

          <Button size="lg" className="group">
            Conoce más sobre mi
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutNeuroSpaceVariant2;
