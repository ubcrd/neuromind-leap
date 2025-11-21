import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";

const ResourcesBlogV2Variant2 = () => {
  const posts = [
    {
      title: "10 estrategias para mejorar tu productividad con TDAH",
      category: "TDAH",
      date: "15 Mar 2024",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      excerpt: "Descubre técnicas probadas que te ayudarán a maximizar tu productividad diaria."
    },
    {
      title: "Cómo crear rutinas que realmente funcionen",
      category: "Productividad",
      date: "12 Mar 2024",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop",
      excerpt: "Las claves para diseñar rutinas adaptadas a tu estilo de vida y cerebro."
    },
    {
      title: "Neurodiversidad en el trabajo: Guía para empresas",
      category: "Empresas",
      date: "8 Mar 2024",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
      excerpt: "Cómo crear un entorno laboral inclusivo y aprovechar el potencial neurodivergente."
    }
  ];

  return (
    <section className="relative py-24 md:py-36 bg-gradient-to-br from-surface-warm via-white to-surface-warm overflow-hidden">
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
              RECURSOS Y BLOG
            </Badge>
            <h2 className="text-h2 font-bold text-ink-strong leading-tight">
              Aprende sobre{" "}
              <span className="text-brand-primary-strong">TDAH y productividad</span>
            </h2>
            <p className="text-body-l text-ink-muted">
              Artículos, guías y recursos basados en evidencia científica
            </p>
          </motion.div>

          {/* Posts List */}
          <div className="max-w-5xl mx-auto space-y-6">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300 cursor-pointer"
              >
                <div className="grid md:grid-cols-[300px_1fr] gap-6">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-brand-primary text-white text-xs font-bold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-ink-muted mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} lectura</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-ink-strong mb-3 group-hover:text-brand-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-ink-muted mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-brand-primary font-semibold">
                      <span>Leer artículo</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center pt-6"
          >
            <Button size="lg" variant="outline" className="group">
              Ver todos los artículos
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesBlogV2Variant2;
