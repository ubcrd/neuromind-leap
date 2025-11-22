import { motion } from "framer-motion";
import { Mic, Users, ThumbsUp, User, Map, MessageCircle, Link2, Zap, ArrowRight } from "lucide-react";

const highlights = [
  { icon: Mic, title: "Podcasts", description: "Escucha mis episodios" },
  { icon: Users, title: "Charlas", description: "Conferencias y talleres" },
  { icon: ThumbsUp, title: "Feedback", description: "Testimonios reales" },
  { icon: User, title: "Conóceme", description: "Mi historia" },
  { icon: Map, title: "Servicios", description: "Soluciones completas" },
  { icon: MessageCircle, title: "Preguntas", description: "FAQ y más" },
  { icon: Link2, title: "Bio Link", description: "Todos mis links" },
  { icon: Zap, title: "Acción", description: "Comienza ahora" },
];

const HighlightsGridVariant3 = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-h2 font-bold text-center mb-16 text-ink-strong"
        >
          Recursos y contenido
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="h-full rounded-tile-lg border-2 border-brand-primary-strong/20 bg-surface-warm p-6 hover:border-brand-primary-strong hover:shadow-card transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-tile bg-brand-primary-strong flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-ink-strong mb-1">{item.title}</h3>
                    <p className="text-sm text-ink-muted">{item.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-brand-primary-strong group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsGridVariant3;
