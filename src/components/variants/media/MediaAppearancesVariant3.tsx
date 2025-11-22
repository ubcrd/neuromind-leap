import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";

const MediaAppearancesVariant3 = () => {
  const media = [
    "Camino al Sol",
    "En Sociedad TV",
    "Popular Talks",
    "Contracultura",
    "Podcast NeuroLíderes",
    "TED Talks",
  ];

  return (
    <SectionWrapper backgroundColor="dark" padding="lg">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-h2 font-bold text-white">
              Divulgación científica
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              He tenido el honor de compartir conocimiento sobre neurociencia aplicada 
              en diversos medios y plataformas
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 py-8">
            {media.map((outlet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <p className="text-white font-bold text-sm">
                    {outlet}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-ink-strong group">
            Ver entrevistas completas
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default MediaAppearancesVariant3;
