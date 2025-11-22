import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const ResourcesBlogVariant3 = () => {
  const articles = [
    {
      title: "Cómo recuperar tu atención en 10 minutos",
      category: "NEUROCIENCIA",
      color: "from-accent-deepgreen to-accent-navy"
    },
    {
      title: "Descanso inteligente: la clave del rendimiento",
      category: "BIENESTAR",
      color: "from-brand-primary to-brand-primary-strong"
    },
    {
      title: "Neuroaprendizaje para adultos",
      category: "APRENDIZAJE",
      color: "from-accent-burgundy to-accent-deepgreen"
    },
    {
      title: "Gestión del estrés desde la neurociencia",
      category: "NEUROCIENCIA",
      color: "from-accent-navy to-ink-strong"
    },
  ];

  return (
    <SectionWrapper backgroundColor="dark" padding="lg">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-h2 font-bold text-white mb-4"
        >
          Últimos artículos del blog
        </motion.h2>
        <p className="text-xl text-white/70">
          Contenido valioso para tu crecimiento
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.03 }}
            className="group cursor-pointer"
          >
            <div className={`h-full rounded-tile-lg bg-gradient-to-br ${article.color} p-8 relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              
              <div className="relative space-y-4">
                <div className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
                  {article.category}
                </div>
                
                <h3 className="text-2xl font-bold text-white leading-tight pr-8">
                  {article.title}
                </h3>

                <div className="flex items-center gap-2 text-white/90 pt-2">
                  <span className="text-sm font-medium">Leer artículo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button size="xl" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-ink-strong group">
          Explorar el blog completo
          <ArrowRight className="transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </SectionWrapper>
  );
};

export default ResourcesBlogVariant3;
