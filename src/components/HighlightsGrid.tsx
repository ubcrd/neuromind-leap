import { motion } from "framer-motion";
import { Mic, Users, ThumbsUp, User, Map, MessageCircle, Link2, Zap } from "lucide-react";
import { Tile } from "@/components/ui/tile";
import { staggerContainer, fadeInUp } from "@/lib/motion-presets";

const highlights = [
  { icon: Mic, title: "Podcasts", variant: "orange" as const },
  { icon: Users, title: "Charlas", variant: "orange" as const },
  { icon: ThumbsUp, title: "Feedback", variant: "orange" as const },
  { icon: User, title: "Conóceme", variant: "orange" as const },
  { icon: Map, title: "Servicios", variant: "orange" as const },
  { icon: MessageCircle, title: "Preguntas", variant: "orange" as const },
  { icon: Link2, title: "Bio Link", variant: "orange" as const },
  { icon: Zap, title: "Acción", variant: "orange" as const },
];

const HighlightsGrid = () => {
  return (
    <section className="py-16 md:py-24 bg-ink-strong">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-h2 font-bold text-center mb-12 text-white"
          >
            Explora The NeuroSpace
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {highlights.map((item, index) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <Tile
                  icon={item.icon}
                  title={item.title}
                  variant={item.variant}
                  iconSize="2xl"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightsGrid;
