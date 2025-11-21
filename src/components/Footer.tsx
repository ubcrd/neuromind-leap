import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brain, Instagram, Linkedin, Youtube, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Newsletter validation schema
const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Por favor ingresa un email válido" })
    .max(255, { message: "El email es demasiado largo" })
    .nonempty({ message: "El email es requerido" }),
});

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    const result = newsletterSchema.safeParse({ email });
    
    if (!result.success) {
      toast({
        title: "Error de validación",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would normally send to your newsletter service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "¡Suscripción exitosa!",
        description: "Gracias por suscribirte a nuestro newsletter.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu suscripción. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigationLinks = {
    servicios: [
      { name: "Evaluaciones clínicas", path: "/servicios#evaluaciones" },
      { name: "Coaching vocacional", path: "/servicios#vocacional" },
      { name: "Talleres y conferencias", path: "/servicios#talleres" },
      { name: "Consultoría empresarial", path: "/servicios#empresarial" },
    ],
    recursos: [
      { name: "Blog", path: "/blog" },
      { name: "Test gratuito", path: "/test" },
      { name: "Guías descargables", path: "/recursos" },
      { name: "Podcast", path: "/podcast" },
    ],
    empresa: [
      { name: "Sobre nosotros", path: "/sobre-nosotros" },
      { name: "Contacto", path: "/contacto" },
      { name: "Prensa", path: "/prensa" },
      { name: "Testimonios", path: "/testimonios" },
    ],
  };

  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/theneurospace" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/theneurospace" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/@theneurospace" },
    { name: "Email", icon: Mail, url: "mailto:hola@theneurospace.com" },
  ];

  return (
    <footer className="bg-ink-strong text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/">
              <motion.div 
                className="flex items-center gap-3 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-12 h-12 rounded-full bg-brand-primary-strong flex items-center justify-center border-4 border-brand-primary-strong">
                  <Brain className="w-7 h-7 text-white" strokeWidth={3} />
                </div>
                <span className="text-xl font-bold uppercase tracking-wide text-brand-primary-strong">
                  The NeuroSpace
                </span>
              </motion.div>
            </Link>
            
            <p className="text-white/80 leading-relaxed font-['Manrope']">
              Coaching neurocientífico para adultos y empresas. Transforma tu potencial en resultados con base científica.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-primary-strong flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" strokeWidth={2.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-brand-primary-strong font-bold uppercase tracking-wide text-sm mb-4">
                Servicios
              </h3>
              <ul className="space-y-3">
                {navigationLinks.servicios.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-white/70 hover:text-brand-primary-strong transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-brand-primary-strong font-bold uppercase tracking-wide text-sm mb-4">
                Recursos
              </h3>
              <ul className="space-y-3">
                {navigationLinks.recursos.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-white/70 hover:text-brand-primary-strong transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-brand-primary-strong font-bold uppercase tracking-wide text-sm mb-4">
                Empresa
              </h3>
              <ul className="space-y-3">
                {navigationLinks.empresa.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-white/70 hover:text-brand-primary-strong transition-colors text-sm font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-3">
            <h3 className="text-brand-primary-strong font-bold uppercase tracking-wide text-sm mb-4">
              Newsletter
            </h3>
            <p className="text-white/70 text-sm mb-4 leading-relaxed">
              Recibe tips de neurociencia aplicada directo en tu inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={255}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-brand-primary-strong focus:ring-brand-primary-strong"
                disabled={isSubmitting}
              />
              <Button 
                type="submit"
                size="default"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Suscribirse"}
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
            
            <p className="text-white/50 text-xs mt-3">
              Al suscribirte aceptas nuestra{" "}
              <Link to="/privacidad" className="underline hover:text-brand-primary-strong">
                política de privacidad
              </Link>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p className="font-['Manrope']">
              © {new Date().getFullYear()} The NeuroSpace. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link to="/privacidad" className="hover:text-brand-primary-strong transition-colors">
                Privacidad
              </Link>
              <Link to="/terminos" className="hover:text-brand-primary-strong transition-colors">
                Términos
              </Link>
              <Link to="/cookies" className="hover:text-brand-primary-strong transition-colors">
                Cookies
              </Link>
            </div>
          </div>
          <p className="text-white/50 text-xs text-center mt-4 font-['Manrope']">
            Contenido psicoeducativo. No sustituye evaluación clínica profesional.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
