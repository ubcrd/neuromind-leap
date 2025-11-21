import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";

const categories = ["Todos", "TDAH", "Productividad", "Empresas", "Neurociencia"];

const posts = [
  {
    title: "5 estrategias para manejar el TDAH en el trabajo",
    category: "TDAH",
    date: "15 Mar 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    color: "bg-brand-primary-strong",
  },
  {
    title: "Productividad sin burnout: el enfoque neurocientífico",
    category: "Productividad",
    date: "10 Mar 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    color: "bg-accent-deepgreen",
  },
  {
    title: "Cómo crear equipos neurodiversos exitosos",
    category: "Empresas",
    date: "5 Mar 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    color: "bg-accent-navy",
  },
  {
    title: "Neuroplasticidad: tu cerebro puede cambiar",
    category: "Neurociencia",
    date: "1 Mar 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
    color: "bg-accent-burgundy",
  },
];

const ResourcesBlogV2 = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = selectedCategory === "Todos" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-24 md:py-36 bg-surface-warm">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <Badge variant="orange">RECURSOS</Badge>
          <h2 className="text-h2 font-bold text-ink-strong">
            Blog y recursos
          </h2>
          <p className="text-body-l text-ink-muted max-w-2xl mx-auto">
            Artículos, guías y estrategias basadas en neurociencia
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${selectedCategory === category
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'bg-white text-ink-muted hover:bg-white/80 hover:text-ink-strong'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image with Color Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${post.color} opacity-40 group-hover:opacity-30 transition-opacity`} />
                
                <Badge 
                  variant="solid" 
                  className="absolute top-4 left-4 bg-white/90 text-ink-strong backdrop-blur-sm"
                >
                  {post.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-ink-strong leading-snug group-hover:text-brand-primary-strong transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Footer Metadata */}
                <div className="flex items-center justify-between text-xs text-ink-muted pt-2 border-t border-ink-muted/10">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Hover CTA */}
                <div className="flex items-center gap-2 text-sm text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-medium">Leer más</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesBlogV2;
