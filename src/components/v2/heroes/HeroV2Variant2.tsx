import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Users, BookOpen, Award, Brain } from "lucide-react";

const HeroV2Variant2 = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-accent-navy via-accent-navy/90 to-brand-primary overflow-hidden">
      {/* Abstract brain illustration background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M400 400 Q 500 300, 600 400 T 800 400" stroke="white" strokeWidth="4" fill="none" opacity="0.3" />
          <path d="M400 450 Q 500 350, 600 450 T 800 450" stroke="white" strokeWidth="4" fill="none" opacity="0.2" />
          <circle cx="500" cy="350" r="80" stroke="white" strokeWidth="3" fill="none" opacity="0.3" />
          <circle cx="700" cy="350" r="60" stroke="white" strokeWidth="3" fill="none" opacity="0.2" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 py-32 md:py-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Central Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Brain className="w-5 h-5 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wide">
                Neurociencia Aplicada
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Recupera el{" "}
              <span className="text-brand-primary bg-white px-4 py-2 inline-block transform -rotate-1">
                control
              </span>{" "}
              de tu mente
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Estrategias basadas en neurociencia para dominar tu TDAH y alcanzar tu máximo potencial
            </p>
            
            <div className="pt-8">
              <Button 
                size="xl" 
                className="bg-white text-accent-navy hover:bg-surface-warm text-lg px-10 py-7 group shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
              >
                Comienza tu transformación
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-12 pt-16"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-white/70">Clientes</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-white">1,200+</div>
                <div className="text-sm text-white/70">Evaluaciones</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-white">15+ años</div>
                <div className="text-sm text-white/70">Experiencia</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2Variant2;
