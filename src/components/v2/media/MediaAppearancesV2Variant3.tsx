import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Tv, Radio, Newspaper, Video, ExternalLink } from "lucide-react";

const MediaAppearancesV2Variant3 = () => {
  const media = [
    {
      icon: Tv,
      logo: "TN",
      title: "Todo Noticias",
      description: "Entrevista sobre TDAH en adultos y estrategias de manejo",
      date: "Mar 2024",
      color: "bg-red-500"
    },
    {
      icon: Radio,
      logo: "Mitre",
      title: "Radio Mitre",
      description: "Productividad y neurodiversidad en el ámbito laboral",
      date: "Feb 2024",
      color: "bg-blue-500"
    },
    {
      icon: Newspaper,
      logo: "La Nación",
      title: "La Nación",
      description: "Columna sobre estrategias de organización para el TDAH",
      date: "Ene 2024",
      color: "bg-gray-800"
    },
    {
      icon: Video,
      logo: "Neura",
      title: "Neura Podcast",
      description: "Invitada especial: Entendiendo el TDAH desde la neurociencia",
      date: "Dic 2023",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-br from-surface-warm via-white to-surface-warm overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <Badge variant="orange" className="text-xs font-semibold">
              APARICIONES EN MEDIOS
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-ink-strong leading-tight">
              Difundiendo{" "}
              <span className="text-brand-primary-strong">conocimiento</span>
            </h2>
            <p className="text-xl text-ink-muted max-w-2xl mx-auto">
              Compartiendo información sobre TDAH en los principales medios del país
            </p>
          </motion.div>

          {/* Media Grid - Card Style */}
          <div className="grid md:grid-cols-2 gap-6">
            {media.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 h-full">
                  {/* Header with Logo Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                      {item.logo}
                    </div>
                    <ExternalLink className="w-5 h-5 text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-brand-primary" />
                      <h3 className="text-xl font-bold text-ink-strong">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-ink-muted leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-4 border-t border-ink-muted/10">
                      <span className="text-xs font-semibold text-brand-primary uppercase tracking-wide">
                        {item.date}
                      </span>
                    </div>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-primary-strong opacity-0 group-hover:opacity-100 transition-opacity rounded-b-3xl" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Footer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center pt-8"
          >
            <div className="inline-flex items-center gap-8 px-8 py-6 bg-white rounded-2xl shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]">
              <div>
                <div className="text-3xl font-bold text-brand-primary-strong">20+</div>
                <div className="text-sm text-ink-muted">Apariciones</div>
              </div>
              <div className="w-px h-12 bg-ink-muted/20" />
              <div>
                <div className="text-3xl font-bold text-brand-primary-strong">8</div>
                <div className="text-sm text-ink-muted">Medios nacionales</div>
              </div>
              <div className="w-px h-12 bg-ink-muted/20" />
              <div>
                <div className="text-3xl font-bold text-brand-primary-strong">100K+</div>
                <div className="text-sm text-ink-muted">Alcance total</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MediaAppearancesV2Variant3;
