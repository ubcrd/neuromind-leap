import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/motion-presets";

const FeaturedTest = () => {
  const benefits = ["3 minutos", "100% Gratuito", "Guía personalizada"];
  
  return (
    <SectionWrapper backgroundColor="orange" padding="lg">
      <motion.div 
        className="text-center max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={fadeInUp}>
          <Badge variant="dark" className="mb-8 text-base px-6 py-2">
            <Zap className="w-5 h-5" strokeWidth={3} />
            Test Gratuito
          </Badge>
        </motion.div>
        
        <motion.h2 
          className="text-h2 md:text-5xl font-bold leading-tight text-ink-strong mb-6"
          variants={fadeInUp}
        >
          Evalúa tu nivel de{" "}
          <span className="text-white">enfoque</span> y{" "}
          <span className="text-white">energía mental</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-ink-strong max-w-2xl mx-auto font-['Scope_One',Georgia,serif] leading-relaxed mb-10"
          variants={fadeInUp}
        >
          En menos de 3 minutos descubre tu perfil de neuroproductividad y recibe una guía gratuita para mejorar tu rendimiento con base científica.
        </motion.p>
        
        <motion.div variants={fadeInUp}>
          <Button 
            size="xl" 
            variant="solid-dark"
            className="group text-lg shadow-elevation-high"
          >
            Realizar el test gratuito
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-6 h-6" strokeWidth={3} />
            </motion.div>
          </Button>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-10 text-base text-ink-strong font-bold"
          variants={fadeInUp}
        >
          {benefits.map((text, index) => (
            <div 
              key={text}
              className="flex items-center gap-2"
            >
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <span className="uppercase tracking-wide">{text}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default FeaturedTest;
