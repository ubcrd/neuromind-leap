import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Tv, Radio, Mic } from "lucide-react";
import { SectionWrapper } from "@/components/SectionWrapper";

const MediaAppearancesVariant2 = () => {
  const media = [
    { name: "Camino al Sol", type: "TV", icon: Tv },
    { name: "En Sociedad TV", type: "TV", icon: Tv },
    { name: "Popular Talks", type: "Radio", icon: Radio },
    { name: "Contracultura", type: "Podcast", icon: Mic },
    { name: "Podcast NeuroLíderes", type: "Podcast", icon: Mic },
  ];

  return (
    <SectionWrapper backgroundColor="cream" padding="lg">
      <div className="text-center mb-16">
        <Badge variant="orange" className="mb-6">EN LOS MEDIOS</Badge>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-h2 font-bold text-ink-strong mb-4"
        >
          Apariciones en medios
        </motion.h2>
        <p className="text-xl text-ink-muted">
          Compartiendo conocimiento en diferentes plataformas
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {media.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
          >
            <div className="h-full rounded-tile-lg bg-white p-8 border-2 border-transparent hover:border-brand-primary-strong hover:shadow-card transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-primary-strong/10 flex items-center justify-center group-hover:bg-brand-primary-strong group-hover:scale-110 transition-all">
                  <item.icon className="w-8 h-8 text-brand-primary-strong group-hover:text-white transition-colors" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-primary-strong mb-1">{item.type}</p>
                  <p className="font-bold text-ink-strong">{item.name}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default MediaAppearancesVariant2;
