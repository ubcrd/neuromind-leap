import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Users } from "lucide-react";

const AboutNeuroSpaceV2Variant2 = () => {
  const timeline = [
    {
      year: "2008",
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Licenciatura en Psicología",
      description: "Universidad de Buenos Aires • Especialización en Neuropsicología"
    },
    {
      year: "2012",
      icon: <Award className="w-5 h-5" />,
      title: "Certificación Internacional",
      description: "Coach en TDAH certificada • Formación en Estados Unidos"
    },
    {
      year: "2015",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Fundación de NeuroSpace",
      description: "Centro especializado en evaluación y coaching para TDAH"
    },
    {
      year: "2024",
      icon: <Users className="w-5 h-5" />,
      title: "Más de 500 Clientes",
      description: "1,200+ evaluaciones realizadas • 4.9/5 de valoración"
    }
  ];

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-br from-surface-warm via-white to-surface-warm overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="solid" className="text-xs font-semibold mb-6 bg-accent-deepgreen">
              MI TRAYECTORIA
            </Badge>

            <h2 className="text-h2 font-bold text-ink-strong leading-tight mb-6">
              Una carrera dedicada a{" "}
              <span className="text-accent-deepgreen">transformar vidas</span>
            </h2>

            <p className="text-body-l text-ink-muted max-w-2xl mx-auto">
              Desde mi graduación, he dedicado mi carrera a especializarme en TDAH 
              y ayudar a personas a alcanzar su máximo potencial.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-accent-deepgreen to-accent-navy" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] border border-ink-muted/10 ml-16 md:ml-0">
                      <div className="text-2xl font-bold text-brand-primary mb-2">{item.year}</div>
                      <h3 className="text-lg font-bold text-ink-strong mb-2">{item.title}</h3>
                      <p className="text-sm text-ink-muted">{item.description}</p>
                    </div>
                  </div>

                  {/* Icon in center */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-brand-primary flex items-center justify-center text-brand-primary shadow-lg">
                    {item.icon}
                  </div>

                  {/* Spacer for layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNeuroSpaceV2Variant2;
