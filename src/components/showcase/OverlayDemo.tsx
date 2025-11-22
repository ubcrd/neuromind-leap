import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Info, HelpCircle, Calendar } from "lucide-react";

const OverlayDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-h2 font-bold text-ink-strong mb-2">Overlays</h2>
        <p className="text-body-m text-ink-muted">
          Componentes que aparecen sobre el contenido principal
        </p>
      </div>

      {/* Dialog */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Dialog (Modal)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Dialog Básico</CardTitle>
              <CardDescription>Modal para acciones importantes</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Abrir Dialog</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>¿Estás seguro?</DialogTitle>
                    <DialogDescription>
                      Esta acción no se puede deshacer. Esto eliminará permanentemente tu cuenta y removerá tus datos de nuestros servidores.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Cancelar</Button>
                    <Button variant="destructive">Eliminar</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dialog con Formulario</CardTitle>
              <CardDescription>Modal con campos de entrada</CardDescription>
            </CardHeader>
            <CardContent>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <Settings className="mr-2 h-4 w-4" />
                    Editar Perfil
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Editar Perfil</DialogTitle>
                    <DialogDescription>
                      Haz cambios a tu perfil aquí. Haz clic en guardar cuando termines.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" defaultValue="@peduarte" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={() => setOpen(false)}>
                      Guardar cambios
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sheet */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Sheet (Drawer)</h3>
        <Card>
          <CardHeader>
            <CardTitle>Panel Lateral</CardTitle>
            <CardDescription>Panel deslizante desde los bordes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Desde Derecha</Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Panel Derecho</SheetTitle>
                    <SheetDescription>
                      Este panel se desliza desde la derecha.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-4">
                    <div>
                      <Label htmlFor="sheet-name">Nombre</Label>
                      <Input id="sheet-name" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <Label htmlFor="sheet-email">Email</Label>
                      <Input id="sheet-email" type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Desde Izquierda</Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Panel Izquierdo</SheetTitle>
                    <SheetDescription>
                      Perfecto para menús de navegación.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <nav className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start">Inicio</Button>
                      <Button variant="ghost" className="w-full justify-start">Perfil</Button>
                      <Button variant="ghost" className="w-full justify-start">Configuración</Button>
                      <Button variant="ghost" className="w-full justify-start">Ayuda</Button>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Desde Arriba</Button>
                </SheetTrigger>
                <SheetContent side="top">
                  <SheetHeader>
                    <SheetTitle>Panel Superior</SheetTitle>
                    <SheetDescription>
                      Ideal para notificaciones o banners.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Desde Abajo</Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                  <SheetHeader>
                    <SheetTitle>Panel Inferior</SheetTitle>
                    <SheetDescription>
                      Útil para acciones rápidas en móvil.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Popover & Tooltip */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Popover & Tooltip</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Popover</CardTitle>
              <CardDescription>Contenido flotante contextual</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Info className="mr-2 h-4 w-4" />
                    Ver Información
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Dimensiones</h4>
                    <p className="text-sm text-muted-foreground">
                      Establece las dimensiones para la capa.
                    </p>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Ancho</Label>
                        <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="height">Alto</Label>
                        <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Seleccionar Fecha
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Calendario</p>
                    <p className="text-sm text-muted-foreground">
                      Aquí iría un componente de calendario.
                    </p>
                    <Button size="sm" className="w-full">
                      Confirmar
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tooltip</CardTitle>
              <CardDescription>Sugerencias al pasar el mouse</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <TooltipProvider>
                <div className="flex flex-wrap gap-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">Hover aquí</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Este es un tooltip básico</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="outline">
                        <HelpCircle className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Obtén ayuda aquí</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="outline">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Configuración</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>

              <div className="p-4 bg-surface-warm rounded-lg border border-border">
                <p className="text-sm text-ink-muted">
                  Los tooltips aparecen al pasar el mouse sobre los elementos y se ocultan automáticamente.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hover Card */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Hover Card</h3>
        <Card>
          <CardHeader>
            <CardTitle>Tarjeta Hover</CardTitle>
            <CardDescription>Contenido rico al pasar el mouse</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-body-m text-ink-muted">
                Pasa el mouse sobre{" "}
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a href="#" className="underline text-brand-primary font-medium">
                      @nextjs
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm text-muted-foreground">
                          The React Framework – creado y mantenido por @vercel.
                        </p>
                        <div className="flex items-center pt-2">
                          <Calendar className="mr-2 h-4 w-4 opacity-70" />
                          <span className="text-xs text-muted-foreground">
                            Miembro desde Diciembre 2021
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>{" "}
                para ver más información.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Code Example */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Código de Ejemplo</h3>
        <Card className="bg-ink-strong text-white">
          <CardContent className="p-6">
            <pre className="text-sm overflow-x-auto">
              <code>{`import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

<Dialog>
  <DialogTrigger asChild>
    <Button>Abrir Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título</DialogTitle>
    </DialogHeader>
    Contenido del dialog
  </DialogContent>
</Dialog>

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>
      <p>Tooltip text</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default OverlayDemo;
