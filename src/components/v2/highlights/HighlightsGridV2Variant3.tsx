import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Instagram, Youtube, Podcast, FileText, Calendar, Video, Music } from "lucide-react";

const HighlightsGridV2Variant3 = () => {
  const channels = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@neurospace.tdah",
      followers: "12K",
      color: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "NeuroSpace",
      followers: "8K",
      color: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      icon: Podcast,
      name: "Podcast",
      handle: "TDAH sin filtros",
      followers: "5K",
      color: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      icon: FileText,
      name: "Blog",
      handle: "neurospace.com/blog",
      followers: "15K",
      color: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      icon: Calendar,
      name: "Newsletter",
      handle: "Semanal",
      followers: "3K",
      color: "bg-gradient-to-br from-orange-500 to-amber-600"
    },
    {
      icon: Music,
      name: "Spotify",
      handle: "Focus Playlists",
      followers: "2K",
      color: "bg-gradient-to-br from-emerald-500 to-teal-600"
    },
    {
      icon: Video,
      name: "TikTok",
      handle: "@neurospace",
      followers: "4K",
      color: "bg-gradient-to-br from-gray-800 to-gray-900"
    }
  ];

  return (
    <section className="relative py-24 md:py-36 bg-ink-deep-brown overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="space-y-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-xs font-bold text-white uppercase tracking-widest">
                Ecosistema Completo
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Conecta en todas las{" "}
              <span className="text-brand-primary">plataformas</span>
            </h2>
          </motion.div>

          {/* Compact Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-7xl mx-auto">
            {channels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-300 h-full flex flex-col items-center text-center">
                  {/* Icon with gradient */}
                  <div className={`w-14 h-14 rounded-xl ${channel.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <channel.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white">
                      {channel.name}
                    </h3>
                    <p className="text-xs text-white/60">
                      {channel.handle}
                    </p>
                    <div className="text-xs font-bold text-brand-primary pt-2">
                      {channel.followers}+ seguidores
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-brand-primary mb-2">50K+</div>
                  <div className="text-sm text-white/70 uppercase tracking-wide">Seguidores totales</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-primary mb-2">300+</div>
                  <div className="text-sm text-white/70 uppercase tracking-wide">Contenidos publicados</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-brand-primary mb-2">7</div>
                  <div className="text-sm text-white/70 uppercase tracking-wide">Plataformas activas</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsGridV2Variant3;
