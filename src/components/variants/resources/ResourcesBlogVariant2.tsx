import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

const ResourcesBlogVariant2 = () => {
  const articles = [
    {
      title: "Cómo recuperar tu atención en 10 minutos",
      excerpt: "Técnicas probadas para entrenar tu enfoque diario con estrategias basadas en neurociencia.",
      readTime: "5 min",
      category: "NEUROCIENCIA",
    },
    {
      title: "Descanso inteligente: la clave del rendimiento",
      excerpt: "Por qué el tiempo libre es productividad real y cómo aprovecharlo correctamente.",
      readTime: "4 min",
      category: "BIENESTAR",
    },
    {
      title: "Neuroaprendizaje para adultos",
      excerpt: "Cómo tu cerebro sigue aprendiendo y cómo aprovecharlo para crecer profesionalmente.",
      readTime: "6 min",
      category: "APRENDIZAJE",
    },
  ];

  return (
    <SectionWrapper backgroundColor="white" padding="lg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-h2 font-bold text-ink-strong mb-4"
          >
            Blog y recursos
          </motion.h2>
          <p className="text-xl text-ink-muted">
            Conocimiento práctico para tu día a día
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="group cursor-pointer"
            >
              <div className="p-8 rounded-tile-lg bg-surface-warm border-2 border-transparent hover:border-brand-primary-strong hover:shadow-card transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary-strong">
                        <Tag className="w-3 h-3" />
                        {article.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-ink-strong group-hover:text-brand-primary-strong transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-ink-muted leading-relaxed">{article.excerpt}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-brand-primary-strong group-hover:translate-x-2 transition-transform flex-shrink-0" />
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
          <Button size="xl" className="group">
            Ver todos los artículos
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ResourcesBlogVariant2;
