import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Brain,
  Compass,
  Users,
  Target,
  Sparkles,
  MessageSquare,
  CheckCircle,
  TrendingUp,
  Award,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const mainServices = [
    {
      icon: Brain,
      title: "Evaluaciones Clínicas y Diagnósticas",
      description: "Evaluación integral de tu perfil cognitivo y emocional",
      features: [
        "Evaluación neuropsicológica completa",
        "Diagnóstico de TDAH y dificultades de aprendizaje",
        "Perfil de fortalezas y áreas de mejora",
        "Recomendaciones personalizadas",
      ],
      bgColor: "bg-primary",
      textColor: "text-dark-bg",
      iconBg: "bg-dark-bg",
      iconColor: "text-primary",
    },
    {
      icon: Compass,
      title: "Evaluaciones Vocacionales y Laborales",
      description: "Descubre tu camino profesional ideal con base científica",
      features: [
        "Test de intereses y aptitudes",
        "Análisis de personalidad laboral",
        "Orientación vocacional para estudiantes",
        "Reorientación profesional para adultos",
      ],
      bgColor: "bg-secondary",
      textColor: "text-dark-bg",
      iconBg: "bg-dark-bg",
      iconColor: "text-secondary",
    },
    {
      icon: Users,
      title: "Talleres y Conferencias",
      description: "Neurociencia aplicada para equipos y organizaciones",
      features: [
        "Talleres de neuroproductividad",
        "Gestión del estrés y burnout",
        "Comunicación efectiva basada en neurociencia",
        "Liderazgo consciente",
      ],
      bgColor: "bg-teal",
      textColor: "text-white",
      iconBg: "bg-primary",
      iconColor: "text-white",
    },
  ];

  const additionalServices = [
    {
      icon: Target,
      title: "Coaching Individual",
      description: "Acompañamiento personalizado para alcanzar tus objetivos.",
    },
    {
      icon: Sparkles,
      title: "Programas para Empresas",
      description: "Soluciones integrales de bienestar organizacional.",
    },
    {
      icon: MessageSquare,
      title: "Consultoría Educativa",
      description: "Asesoría para instituciones educativas y familias.",
    },
  ];

  const stats = [
    { number: "500+", label: "Evaluaciones Realizadas", icon: CheckCircle },
    { number: "50+", label: "Talleres Impartidos", icon: Users },
    { number: "95%", label: "Satisfacción de Clientes", icon: TrendingUp },
    { number: "10+", label: "Años de Experiencia", icon: Award },
  ];

  const process = [
    {
      step: "01",
      title: "Entrevista Inicial",
      description: "Conversamos sobre tus necesidades y objetivos.",
    },
    {
      step: "02",
      title: "Evaluación",
      description: "Aplicamos las herramientas diagnósticas adecuadas.",
    },
    {
      step: "03",
      title: "Análisis",
      description: "Interpretamos los resultados con base científica.",
    },
    {
      step: "04",
      title: "Recomendaciones",
      description: "Creamos un plan de acción personalizado.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-full border-4 border-primary"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-5 h-5 text-white" strokeWidth={3} />
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                Nuestros Servicios
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Transformamos la{" "}
              <span className="text-primary">neurociencia</span> en soluciones{" "}
              <span className="text-secondary">reales</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Servicios especializados en evaluación psicológica, orientación y formación
              con base científica para individuos, familias y organizaciones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-24 px-6 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card
                  className={`p-10 md:p-12 rounded-[3rem] ${service.bgColor} border-4 border-transparent shadow-2xl overflow-hidden`}
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <motion.div
                        className={`w-24 h-24 rounded-3xl ${service.iconBg} flex items-center justify-center`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon
                          className={`w-12 h-12 ${service.iconColor}`}
                          strokeWidth={3}
                        />
                      </motion.div>

                      <h2
                        className={`text-4xl md:text-5xl font-bold ${service.textColor} leading-tight uppercase tracking-wide`}
                      >
                        {service.title}
                      </h2>

                      <p
                        className={`text-xl ${service.textColor} leading-relaxed font-medium opacity-90`}
                      >
                        {service.description}
                      </p>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size="lg"
                          className={`px-10 py-7 rounded-full font-bold uppercase tracking-wide ${
                            index === 2
                              ? "bg-white text-teal hover:bg-primary hover:text-white"
                              : "bg-dark-bg text-white hover:bg-foreground"
                          } border-4 ${
                            index === 2 ? "border-white" : "border-dark-bg"
                          }`}
                        >
                          Más información
                        </Button>
                      </motion.div>
                    </div>

                    <div className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-4"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div
                            className={`w-8 h-8 rounded-full ${service.iconBg} flex items-center justify-center flex-shrink-0 mt-1`}
                          >
                            <CheckCircle
                              className={`w-5 h-5 ${service.iconColor}`}
                              strokeWidth={3}
                            />
                          </div>
                          <p
                            className={`text-lg ${service.textColor} font-medium leading-relaxed`}
                          >
                            {feature}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-dark-bg">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight uppercase tracking-wide">
              Resultados que hablan por sí mismos
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="p-8 rounded-[2rem] bg-primary border-4 border-primary">
                  <stat.icon className="w-12 h-12 text-dark-bg mx-auto mb-4" strokeWidth={3} />
                  <h3 className="text-5xl font-bold text-dark-bg mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-lg font-bold text-dark-bg uppercase tracking-wide">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-cream">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight uppercase tracking-wide">
              Nuestro proceso
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cuatro pasos simples para tu transformación
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-8 rounded-[2rem] bg-white border-4 border-primary h-full relative overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {item.step}
                    </span>
                  </div>
                  <Clock className="w-12 h-12 text-primary mb-6" strokeWidth={3} />
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 px-6 bg-dark-bg">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight uppercase tracking-wide">
              También ofrecemos
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              >
                <Card className="p-10 rounded-[3rem] bg-secondary border-4 border-secondary h-full cursor-pointer">
                  <motion.div
                    className="w-20 h-20 rounded-3xl bg-dark-bg flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-10 h-10 text-secondary" strokeWidth={3} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-dark-bg uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-lg text-dark-bg leading-relaxed font-medium">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight uppercase tracking-wide">
              ¿Listo para comenzar?
            </h2>
            <p className="text-2xl text-white max-w-2xl mx-auto font-['Scope_One']">
              Agenda tu entrevista inicial sin compromiso y descubre cómo podemos ayudarte.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="text-lg px-12 py-8 rounded-full bg-white text-primary hover:bg-dark-bg hover:text-white font-bold uppercase tracking-wider border-4 border-white shadow-2xl"
              >
                Agendar entrevista inicial
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
