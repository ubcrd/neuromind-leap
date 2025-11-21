import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Tv, Radio, Newspaper, Video } from "lucide-react";

const MediaAppearancesV2Variant2 = () => {
  const appearances = [
    {
      icon: Tv,
      type: "Televisión",
      title: "Entrevista en TN sobre TDAH en adultos",
      network: "Todo Noticias",
      date: "Marzo 2024",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Radio,
      type: "Radio",
      title: "Productividad y neurodiversidad en el trabajo",
      network: "Radio Mitre",
      date: "Febrero 2024",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Newspaper,
      type: "Prensa",
      title: "Columna sobre estrategias de organización",
      network: "La Nación",
      date: "Enero 2024",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Video,
      type: "Podcast",
      title: "Invitada especial: Entendiendo el TDAH",
      network: "Neura Podcast",
      date: "Diciembre 2023",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="space-y-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <Badge variant="orange" className="text-xs font-semibold">
              APARICIONES EN MEDIOS
            </Badge>
            <h2 className="text-h2 font-bold text-ink-strong leading-tight">
              Compartiendo conocimiento en{" "}
              <span className="text-brand-primary-strong">medios nacionales</span>
            </h2>
          </motion.div>

          {/* Appearances Timeline */}
          <div className="max-w-4xl mx-auto space-y-6">
            {appearances.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-surface-warm to-white rounded-3xl p-8 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300">
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-brand-primary uppercase tracking-wide">
                          {item.type}
                        </span>
                        <span className="text-xs text-ink-muted">
                          {item.date}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-ink-strong mb-2 group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-sm text-ink-muted">
                        {item.network}
                      </p>
                    </div>

                    {/* Badge */}
                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaAppearancesV2Variant2;
