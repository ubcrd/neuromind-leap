import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tile } from "@/components/ui/tile";
import { Brain, Target, Zap, Heart, Sparkles, Rocket } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SectionCarousel } from "@/components/ui/section-carousel";

// Demo variants for carousel
const DemoVariant1 = () => (
  <div className="bg-brand-primary text-white p-12 rounded-card">
    <h3 className="text-h3 font-bold mb-4">Variante 1</h3>
    <p className="text-body-l">Estilo naranja brillante con texto blanco</p>
  </div>
);

const DemoVariant2 = () => (
  <div className="bg-ink-strong text-white p-12 rounded-card">
    <h3 className="text-h3 font-bold mb-4">Variante 2</h3>
    <p className="text-body-l">Estilo oscuro minimalista</p>
  </div>
);

const DemoVariant3 = () => (
  <div className="bg-accent-deepgreen text-white p-12 rounded-card">
    <h3 className="text-h3 font-bold mb-4">Variante 3</h3>
    <p className="text-body-l">Estilo verde profundo elegante</p>
  </div>
);

const CustomDemo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-h2 font-bold text-ink-strong mb-2">Custom Components</h2>
        <p className="text-body-m text-ink-muted">
          Componentes personalizados específicos del proyecto NeuroSpace
        </p>
      </div>

      {/* Tile Component */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Tile Component</h3>
        <Card>
          <CardHeader>
            <CardTitle>Tiles Interactivos</CardTitle>
            <CardDescription>Cards animados con iconos para acciones y navegación</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-4 text-ink-strong">Variantes de color:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Tile
                  icon={Brain}
                  title="EVALÚA"
                  variant="orange"
                  onClick={() => console.log('Orange tile clicked')}
                />
                <Tile
                  icon={Target}
                  title="ENFOCA"
                  variant="dark"
                  onClick={() => console.log('Dark tile clicked')}
                />
                <Tile
                  icon={Zap}
                  title="APLICA"
                  variant="green"
                  onClick={() => console.log('Green tile clicked')}
                />
              </div>
            </div>

            <Separator />

            <div>
              <p className="text-sm font-medium mb-4 text-ink-strong">Más variantes:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Tile
                  icon={Heart}
                  title="BURGUNDY"
                  variant="burgundy"
                />
                <Tile
                  icon={Sparkles}
                  title="NAVY"
                  variant="navy"
                />
                <Tile
                  icon={Rocket}
                  title="ORANGE"
                  variant="orange"
                />
              </div>
            </div>

            <Separator />

            <div>
              <p className="text-sm font-medium mb-4 text-ink-strong">Diferentes tamaños:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Tile
                  icon={Brain}
                  title="DEFAULT"
                  variant="orange"
                  size="default"
                />
                <Tile
                  icon={Target}
                  title="LARGE"
                  variant="dark"
                  size="lg"
                />
                <Tile
                  icon={Zap}
                  title="EXTRA LARGE"
                  variant="green"
                  size="xl"
                />
              </div>
            </div>

            <Separator />

            <div>
              <p className="text-sm font-medium mb-4 text-ink-strong">Tamaños de iconos:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Tile
                  icon={Brain}
                  title="ICON XL"
                  variant="orange"
                  iconSize="xl"
                />
                <Tile
                  icon={Target}
                  title="ICON 2XL"
                  variant="dark"
                  iconSize="2xl"
                />
                <Tile
                  icon={Zap}
                  title="ICON 3XL"
                  variant="green"
                  iconSize="3xl"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section Carousel */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Section Carousel</h3>
        <Card>
          <CardHeader>
            <CardTitle>Carrusel de Variantes</CardTitle>
            <CardDescription>
              Carrusel especializado para mostrar múltiples variantes de diseño de una sección
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-4 text-ink-strong">Ejemplo interactivo:</p>
              <SectionCarousel
                showDots={true}
                showArrows={true}
                arrowPosition="inside"
                autoPlay={false}
              >
                <DemoVariant1 />
                <DemoVariant2 />
                <DemoVariant3 />
              </SectionCarousel>
            </div>

            <Separator />

            <div className="p-4 bg-surface-warm rounded-lg border border-border space-y-3">
              <h4 className="font-semibold text-ink-strong">Características:</h4>
              <ul className="text-sm text-ink-muted space-y-2">
                <li>✓ Navegación con flechas (dentro o fuera)</li>
                <li>✓ Indicadores de puntos</li>
                <li>✓ Reproducción automática opcional</li>
                <li>✓ Perfecto para A/B testing de diseños</li>
                <li>✓ Usado en toda la home para mostrar variantes</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Props Documentation */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Documentación de Props</h3>
        
        <div className="space-y-6">
          {/* Tile Props */}
          <Card>
            <CardHeader>
              <CardTitle>Tile Props</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4 font-semibold">Prop</th>
                      <th className="text-left py-2 px-4 font-semibold">Tipo</th>
                      <th className="text-left py-2 px-4 font-semibold">Default</th>
                      <th className="text-left py-2 px-4 font-semibold">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono text-xs">icon</td>
                      <td className="py-2 px-4 text-ink-muted">LucideIcon</td>
                      <td className="py-2 px-4 text-ink-muted">-</td>
                      <td className="py-2 px-4 text-ink-muted">Icono de Lucide React</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono text-xs">title</td>
                      <td className="py-2 px-4 text-ink-muted">string</td>
                      <td className="py-2 px-4 text-ink-muted">-</td>
                      <td className="py-2 px-4 text-ink-muted">Título del tile (requerido)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono text-xs">variant</td>
                      <td className="py-2 px-4 text-ink-muted">"orange" | "dark" | "green" | "burgundy" | "navy"</td>
                      <td className="py-2 px-4 text-ink-muted">"orange"</td>
                      <td className="py-2 px-4 text-ink-muted">Color del tile</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono text-xs">size</td>
                      <td className="py-2 px-4 text-ink-muted">"default" | "lg" | "xl"</td>
                      <td className="py-2 px-4 text-ink-muted">"default"</td>
                      <td className="py-2 px-4 text-ink-muted">Tamaño del tile</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono text-xs">iconSize</td>
                      <td className="py-2 px-4 text-ink-muted">"xl" | "2xl" | "3xl"</td>
                      <td className="py-2 px-4 text-ink-muted">"2xl"</td>
                      <td className="py-2 px-4 text-ink-muted">Tamaño del icono</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-mono text-xs">onClick</td>
                      <td className="py-2 px-4 text-ink-muted">() =&gt; void</td>
                      <td className="py-2 px-4 text-ink-muted">-</td>
                      <td className="py-2 px-4 text-ink-muted">Función al hacer click</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* SectionCarousel Props */}
          <Card>
            <CardHeader>
              <CardTitle>SectionCarousel Props</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-4 font-semibold">Prop</th>
                      <th className="text-left py-2 px-4 font-semibold">Tipo</th>
                      <th className="text-left py-2 px-4 font-semibold">Default</th>
                      <th className="text-left py-2 px-4 font-semibold">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono text-xs">variants</td>
                      <td className="py-2 px-4 text-ink-muted">Array&lt;&#123;component, name&#125;&gt;</td>
                      <td className="py-2 px-4 text-ink-muted">-</td>
                      <td className="py-2 px-4 text-ink-muted">Array de componentes de variantes</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono text-xs">showDots</td>
                      <td className="py-2 px-4 text-ink-muted">boolean</td>
                      <td className="py-2 px-4 text-ink-muted">true</td>
                      <td className="py-2 px-4 text-ink-muted">Mostrar indicadores de puntos</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono text-xs">showArrows</td>
                      <td className="py-2 px-4 text-ink-muted">boolean</td>
                      <td className="py-2 px-4 text-ink-muted">true</td>
                      <td className="py-2 px-4 text-ink-muted">Mostrar flechas de navegación</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4 font-mono text-xs">arrowPosition</td>
                      <td className="py-2 px-4 text-ink-muted">"inside" | "outside"</td>
                      <td className="py-2 px-4 text-ink-muted">"inside"</td>
                      <td className="py-2 px-4 text-ink-muted">Posición de las flechas</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 font-mono text-xs">autoPlay</td>
                      <td className="py-2 px-4 text-ink-muted">boolean</td>
                      <td className="py-2 px-4 text-ink-muted">false</td>
                      <td className="py-2 px-4 text-ink-muted">Reproducción automática</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Code Example */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Código de Ejemplo</h3>
        <Card className="bg-ink-strong text-white">
          <CardContent className="p-6">
            <pre className="text-sm overflow-x-auto">
              <code>{`import { Tile } from "@/components/ui/tile";
import SectionCarousel from "@/components/ui/section-carousel";
import { Brain, Target, Zap } from "lucide-react";

// Tile usage
<Tile
  icon={Brain}
  title="EVALÚA"
  variant="orange"
  size="default"
  iconSize="2xl"
  onClick={() => console.log('clicked')}
/>

// SectionCarousel usage
<SectionCarousel
  variants={[
    { component: Variant1, name: "Original" },
    { component: Variant2, name: "Minimal" },
    { component: Variant3, name: "Bold" },
  ]}
  showDots={true}
  showArrows={true}
  arrowPosition="inside"
  autoPlay={false}
/>`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default CustomDemo;
