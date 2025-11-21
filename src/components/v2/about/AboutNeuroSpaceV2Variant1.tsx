import { Badge } from "@/components/ui/badge";
import { OrganicShape } from "@/components/ui/organic-shape";
import { FloatingBadge } from "@/components/ui/floating-badge";
import { motion } from "framer-motion";
import { Award, GraduationCap, Users } from "lucide-react";

const AboutNeuroSpaceV2Variant1 = () => {
  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      <OrganicShape 
        variant="blob2" 
        color="green" 
        size="lg" 
        position="top-left"
        opacity={0.08}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md aspect-square">
              <OrganicShape 
                variant="circle" 
                color="green" 
                size="lg"
                position="center"
                opacity={0.15}
                className="scale-110"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                    alt="Camila Belén - Neuropsicóloga Clínica"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-8 -right-4">
                <FloatingBadge 
                  variant="years"
                  text="15+ años"
                  subtext="Transformando vidas"
                  icon={<Award className="w-5 h-5" />}
                />
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <Badge variant="solid" className="text-xs font-semibold bg-accent-deepgreen">
              SOBRE MÍ
            </Badge>

            <h2 className="text-h2 font-bold text-ink-strong leading-tight">
              Soy Camila Belén,{" "}
              <span className="text-accent-deepgreen">Neuropsicóloga Clínica</span>{" "}
              especializada en TDAH
            </h2>

            <p className="text-body-l text-ink-muted leading-relaxed">
              Con más de 15 años de experiencia, he ayudado a cientos de personas 
              a transformar su relación con el TDAH. Mi enfoque combina la 
              neurociencia más avanzada con estrategias prácticas y personalizadas.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-deepgreen/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-accent-deepgreen" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-strong mb-1">Neuropsicóloga Clínica</h3>
                  <p className="text-sm text-ink-muted">Especialista en evaluación y tratamiento de TDAH en adultos</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-strong mb-1">Coach Organizacional Certificada</h3>
                  <p className="text-sm text-ink-muted">Certificaciones internacionales en coaching ejecutivo y TDAH</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-navy/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-ink-strong mb-1">500+ Clientes Satisfechos</h3>
                  <p className="text-sm text-ink-muted">Profesionales y personas que transformaron su vida con mis estrategias</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutNeuroSpaceV2Variant1;
