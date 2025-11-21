import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OrganicShape } from "@/components/ui/organic-shape";
import { FloatingBadge } from "@/components/ui/floating-badge";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";

const HeroV2 = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-surface-warm/30 to-white overflow-hidden">
      {/* Background decoration */}
      <OrganicShape 
        variant="blob1" 
        color="orange" 
        size="xl" 
        position="top-right"
        opacity={0.06}
      />
      
      <div className="container mx-auto px-6 py-32 md:py-40">
        <div className="grid lg:grid-cols-[55%_45%] gap-16 lg:gap-20 items-center">
          {/* Left Content - Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Badge variant="orange" className="text-xs font-semibold">
              NEUROSCIENCE-BASED COACHING
            </Badge>
            
            <h1 className="text-h1 font-bold text-ink-strong leading-tight">
              Transforma tu{" "}
              <span className="text-brand-primary-strong">TDAH</span> en tu{" "}
              <span className="text-brand-primary-strong">superpoder</span>
            </h1>
            
            <p className="text-body-l text-ink-muted max-w-xl leading-relaxed">
              Ayudo a personas con TDAH y profesionales a desarrollar estrategias 
              neurociencia-basadas para mejorar su productividad, organización y 
              bienestar emocional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="xl" className="group">
                Haz el test gratuito
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="xl" variant="outline">
                Conoce mis servicios
              </Button>
            </div>

            {/* Inline Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-brand-primary" />
                <span className="text-sm text-ink-muted">
                  <strong className="text-ink-strong">500+</strong> clientes
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-brand-primary" />
                <span className="text-sm text-ink-muted">
                  <strong className="text-ink-strong">1,200+</strong> evaluaciones
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-brand-primary" />
                <span className="text-sm text-ink-muted">
                  <strong className="text-ink-strong">15+</strong> años experiencia
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image with Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Main circular image */}
            <div className="relative w-full max-w-md aspect-square">
              <OrganicShape 
                variant="circle" 
                color="orange" 
                size="xl"
                position="center"
                opacity={0.2}
                className="scale-110"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                    alt="Camila Belén - Neuropsicóloga"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute top-8 -left-4">
                <FloatingBadge 
                  variant="stat"
                  text="500+"
                  subtext="Clientes atendidos"
                  icon={<Users className="w-5 h-5 text-brand-primary" />}
                />
              </div>

              <div className="absolute top-1/2 -right-8">
                <FloatingBadge 
                  variant="years"
                  text="15+ años"
                  subtext="Experiencia"
                  icon={<Award className="w-5 h-5" />}
                />
              </div>

              <div className="absolute bottom-12 -left-8">
                <FloatingBadge 
                  variant="certification"
                  text="Certificaciones"
                  subtext="Internacionales"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
