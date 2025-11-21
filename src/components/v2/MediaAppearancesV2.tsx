import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MediaCard } from "@/components/ui/media-card";
import { Mic, Radio, Video, Newspaper, Tv, Globe } from "lucide-react";

const mediaAppearances = [
  {
    logo: <Radio className="w-12 h-12 text-brand-primary" />,
    title: "Entrevista sobre TDAH en el trabajo",
    outlet: "Radio Nacional",
    link: "#",
    background: "white" as const,
  },
  {
    logo: <Newspaper className="w-12 h-12 text-brand-primary" />,
    title: "Neurociencia aplicada a la productividad",
    outlet: "La Nación",
    link: "#",
    background: "cream" as const,
  },
  {
    logo: <Tv className="w-12 h-12 text-brand-primary" />,
    title: "Estrategias para padres de niños con TDAH",
    outlet: "TN - Todo Noticias",
    link: "#",
    background: "white" as const,
  },
  {
    logo: <Mic className="w-12 h-12 text-brand-primary" />,
    title: "Podcast: Mitos y verdades del TDAH",
    outlet: "Spotify Originals",
    link: "#",
    background: "cream" as const,
  },
  {
    logo: <Video className="w-12 h-12 text-brand-primary" />,
    title: "TEDx: El superpoder del cerebro TDAH",
    outlet: "TEDxBuenosAires",
    link: "#",
    background: "white" as const,
  },
  {
    logo: <Globe className="w-12 h-12 text-brand-primary" />,
    title: "Neurodiversidad en las organizaciones",
    outlet: "Harvard Business Review",
    link: "#",
    background: "cream" as const,
  },
];

const MediaAppearancesV2 = () => {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="orange">EN LOS MEDIOS</Badge>
          <h2 className="text-h2 font-bold text-ink-strong">
            Apariciones y colaboraciones
          </h2>
          <p className="text-body-l text-ink-muted max-w-2xl mx-auto">
            Compartiendo conocimiento en medios nacionales e internacionales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaAppearances.map((media, index) => (
            <motion.div
              key={media.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <MediaCard
                logo={media.logo}
                title={media.title}
                link={media.link}
                backgroundColor={media.background}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaAppearancesV2;
