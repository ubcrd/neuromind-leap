import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionWrapper } from "@/components/SectionWrapper";
import { fadeInUp, staggerContainer } from "@/lib/motion-presets";

// Contact form validation schema
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(100, { message: "El nombre es demasiado largo" })
    .nonempty({ message: "El nombre es requerido" }),
  email: z
    .string()
    .trim()
    .email({ message: "Por favor ingresa un email válido" })
    .max(255, { message: "El email es demasiado largo" })
    .nonempty({ message: "El email es requerido" }),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\s()-]{8,20}$/, { message: "Ingresa un teléfono válido" })
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(3, { message: "El asunto debe tener al menos 3 caracteres" })
    .max(200, { message: "El asunto es demasiado largo" })
    .nonempty({ message: "El asunto es requerido" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "El mensaje debe tener al menos 10 caracteres" })
    .max(1000, { message: "El mensaje debe tener máximo 1000 caracteres" })
    .nonempty({ message: "El mensaje es requerido" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as keyof ContactFormData] = error.message;
        }
      });
      setErrors(fieldErrors);
      toast({
        title: "Error de validación",
        description: "Por favor corrige los errores en el formulario",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would normally send to your backend/email service
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hola@theneurospace.com",
      link: "mailto:hola@theneurospace.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+1 (809) 555-0123",
      link: "tel:+18095550123",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Santo Domingo, República Dominicana",
      link: "https://maps.google.com/?q=Santo+Domingo,+Dominican+Republic",
    },
  ];

  const businessHours = [
    { day: "Lunes - Viernes", hours: "9:00 AM - 6:00 PM" },
    { day: "Sábado", hours: "10:00 AM - 2:00 PM" },
    { day: "Domingo", hours: "Cerrado" },
  ];

  return (
    <div className="min-h-screen bg-surface-warm">
      <Navbar />
      
      {/* Hero Section */}
      <SectionWrapper backgroundColor="white" padding="lg">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <Badge variant="orange" className="mb-6 text-base px-6 py-2">
              <Mail className="w-5 h-5" strokeWidth={3} />
              Contacto
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-h1 md:text-6xl font-bold text-ink-strong mb-6 leading-tight"
          >
            Hablemos sobre tu desarrollo
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-body-l text-ink-muted leading-relaxed"
          >
            ¿Tienes preguntas sobre nuestros servicios? ¿Quieres agendar una consulta? 
            Estamos aquí para ayudarte en tu camino hacia el crecimiento personal y profesional.
          </motion.p>
        </motion.div>
      </SectionWrapper>

      {/* Main Content */}
      <SectionWrapper backgroundColor="cream" padding="lg">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 md:p-10 rounded-tile shadow-card border-0">
              <h2 className="text-h3 font-bold text-ink-strong mb-6">
                Envíanos un mensaje
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-ink-strong mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      maxLength={100}
                      className={errors.name ? "border-destructive" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-xs text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-ink-strong mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      maxLength={255}
                      className={errors.email ? "border-destructive" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-xs text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-ink-strong mb-2">
                      Teléfono (opcional)
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      maxLength={20}
                      className={errors.phone ? "border-destructive" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p className="text-xs text-destructive mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-ink-strong mb-2">
                      Asunto *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      maxLength={200}
                      className={errors.subject ? "border-destructive" : ""}
                      disabled={isSubmitting}
                    />
                    {errors.subject && (
                      <p className="text-xs text-destructive mt-1">{errors.subject}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-ink-strong mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    maxLength={1000}
                    rows={6}
                    className={errors.message ? "border-destructive" : ""}
                    disabled={isSubmitting}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <p className="text-xs text-destructive">{errors.message}</p>
                    ) : (
                      <p className="text-xs text-ink-muted">
                        {formData.message.length}/1000 caracteres
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  <Send className="transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-ink-muted">
                  * Campos requeridos. Al enviar este formulario aceptas nuestra{" "}
                  <a href="/privacidad" className="text-brand-primary-strong underline">
                    política de privacidad
                  </a>
                  .
                </p>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info & Hours */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Info */}
            <Card className="p-8 rounded-tile shadow-card border-0">
              <h3 className="text-h4 font-bold text-ink-strong mb-6">
                Información de contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-warm transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand-primary-strong flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <info.icon className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="font-semibold text-ink-strong text-sm">{info.title}</p>
                      <p className="text-ink-muted text-sm">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="p-8 rounded-tile shadow-card border-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-primary-strong flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
                <h3 className="text-h4 font-bold text-ink-strong">
                  Horario de atención
                </h3>
              </div>
              <div className="space-y-3">
                {businessHours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between items-center py-2 border-b border-surface-warm last:border-0"
                  >
                    <span className="font-medium text-ink-strong text-sm">
                      {schedule.day}
                    </span>
                    <span className="text-ink-muted text-sm">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-ink-muted mt-4">
                Las citas se programan con anticipación. Consulta disponibilidad.
              </p>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Map Section */}
      <SectionWrapper backgroundColor="white" padding="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-h3 font-bold text-ink-strong mb-4">
              Nuestra ubicación
            </h2>
            <p className="text-body-m text-ink-muted">
              Encuéntranos en Santo Domingo, República Dominicana
            </p>
          </div>

          <div className="rounded-tile overflow-hidden shadow-card border-4 border-brand-primary-strong/20">
            <div className="w-full h-96 bg-gradient-to-br from-surface-warm to-white flex items-center justify-center">
              <div className="text-center space-y-4 p-8">
                <MapPin className="w-16 h-16 text-brand-primary-strong mx-auto" strokeWidth={2.5} />
                <p className="text-ink-strong font-semibold text-lg">
                  Santo Domingo, República Dominicana
                </p>
                <p className="text-ink-muted text-sm max-w-md">
                  Ubicación exacta proporcionada al confirmar tu cita
                </p>
                <Button variant="outline" asChild>
                  <a
                    href="https://maps.google.com/?q=Santo+Domingo,+Dominican+Republic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver en Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Contact;
