import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: "Test", path: "/test" },
    { name: "Blog", path: "/blog" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-ink-strong backdrop-blur-sm border-b-4 border-brand-primary-strong shadow-elevation-high"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 rounded-full bg-brand-primary-strong flex items-center justify-center border-4 border-brand-primary-strong">
                <Brain className="w-7 h-7 text-white" strokeWidth={3} />
              </div>
              <span className="text-2xl font-bold uppercase tracking-wide text-brand-primary-strong">
                The NeuroSpace
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link key={link.path} to={link.path}>
                  <motion.div
                    className="relative"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    <span
                      className={`font-bold uppercase tracking-wide text-base cursor-pointer transition-colors ${
                        isActive
                          ? "text-brand-primary-strong"
                          : "text-white hover:text-brand-primary-strong"
                      }`}
                    >
                      {link.name}
                    </span>
                    {/* Animated underline */}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary-strong"
                      initial={{ scaleX: isActive ? 1 : 0, originX: 0 }}
                      variants={{
                        hover: {
                          scaleX: 1,
                          transition: { duration: 0.3, ease: "easeOut" }
                        }
                      }}
                      style={{ scaleX: isActive ? 1 : 0, originX: 0 }}
                    />
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="px-8 py-6 rounded-full font-bold uppercase tracking-wide">
              Agenda ahora
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="w-8 h-8 text-brand-primary-strong" strokeWidth={3} />
            ) : (
              <Menu className="w-8 h-8 text-brand-primary-strong" strokeWidth={3} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-6 pb-6 space-y-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {links.map((link, index) => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`py-3 px-6 rounded-2xl font-bold uppercase tracking-wide ${
                      location.pathname === link.path
                        ? "bg-brand-primary-strong text-white"
                        : "bg-white text-ink-strong hover:bg-brand-primary-strong/10"
                    }`}
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.1 }}
              >
                <Button className="w-full py-6 rounded-full font-bold uppercase tracking-wide">
                  Agenda ahora
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
