# Guía de Componentes UI - NeuroSpace

Documentación completa de todos los componentes UI disponibles con ejemplos de uso.

---

## 📦 Índice de Componentes

### Layout & Structure
- [Button](#button)
- [Card](#card)
- [Separator](#separator)

### Forms
- [Input](#input)
- [Textarea](#textarea)
- [Label](#label)
- [Switch](#switch)
- [Checkbox](#checkbox)
- [Radio Group](#radio-group)
- [Select](#select)

### Navigation
- [Tabs](#tabs)
- [Navigation Menu](#navigation-menu)
- [Breadcrumb](#breadcrumb)

### Feedback
- [Toast](#toast)
- [Alert](#alert)
- [Progress](#progress)

### Overlay
- [Dialog](#dialog)
- [Sheet](#sheet)
- [Popover](#popover)
- [Tooltip](#tooltip)
- [Hover Card](#hover-card)

### Display
- [Avatar](#avatar)
- [Badge](#badge)
- [Skeleton](#skeleton)
- [Accordion](#accordion)
- [Carousel](#carousel)

### Custom Components
- [Tile](#tile)
- [Section Carousel](#section-carousel)
- [Icon Wrapper](#icon-wrapper)
- [Organic Shape](#organic-shape)

---

## Button

Botón interactivo con múltiples variantes y tamaños.

### Importar
```tsx
import { Button } from "@/components/ui/button";
```

### Variantes

```tsx
// Default
<Button>Click me</Button>

// Destructive
<Button variant="destructive">Delete</Button>

// Outline
<Button variant="outline">Cancel</Button>

// Secondary
<Button variant="secondary">Secondary Action</Button>

// Ghost
<Button variant="ghost">Ghost Button</Button>

// Link
<Button variant="link">Link Style</Button>
```

### Tamaños

```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">
  <Icon name="Search" />
</Button>
```

### Con Iconos

```tsx
import { Send } from "lucide-react";

<Button>
  <Send className="mr-2 h-4 w-4" />
  Send Message
</Button>
```

### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | Estilo del botón |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"default"` | Tamaño del botón |
| `asChild` | `boolean` | `false` | Renderiza como hijo (útil para links) |

---

## Card

Contenedor con estilo elevado para agrupar contenido.

### Importar
```tsx
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
```

### Ejemplo Básico

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content of the card</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Card con Imagen

```tsx
<Card className="overflow-hidden">
  <img src="/hero.jpg" alt="Hero" className="w-full h-48 object-cover" />
  <CardHeader>
    <CardTitle>Image Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Content with image</p>
  </CardContent>
</Card>
```

---

## Input

Campo de entrada de texto.

### Importar
```tsx
import { Input } from "@/components/ui/input";
```

### Ejemplos

```tsx
// Basic
<Input type="text" placeholder="Enter your name" />

// Email
<Input type="email" placeholder="email@example.com" />

// Password
<Input type="password" placeholder="Password" />

// Disabled
<Input disabled placeholder="Disabled input" />

// Con Label
<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</div>
```

---

## Textarea

Área de texto multilínea.

### Importar
```tsx
import { Textarea } from "@/components/ui/textarea";
```

### Ejemplos

```tsx
<Textarea placeholder="Type your message here." />

<Textarea 
  placeholder="Larger textarea" 
  className="min-h-[120px]"
/>
```

---

## Label

Etiqueta para inputs y form controls.

### Importar
```tsx
import { Label } from "@/components/ui/label";
```

### Ejemplo

```tsx
<div className="space-y-2">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="Enter username" />
</div>
```

---

## Switch

Toggle switch para opciones on/off.

### Importar
```tsx
import { Switch } from "@/components/ui/switch";
```

### Ejemplos

```tsx
// Basic
<Switch />

// Con Label
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>

// Controlled
const [isEnabled, setIsEnabled] = useState(false);

<Switch checked={isEnabled} onCheckedChange={setIsEnabled} />
```

---

## Checkbox

Casilla de verificación.

### Importar
```tsx
import { Checkbox } from "@/components/ui/checkbox";
```

### Ejemplos

```tsx
// Basic
<Checkbox />

// Con Label
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms">Accept terms and conditions</label>
</div>

// Controlled
const [checked, setChecked] = useState(false);

<Checkbox checked={checked} onCheckedChange={setChecked} />
```

---

## Select

Menú desplegable de selección.

### Importar
```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
```

### Ejemplo

```tsx
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>
```

---

## Tabs

Pestañas para organizar contenido.

### Importar
```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
```

### Ejemplo

```tsx
<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Make changes to your account here.</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Change your password here.</p>
  </TabsContent>
</Tabs>
```

---

## Dialog

Modal para contenido superpuesto.

### Importar
```tsx
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
```

### Ejemplo

```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <div className="flex justify-end gap-2">
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  </DialogContent>
</Dialog>
```

---

## Toast

Notificaciones temporales.

### Importar
```tsx
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
```

### Setup (en layout root)
```tsx
// En tu App.tsx o layout principal
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      {/* Tu app */}
      <Toaster />
    </>
  );
}
```

### Uso

```tsx
function MyComponent() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        });
      }}
    >
      Show Toast
    </Button>
  );
}
```

### Variantes

```tsx
// Success
toast({
  title: "Success!",
  description: "Your changes have been saved.",
});

// Error
toast({
  variant: "destructive",
  title: "Uh oh! Something went wrong.",
  description: "There was a problem with your request.",
});

// Con acción
toast({
  title: "Update available",
  description: "A new version is ready to install.",
  action: <Button variant="outline" size="sm">Update</Button>,
});
```

---

## Tooltip

Información contextual al hover.

### Importar
```tsx
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
```

### Ejemplo

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>This is a tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

## Popover

Contenido emergente posicionado.

### Importar
```tsx
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
```

### Ejemplo

```tsx
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-2">
      <h4 className="font-medium">Dimensions</h4>
      <p className="text-sm text-muted-foreground">
        Set the dimensions for the layer.
      </p>
    </div>
  </PopoverContent>
</Popover>
```

---

## Sheet

Panel deslizante lateral.

### Importar
```tsx
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
```

### Ejemplo

```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      {/* Contenido */}
    </div>
  </SheetContent>
</Sheet>
```

### Posiciones

```tsx
<SheetContent side="top">    {/* Desde arriba */}
<SheetContent side="right">  {/* Desde derecha (default) */}
<SheetContent side="bottom"> {/* Desde abajo */}
<SheetContent side="left">   {/* Desde izquierda */}
```

---

## Avatar

Imagen de perfil circular.

### Importar
```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
```

### Ejemplo

```tsx
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

---

## Badge

Etiqueta pequeña para estados o categorías.

### Importar
```tsx
import { Badge } from "@/components/ui/badge";
```

### Variantes

```tsx
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

---

## Accordion

Contenido expandible/colapsable.

### Importar
```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
```

### Ejemplo

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

---

## Carousel

Carrusel de contenido deslizable.

### Importar
```tsx
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
```

### Ejemplo

```tsx
<Carousel className="w-full max-w-xs">
  <CarouselContent>
    <CarouselItem>
      <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <span className="text-4xl font-semibold">1</span>
        </CardContent>
      </Card>
    </CarouselItem>
    <CarouselItem>
      <Card>
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <span className="text-4xl font-semibold">2</span>
        </CardContent>
      </Card>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

---

## Tile (Custom Component)

Tile interactivo con icono y animación.

### Importar
```tsx
import { Tile } from "@/components/ui/tile";
```

### Ejemplo

```tsx
import { Brain } from "lucide-react";

<Tile
  icon={Brain}
  title="EVALÚA"
  variant="orange"
  size="default"
  onClick={() => console.log('clicked')}
/>
```

### Variantes

```tsx
<Tile variant="orange" title="Orange" />
<Tile variant="dark" title="Dark" />
<Tile variant="green" title="Green" />
<Tile variant="burgundy" title="Burgundy" />
<Tile variant="navy" title="Navy" />
```

### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `icon` | `LucideIcon` | - | Icono de Lucide React |
| `title` | `string` | - | Título del tile (requerido) |
| `variant` | `"orange" \| "dark" \| "green" \| "burgundy" \| "navy"` | `"orange"` | Color del tile |
| `size` | `"default" \| "lg" \| "xl"` | `"default"` | Tamaño del tile |
| `iconSize` | `"xl" \| "2xl" \| "3xl"` | `"2xl"` | Tamaño del icono |

---

## Section Carousel (Custom Component)

Carrusel especializado para secciones con variantes.

### Importar
```tsx
import SectionCarousel from "@/components/ui/section-carousel";
```

### Ejemplo

```tsx
import HeroVariant1 from "./HeroVariant1";
import HeroVariant2 from "./HeroVariant2";
import HeroVariant3 from "./HeroVariant3";

<SectionCarousel
  variants={[
    { component: HeroVariant1, name: "Original" },
    { component: HeroVariant2, name: "Minimal" },
    { component: HeroVariant3, name: "Bold" },
  ]}
  showDots={true}
  showArrows={true}
  arrowPosition="inside"
  autoPlay={false}
/>
```

### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variants` | `Array<{component: ComponentType, name: string}>` | - | Array de componentes de variantes |
| `showDots` | `boolean` | `true` | Mostrar indicadores de puntos |
| `showArrows` | `boolean` | `true` | Mostrar flechas de navegación |
| `arrowPosition` | `"inside" \| "outside"` | `"inside"` | Posición de las flechas |
| `autoPlay` | `boolean` | `false` | Reproducción automática |
| `className` | `string` | - | Clases CSS adicionales |

---

## Icon Wrapper (Custom Component)

Wrapper para iconos de Lucide con colores y tamaños consistentes.

### Importar
```tsx
import { IconWrapper } from "@/components/ui/icon-wrapper";
```

### Ejemplo

```tsx
import { Brain } from "lucide-react";

<IconWrapper 
  icon={Brain} 
  size="2xl"
  color="orange"
  strokeWidth={2}
/>
```

### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `icon` | `LucideIcon` | - | Icono de Lucide React |
| `size` | `"xl" \| "2xl" \| "3xl"` | `"2xl"` | Tamaño del icono |
| `color` | `"orange" \| "dark" \| "white"` | `"orange"` | Color del icono |
| `strokeWidth` | `number` | `2` | Grosor del trazo |

---

## Skeleton

Placeholder animado para contenido en carga.

### Importar
```tsx
import { Skeleton } from "@/components/ui/skeleton";
```

### Ejemplos

```tsx
// Card skeleton
<div className="space-y-2">
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[200px]" />
</div>

// Avatar + text skeleton
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>
```

---

## Progress

Barra de progreso.

### Importar
```tsx
import { Progress } from "@/components/ui/progress";
```

### Ejemplo

```tsx
<Progress value={33} />

// Con estado
const [progress, setProgress] = useState(13);

useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500);
  return () => clearTimeout(timer);
}, []);

<Progress value={progress} />
```

---

## Alert

Mensajes de alerta destacados.

### Importar
```tsx
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
```

### Ejemplos

```tsx
// Default
<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>

// Destructive
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
```

---

## Separator

Línea divisoria horizontal o vertical.

### Importar
```tsx
import { Separator } from "@/components/ui/separator";
```

### Ejemplos

```tsx
// Horizontal (default)
<Separator />

// Vertical
<div className="flex h-5 items-center space-x-4">
  <div>Blog</div>
  <Separator orientation="vertical" />
  <div>Docs</div>
  <Separator orientation="vertical" />
  <div>Source</div>
</div>
```

---

## 🎯 Patrones Comunes

### Form con Validación

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
});

function MyForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="username">Username</Label>
        <Input id="username" {...form.register("username")} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### Card Grid Responsive

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map((item) => (
    <Card key={item.id}>
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{item.description}</p>
      </CardContent>
    </Card>
  ))}
</div>
```

### Loading State

```tsx
{isLoading ? (
  <div className="space-y-4">
    <Skeleton className="h-12 w-full" />
    <Skeleton className="h-12 w-full" />
    <Skeleton className="h-12 w-full" />
  </div>
) : (
  <div>{content}</div>
)}
```

---

## 📚 Recursos Adicionales

- **Radix UI Docs**: https://www.radix-ui.com/
- **Lucide Icons**: https://lucide.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Framer Motion**: https://www.framer.com/motion/

---

## 💡 Tips

1. **Composición**: Los componentes están diseñados para componerse. No tengas miedo de anidar y combinar.

2. **Accesibilidad**: Todos los componentes de Radix UI incluyen accesibilidad por defecto (ARIA, keyboard navigation).

3. **Personalización**: Usa `className` para agregar estilos personalizados manteniendo el diseño base.

4. **asChild Prop**: Muchos componentes aceptan `asChild` para renderizar como hijo, útil para mantener semántica HTML correcta.

```tsx
<Button asChild>
  <a href="/about">About</a>
</Button>
```
