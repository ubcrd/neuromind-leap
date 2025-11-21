import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Instagram, Youtube, Podcast, FileText, ArrowRight } from "lucide-react";

const HighlightsGridV2Variant2 = () => {
  const highlights = [
    {
      icon: Instagram,
      title: "Instagram",
      description: "Tips diarios sobre TDAH",
      followers: "12K+",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Youtube,
      title: "YouTube",
      description: "Videos educativos",
      followers: "8K+",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Podcast,
      title: "Podcast",
      description: "Episodios semanales",
      followers: "5K+",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: FileText,
      title: "Blog",
      description: "Artículos especializados",
      followers: "15K+",
      color: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-br from-white via-surface-warm/30 to-white overflow-hidden">
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
              EXPLORA EL ECOSISTEMA
            </Badge>
            <h2 className="text-h2 font-bold text-ink-strong leading-tight">
              Contenido de valor en{" "}
              <span className="text-brand-primary-strong">todas las plataformas</span>
            </h2>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 h-full flex flex-col">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`} />
                  
                  <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-ink-strong mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-ink-muted">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-ink-muted/10">
                      <span className="text-xs font-bold text-ink-strong">
                        {item.followers} seguidores
                      </span>
                      <ArrowRight className="w-4 h-4 text-brand-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button size="lg" className="group">
              Ver todo el contenido
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsGridV2Variant2;
