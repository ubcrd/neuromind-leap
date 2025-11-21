import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ResourcesBlogV2Variant3 = () => {
  const featured = {
    title: "La guía completa del TDAH en adultos",
    category: "GUÍA COMPLETA",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop",
    description: "Todo lo que necesitas saber sobre el TDAH: desde el diagnóstico hasta las estrategias más efectivas para mejorar tu calidad de vida."
  };

  const posts = [
    {
      title: "10 estrategias para mejorar tu productividad",
      category: "TDAH",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=400&fit=crop"
    },
    {
      title: "Cómo crear rutinas que funcionen",
      category: "Productividad",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop"
    },
    {
      title: "Neurodiversidad en el trabajo",
      category: "Empresas",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
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
            className="max-w-2xl"
          >
            <Badge variant="orange" className="text-xs font-semibold mb-6">
              RECURSOS Y BLOG
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-ink-strong leading-tight">
              Contenido que{" "}
              <span className="text-brand-primary-strong">transforma</span>
            </h2>
          </motion.div>

          {/* Magazine-style Layout */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Featured Post - Large */}
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:row-span-2 group cursor-pointer"
            >
              <div className="relative h-full bg-gradient-to-br from-surface-warm to-white rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)] transition-all duration-300">
                {/* Image */}
                <div className="relative h-96 lg:h-full overflow-hidden">
                  <img 
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-deep-brown via-ink-deep-brown/40 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                    <Badge className="bg-brand-primary text-white border-none mb-4">
                      {featured.category}
                    </Badge>
                    <h3 className="text-4xl font-bold mb-4 leading-tight">
                      {featured.title}
                    </h3>
                    <p className="text-lg text-white/90 mb-6 leading-relaxed">
                      {featured.description}
                    </p>
                    <Button 
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-ink-strong group/btn"
                    >
                      Leer guía completa
                      <ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Secondary Posts - Compact */}
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-full bg-gradient-to-br from-surface-warm to-white rounded-3xl overflow-hidden shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-300">
                  <div className="grid md:grid-cols-[180px_1fr] gap-6">
                    {/* Image */}
                    <div className="relative h-48 md:h-auto overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-center">
                      <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold text-ink-strong mb-3 group-hover:text-brand-primary transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-2 text-brand-primary font-semibold text-sm">
                        <span>Leer más</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
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
            className="text-center"
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

export default ResourcesBlogV2Variant3;
