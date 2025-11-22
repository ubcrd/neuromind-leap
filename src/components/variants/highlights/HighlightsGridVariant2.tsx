import { motion } from "framer-motion";
import { Mic, Users, ThumbsUp, User, Map, MessageCircle, Link2, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const highlights = [
  { icon: Mic, title: "Podcasts", color: "from-accent-deepgreen to-accent-navy" },
  { icon: Users, title: "Charlas", color: "from-brand-primary to-brand-primary-strong" },
  { icon: ThumbsUp, title: "Feedback", color: "from-accent-burgundy to-accent-deepgreen" },
  { icon: User, title: "Conóceme", color: "from-accent-navy to-ink-strong" },
  { icon: Map, title: "Servicios", color: "from-brand-primary-strong to-accent-burgundy" },
  { icon: MessageCircle, title: "Preguntas", color: "from-accent-deepgreen to-brand-primary" },
  { icon: Link2, title: "Bio Link", color: "from-ink-strong to-accent-navy" },
  { icon: Zap, title: "Acción", color: "from-brand-primary to-accent-deepgreen" },
];

const HighlightsGridVariant2 = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-warm">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="orange" className="mb-4">EXPLORA</Badge>
          <h2 className="text-h2 font-bold text-ink-strong">
            Todo en un solo lugar
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${item.color} rounded-tile-lg p-6 aspect-square flex flex-col items-center justify-center gap-4 shadow-card hover:shadow-card-hover transition-all duration-300`}>
                <item.icon className="w-12 h-12 text-white" strokeWidth={2.5} />
                <span className="text-white font-bold text-center">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsGridVariant2;
