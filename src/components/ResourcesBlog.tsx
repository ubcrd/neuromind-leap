import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { InstagramCard } from "@/components/InstagramCard";
import { SectionWrapper } from "@/components/SectionWrapper";
import { staggerContainer, fadeInUp } from "@/lib/motion-presets";

const ResourcesBlog = () => {
  const articles = [
    {
      title: "Cómo recuperar tu atención en 10 minutos",
      excerpt: "Técnicas probadas para entrenar tu enfoque diario. Aprende estrategias rápidas y efectivas.",
      readTime: "5 min",
      category: "NEUROCIENCIA",
      bgColor: "orange" as const,
    },
    {
      title: "Descanso inteligente: la clave del rendimiento",
      excerpt: "Por qué el tiempo libre es productividad real y cómo aprovecharlo correctamente.",
      readTime: "4 min",
      category: "BIENESTAR",
      bgColor: "dark" as const,
    },
    {
      title: "Neuroaprendizaje para adultos",
      excerpt: "Cómo tu cerebro sigue aprendiendo y cómo aprovecharlo para crecer profesionalmente.",
      readTime: "6 min",
      category: "APRENDIZAJE",
      bgColor: "green" as const,
    },
    {
      title: "Gestión del estrés desde la neurociencia",
      excerpt: "Comprende cómo funciona el estrés en tu cerebro y toma el control de tus respuestas.",
      readTime: "7 min",
      category: "NEUROCIENCIA",
      bgColor: "burgundy" as const,
    },
  ];

  return (
    <SectionWrapper backgroundColor="cream" padding="lg">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <Badge variant="solid" className="mb-6 text-base px-6 py-2">
            <BookOpen className="w-5 h-5" strokeWidth={3} />
            Recursos
          </Badge>
          <h2 className="text-h2 md:text-5xl font-bold mb-6 text-ink-strong leading-tight">
            Aprende a aplicar la ciencia a tu vida
          </h2>
          <p className="text-body-l text-ink-muted max-w-2xl mx-auto">
            Explora artículos y guías prácticas sobre atención, descanso y neuroaprendizaje.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {articles.map((article, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <InstagramCard {...article} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          variants={fadeInUp}
        >
          <Button size="xl" className="group">
            Visita el Blog
            <BookOpen className="transition-transform group-hover:scale-110" />
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default ResourcesBlog;
