import { motion } from "framer-motion";
import { Award, GraduationCap, Brain, BookOpen, Users, Briefcase } from "lucide-react";

const logos = [
  { icon: GraduationCap, name: "Universidad de Buenos Aires" },
  { icon: Brain, name: "Neuropsicología Clínica" },
  { icon: Award, name: "Certificación Internacional" },
  { icon: BookOpen, name: "Investigación TDAH" },
  { icon: Users, name: "Coaching Organizacional" },
  { icon: Briefcase, name: "Consultoría Empresarial" },
];

const LogoStrip = () => {
  return (
    <section className="py-12 bg-surface-warm border-y border-ink-muted/10">
      <div className="container mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-ink-muted uppercase tracking-wide mb-8 font-medium"
        >
          Certificaciones y colaboraciones
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-ink-strong" strokeWidth={1.5} />
                <span className="text-xs text-center text-ink-muted leading-tight">
                  {logo.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
