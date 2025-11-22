import { Badge } from "@/components/ui/badge";
import { Tv } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { staggerContainer, fadeInUp } from "@/lib/motion-presets";

const MediaAppearancesVariant1 = () => {
  const media = [
    "Camino al Sol",
    "En Sociedad TV",
    "Popular Talks",
    "Contracultura",
    "Podcast NeuroLíderes",
  ];

  return (
    <SectionWrapper backgroundColor="white" padding="lg">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center space-y-8"
          variants={fadeInUp}
        >
          <div>
            <Badge variant="orange" className="mb-6 text-base px-6 py-2">
              <Tv className="w-5 h-5" strokeWidth={3} />
              En los medios
            </Badge>
            <h2 className="text-h2 md:text-5xl font-bold text-ink-strong mb-4">
              He compartido sobre neurociencia aplicada en:
            </h2>
            <p className="text-body-l text-ink-muted max-w-2xl mx-auto">
              Difundiendo conocimiento científico para todos
            </p>
          </div>
          
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-6"
            variants={staggerContainer}
          >
            {media.map((outlet, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="px-8 py-4 rounded-tile bg-surface-warm border-2 border-brand-primary-strong/20 hover:border-brand-primary-strong hover:shadow-card transition-all duration-300 cursor-pointer">
                  <p className="text-lg font-bold text-ink-strong uppercase tracking-wide">
                    {outlet}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-ink-muted pt-4"
            variants={fadeInUp}
          >
            <a 
              href="#" 
              className="text-brand-primary-strong hover:underline font-semibold text-lg inline-flex items-center gap-2 group"
            >
              Ver todas las apariciones 
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </motion.p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default MediaAppearancesVariant1;
