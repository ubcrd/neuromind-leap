import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroV2Variant3 = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-deep-brown/95 via-ink-deep-brown/85 to-ink-deep-brown/70" />
      </div>
      
      <div className="container mx-auto px-6 py-32 md:py-40 relative z-10">
        <div className="max-w-2xl">
          {/* Left-aligned content on image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge 
              variant="orange" 
              className="text-xs font-bold tracking-wider bg-brand-primary text-white border-none"
            >
              15+ AÑOS AYUDANDO A PERSONAS CON TDAH
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Tu cerebro único merece{" "}
              <span className="relative inline-block">
                <span className="relative z-10">soluciones únicas</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-brand-primary/50 -z-0" />
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-xl leading-relaxed">
              No más estrategias genéricas. Te ayudo a crear un sistema personalizado 
              que funciona específicamente para tu forma de pensar y trabajar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                size="xl" 
                className="bg-brand-primary hover:bg-brand-primary-strong text-white border-none shadow-[0_20px_60px_rgba(235,131,35,0.4)] group"
              >
                Descubre tu estrategia personalizada
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Minimalist stats line */}
            <div className="flex gap-8 pt-12 text-white/80 border-t border-white/20">
              <div>
                <span className="text-2xl font-bold text-white">500+</span>
                <span className="text-sm ml-2">transformaciones</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">15+</span>
                <span className="text-sm ml-2">años experiencia</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">4.9/5</span>
                <span className="text-sm ml-2">valoración</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient overlay on right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-brand-primary/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroV2Variant3;
