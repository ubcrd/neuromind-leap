import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const DisplayDemo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-h2 font-bold text-ink-strong mb-2">Display Components</h2>
        <p className="text-body-m text-ink-muted">
          Componentes para mostrar información y contenido
        </p>
      </div>

      {/* Avatar */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Avatar</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Avatares Básicos</CardTitle>
              <CardDescription>Imágenes de perfil circulares</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JP</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback className="bg-brand-primary text-white">NS</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tamaños de Avatar</CardTitle>
              <CardDescription>Diferentes tamaños para diferentes contextos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">S</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="text-sm">M</AvatarFallback>
                </Avatar>
                <Avatar className="h-16 w-16">
                  <AvatarFallback>L</AvatarFallback>
                </Avatar>
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-2xl">XL</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Badge */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Badge</h3>
        <Card>
          <CardHeader>
            <CardTitle>Insignias</CardTitle>
            <CardDescription>Etiquetas para estados, categorías y contadores</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-3 text-ink-strong">Variantes:</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>

            <Separator />

            <div>
              <p className="text-sm font-medium mb-3 text-ink-strong">Casos de uso:</p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Estado:</span>
                  <Badge className="bg-green-500">Activo</Badge>
                  <Badge className="bg-yellow-500">Pendiente</Badge>
                  <Badge variant="destructive">Inactivo</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Categorías:</span>
                  <Badge variant="outline">Tecnología</Badge>
                  <Badge variant="outline">Diseño</Badge>
                  <Badge variant="outline">Negocios</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Notificaciones:</span>
                  <Badge variant="secondary">12 nuevos</Badge>
                  <Badge variant="secondary">3 sin leer</Badge>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <p className="text-sm font-medium mb-3 text-ink-strong">Con iconos:</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="gap-1">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  Online
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <div className="w-2 h-2 rounded-full bg-yellow-500" />
                  Away
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  Offline
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Skeleton */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Skeleton</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Loading Skeletons</CardTitle>
              <CardDescription>Placeholders animados para contenido en carga</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>

              <Separator />

              <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Skeleton className="h-32 w-full rounded-lg" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card Skeleton</CardTitle>
              <CardDescription>Ejemplo de card completo en estado de carga</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Skeleton className="h-40 w-full rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Accordion */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Accordion</h3>
        <Card>
          <CardHeader>
            <CardTitle>Acordeón</CardTitle>
            <CardDescription>Contenido colapsable para FAQs y listas largas</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>¿Es accesible?</AccordionTrigger>
                <AccordionContent>
                  Sí. Se adhiere al patrón de diseño WAI-ARIA y tiene navegación por teclado completa.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>¿Está estilizado?</AccordionTrigger>
                <AccordionContent>
                  Sí. Viene con estilos predeterminados que coinciden con el aspecto estético de los otros componentes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>¿Es animado?</AccordionTrigger>
                <AccordionContent>
                  Sí. Está animado por defecto, pero puedes desactivarlo si lo prefieres usando clases personalizadas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>¿Puedo usarlo en producción?</AccordionTrigger>
                <AccordionContent>
                  Absolutamente. Todos los componentes están diseñados para uso en producción con pruebas completas y documentación.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </section>

      {/* Combined Example */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Ejemplo Combinado</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Perfil de Usuario</CardTitle>
              <CardDescription>Combinando Avatar, Badge y contenido</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Juan Pérez</h4>
                  <p className="text-sm text-muted-foreground">juan@example.com</p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Pro</Badge>
                    <Badge className="bg-green-500">Activo</Badge>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Miembro desde</span>
                  <span className="font-medium">Enero 2023</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Proyectos</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Seguidores</span>
                  <span className="font-medium">1.2k</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lista de Equipo</CardTitle>
              <CardDescription>Múltiples avatares con información</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Usuario {i}</p>
                      <p className="text-xs text-muted-foreground">usuario{i}@example.com</p>
                    </div>
                  </div>
                  <Badge variant="outline">Miembro</Badge>
                </div>
              ))}
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
              <code>{`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

<Avatar>
  <AvatarImage src="..." />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<Badge>New</Badge>
<Badge variant="destructive">Error</Badge>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Pregunta</AccordionTrigger>
    <AccordionContent>
      Respuesta
    </AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default DisplayDemo;
