import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";

const AboutNeuroSpaceV2Variant3 = () => {
  const stats = [
    { number: "500+", label: "Clientes" },
    { number: "1,200+", label: "Evaluaciones" },
    { number: "15+", label: "Años" },
    { number: "4.9/5", label: "Rating" }
  ];

  const expertise = [
    "Neuropsicóloga Clínica Certificada",
    "Especialista en TDAH adultos",
    "Coach Organizacional Internacional",
    "Más de 50 charlas y talleres"
  ];

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-br from-accent-navy via-accent-navy/95 to-ink-deep-brown overflow-hidden">
      {/* Minimalist geometric shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 border border-white/10 rounded-full" />
      <div className="absolute bottom-20 left-10 w-96 h-96 border border-brand-primary/20 rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Minimal Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-brand-primary/20 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-bold text-brand-primary uppercase tracking-wide">
                    Camila Belén
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Neuropsicóloga especializada en{" "}
                  <span className="text-brand-primary">transformar vidas</span>
                </h2>
              </div>

              <p className="text-xl text-white/80 leading-relaxed">
                Con más de 15 años ayudando a personas con TDAH a alcanzar 
                su máximo potencial a través de estrategias basadas en neurociencia.
              </p>

              {/* Expertise List */}
              <ul className="space-y-3">
                {expertise.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0" />
                    <span className="text-white/90">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Button 
                size="lg"
                className="bg-brand-primary hover:bg-brand-primary-strong text-white border-none group"
              >
                Conoce más sobre mí
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Right - Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Large centered photo with stats overlay */}
              <div className="relative">
                <div className="w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border-4 border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                    alt="Camila Belén"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Stats Overlay */}
                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-8 h-8 text-brand-primary" />
                    <span className="text-sm font-bold text-ink-strong uppercase tracking-wide">
                      Experiencia
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-brand-primary-strong">
                          {stat.number}
                        </div>
                        <div className="text-xs text-ink-muted uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNeuroSpaceV2Variant3;
