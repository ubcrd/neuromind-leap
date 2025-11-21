import { motion } from "framer-motion";
import { Users, Brain, Mic, Star } from "lucide-react";
import { StatsCounter } from "@/components/ui/stats-counter";

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Clientes atendidos",
  },
  {
    icon: Brain,
    value: 1200,
    suffix: "+",
    label: "Evaluaciones realizadas",
  },
  {
    icon: Mic,
    value: 50,
    suffix: "+",
    label: "Charlas y talleres",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Rating promedio",
    format: "decimal" as const,
  },
];

const StatsBar = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-brand-primary via-brand-primary-strong to-brand-primary shadow-[inset_0_2px_20px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-3"
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-white/60 mx-auto" strokeWidth={2} />
                
                <div className="text-4xl md:text-5xl font-bold text-white">
                  <StatsCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    format={stat.format}
                  />
                </div>
                
                <p className="text-sm md:text-base text-white/90 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
