import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const FinalCTAVariant1 = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-brand-primary via-brand-primary-strong to-brand-primary px-6">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <Sparkles className="w-16 h-16 text-white mx-auto" strokeWidth={3} />
        
        <h2 className="text-h2 md:text-5xl font-bold text-white leading-tight">
          Da el primer paso hacia una mente más enfocada y organizada
        </h2>
        
        <p className="text-xl text-white/90 max-w-2xl mx-auto font-['Manrope']">
          Comienza tu viaje hacia una mejor comprensión de tu mente y tu potencial.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button size="xl" variant="solid-dark" className="group">
            Haz el test gratuito
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="xl" variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-brand-primary-strong border-white">
            Agenda tu entrevista inicial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTAVariant1;
