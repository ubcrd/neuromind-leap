import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Square, 
  FormInput, 
  Navigation, 
  Bell, 
  Layers, 
  Eye,
  Shapes,
  Code
} from "lucide-react";

// Import demo sections
import ButtonsDemo from "@/components/showcase/ButtonsDemo";
import FormsDemo from "@/components/showcase/FormsDemo";
import NavigationDemo from "@/components/showcase/NavigationDemo";
import FeedbackDemo from "@/components/showcase/FeedbackDemo";
import OverlayDemo from "@/components/showcase/OverlayDemo";
import DisplayDemo from "@/components/showcase/DisplayDemo";
import CustomDemo from "@/components/showcase/CustomDemo";

const categories = [
  { id: "buttons", name: "Buttons & Cards", icon: Square, component: ButtonsDemo },
  { id: "forms", name: "Form Controls", icon: FormInput, component: FormsDemo },
  { id: "navigation", name: "Navigation", icon: Navigation, component: NavigationDemo },
  { id: "feedback", name: "Feedback", icon: Bell, component: FeedbackDemo },
  { id: "overlay", name: "Overlays", icon: Layers, component: OverlayDemo },
  { id: "display", name: "Display", icon: Eye, component: DisplayDemo },
  { id: "custom", name: "Custom Components", icon: Shapes, component: CustomDemo },
];

const ComponentsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("buttons");

  const ActiveComponent = categories.find((cat) => cat.id === activeCategory)?.component || ButtonsDemo;

  return (
    <div className="min-h-screen bg-surface-warm pt-20">
      {/* Header */}
      <div className="bg-ink-strong text-white py-12 border-b-4 border-brand-primary-strong">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Code className="w-12 h-12 text-brand-primary-strong" strokeWidth={2.5} />
              <h1 className="text-h1 font-bold">UI Components Showcase</h1>
            </div>
            <p className="text-body-l text-ink-muted">
              Explora y prueba todos los componentes UI disponibles con ejemplos interactivos en vivo
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-64 lg:sticky lg:top-24 lg:self-start"
          >
            <div className="bg-white rounded-card shadow-card p-6 border border-border">
              <h2 className="text-h4 font-bold text-ink-strong mb-4">Categorías</h2>
              <nav className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;
                  
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                        isActive
                          ? "bg-brand-primary text-white"
                          : "text-ink-strong hover:bg-surface-warm"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm">{category.name}</span>
                    </motion.button>
                  );
                })}
              </nav>
            </div>

            {/* Info Card */}
            <div className="bg-brand-primary/10 rounded-card p-6 mt-6 border-2 border-brand-primary">
              <h3 className="text-h4 font-bold text-ink-strong mb-2">💡 Tip</h3>
              <p className="text-body-m text-ink-muted">
                Todos los componentes usan tokens semánticos del design system. Puedes personalizar colores, espaciado y tipografía desde <code className="bg-white px-2 py-1 rounded text-sm">index.css</code>.
              </p>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <ActiveComponent />
          </motion.main>
        </div>
      </div>
    </div>
  );
};

export default ComponentsShowcase;
