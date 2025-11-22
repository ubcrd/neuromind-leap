import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Send, Download, Trash2 } from "lucide-react";

const ButtonsDemo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-h2 font-bold text-ink-strong mb-2">Buttons & Cards</h2>
        <p className="text-body-m text-ink-muted">
          Componentes fundamentales para acciones e información agrupada
        </p>
      </div>

      {/* Button Variants */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Button Variants</h3>
        <Card>
          <CardHeader>
            <CardTitle>Variantes de Botones</CardTitle>
            <CardDescription>Diferentes estilos para diferentes contextos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button>Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>

            <Separator />

            <div>
              <p className="text-sm font-medium mb-3 text-ink-strong">Con Iconos:</p>
              <div className="flex flex-wrap gap-4">
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Enviar
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Descargar
                </Button>
                <Button variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Eliminar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Button Sizes */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Button Sizes</h3>
        <Card>
          <CardHeader>
            <CardTitle>Tamaños de Botones</CardTitle>
            <CardDescription>Diferentes tamaños para diferentes jerarquías visuales</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Cards */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Simple Card</CardTitle>
              <CardDescription>Card básico con header y contenido</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body-m text-ink-muted">
                Los cards son contenedores versátiles para agrupar información relacionada.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-32 bg-gradient-to-r from-brand-primary to-brand-primary-strong" />
            <CardHeader>
              <CardTitle>Card con Imagen</CardTitle>
              <CardDescription>Perfecto para contenido visual</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body-m text-ink-muted">
                Usa <code className="bg-surface-warm px-2 py-1 rounded text-sm">overflow-hidden</code> para imágenes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card Interactivo</CardTitle>
              <CardDescription>Con hover y transiciones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-body-m text-ink-muted">
                Agrega efectos hover para cards clickeables.
              </p>
              <Button className="w-full">Acción Principal</Button>
            </CardContent>
          </Card>

          <Card className="bg-brand-primary text-white border-brand-primary">
            <CardHeader>
              <CardTitle className="text-white">Card con Color</CardTitle>
              <CardDescription className="text-white/80">Personaliza el fondo y texto</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-white/90">
                Usa tokens de color para mantener consistencia con el design system.
              </p>
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
              <code>{`import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

<Button variant="default">Click me</Button>

<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Contenido del card</p>
  </CardContent>
</Card>`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ButtonsDemo;
