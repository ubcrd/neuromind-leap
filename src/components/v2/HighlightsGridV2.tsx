import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Instagram, 
  Podcast, 
  FileText, 
  Video,
  Mail,
  Music,
  ExternalLink 
} from "lucide-react";

const highlights = [
  {
    icon: Instagram,
    title: "Instagram",
    description: "Tips diarios sobre TDAH y productividad",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    link: "https://instagram.com/theneurospace",
  },
  {
    icon: Podcast,
    title: "Podcast",
    description: "Episodios sobre neurociencia aplicada",
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
    link: "#",
  },
  {
    icon: FileText,
    title: "Blog",
    description: "Artículos profundos sobre TDAH",
    color: "bg-gradient-to-br from-orange-500 to-red-500",
    link: "#",
  },
  {
    icon: Video,
    title: "Videos",
    description: "Tutoriales y estrategias en video",
    color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    link: "#",
  },
  {
    icon: Mail,
    title: "Newsletter",
    description: "Contenido exclusivo semanal",
    color: "bg-gradient-to-br from-yellow-500 to-orange-500",
    link: "#",
  },
  {
    icon: Music,
    title: "Playlist Spotify",
    description: "Música para concentración",
    color: "bg-gradient-to-br from-green-600 to-green-700",
    link: "#",
  },
];

const HighlightsGridV2 = () => {
  return (
    <section className="py-24 md:py-36 bg-surface-warm">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <Badge variant="orange">EXPLORA EL ECOSISTEMA</Badge>
          <h2 className="text-h2 font-bold text-ink-strong">
            Contenido en todas las plataformas
          </h2>
          <p className="text-body-l text-ink-muted max-w-2xl mx-auto">
            Tips, estrategias y recursos para tu día a día
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.a
                key={highlight.title}
                href={highlight.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  group relative rounded-3xl p-8 md:p-10 overflow-hidden
                  ${highlight.color}
                  shadow-lg hover:shadow-2xl transition-all duration-300
                `}
              >
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                    <Icon className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={2} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-white/90 leading-snug">
                      {highlight.description}
                    </p>
                  </div>

                  <ExternalLink className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsGridV2;
