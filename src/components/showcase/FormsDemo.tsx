import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const FormsDemo = () => {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-h2 font-bold text-ink-strong mb-2">Form Controls</h2>
        <p className="text-body-m text-ink-muted">
          Componentes para capturar información del usuario
        </p>
      </div>

      {/* Inputs */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Text Inputs</h3>
        <Card>
          <CardHeader>
            <CardTitle>Campos de Texto</CardTitle>
            <CardDescription>Inputs para diferentes tipos de datos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo</Label>
              <Input id="name" placeholder="Juan Pérez" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="juan@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input id="password" type="password" placeholder="••••••••" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="disabled">Input Deshabilitado</Label>
              <Input id="disabled" disabled placeholder="No editable" />
            </div>

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea 
                id="message" 
                placeholder="Escribe tu mensaje aquí..." 
                className="min-h-[120px]"
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Selection Controls */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Selection Controls</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Switch */}
          <Card>
            <CardHeader>
              <CardTitle>Switch</CardTitle>
              <CardDescription>Toggle para opciones on/off</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Switch 
                  id="notifications" 
                  checked={switchChecked}
                  onCheckedChange={setSwitchChecked}
                />
                <Label htmlFor="notifications" className="cursor-pointer">
                  Habilitar notificaciones
                </Label>
              </div>
              <p className="text-sm text-ink-muted">
                Estado: {switchChecked ? "Activado" : "Desactivado"}
              </p>

              <Separator />

              <div className="flex items-center space-x-3">
                <Switch id="dark-mode" />
                <Label htmlFor="dark-mode" className="cursor-pointer">
                  Modo oscuro
                </Label>
              </div>

              <div className="flex items-center space-x-3">
                <Switch id="autoplay" defaultChecked />
                <Label htmlFor="autoplay" className="cursor-pointer">
                  Reproducción automática
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Checkbox */}
          <Card>
            <CardHeader>
              <CardTitle>Checkbox</CardTitle>
              <CardDescription>Selección múltiple</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="terms" 
                  checked={checkboxChecked}
                  onCheckedChange={(checked) => setCheckboxChecked(checked as boolean)}
                />
                <label htmlFor="terms" className="text-sm font-medium cursor-pointer">
                  Acepto términos y condiciones
                </label>
              </div>
              <p className="text-sm text-ink-muted">
                Estado: {checkboxChecked ? "Aceptado" : "No aceptado"}
              </p>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Checkbox id="newsletter" defaultChecked />
                  <label htmlFor="newsletter" className="text-sm font-medium cursor-pointer">
                    Recibir newsletter
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox id="marketing" />
                  <label htmlFor="marketing" className="text-sm font-medium cursor-pointer">
                    Emails de marketing
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <Checkbox id="updates" />
                  <label htmlFor="updates" className="text-sm font-medium cursor-pointer">
                    Actualizaciones de producto
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Radio & Select */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Radio & Select</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Radio Group */}
          <Card>
            <CardHeader>
              <CardTitle>Radio Group</CardTitle>
              <CardDescription>Selección única entre opciones</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one" className="cursor-pointer">Opción 1</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two" className="cursor-pointer">Opción 2</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem value="option-three" id="option-three" />
                  <Label htmlFor="option-three" className="cursor-pointer">Opción 3</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Select */}
          <Card>
            <CardHeader>
              <CardTitle>Select</CardTitle>
              <CardDescription>Menú desplegable</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Selecciona un país</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Elige una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="es">España</SelectItem>
                    <SelectItem value="mx">México</SelectItem>
                    <SelectItem value="ar">Argentina</SelectItem>
                    <SelectItem value="co">Colombia</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Categoría</Label>
                <Select defaultValue="tech">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Tecnología</SelectItem>
                    <SelectItem value="design">Diseño</SelectItem>
                    <SelectItem value="business">Negocios</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Complete Form Example */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Ejemplo de Formulario Completo</h3>
        <Card>
          <CardHeader>
            <CardTitle>Formulario de Contacto</CardTitle>
            <CardDescription>Ejemplo combinando múltiples controles</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Nombre</Label>
                  <Input id="first-name" placeholder="Juan" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Apellido</Label>
                  <Input id="last-name" placeholder="Pérez" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email-form">Email</Label>
                <Input id="email-form" type="email" placeholder="juan@example.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Select>
                  <SelectTrigger id="subject">
                    <SelectValue placeholder="Selecciona un asunto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="support">Soporte técnico</SelectItem>
                    <SelectItem value="sales">Ventas</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message-form">Mensaje</Label>
                <Textarea id="message-form" placeholder="Escribe tu mensaje..." className="min-h-[120px]" />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms-form" />
                <label htmlFor="terms-form" className="text-sm font-medium cursor-pointer">
                  Acepto los términos y condiciones
                </label>
              </div>

              <Button type="submit" className="w-full md:w-auto">
                Enviar Mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Code Example */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Código de Ejemplo</h3>
        <Card className="bg-ink-strong text-white">
          <CardContent className="p-6">
            <pre className="text-sm overflow-x-auto">
              <code>{`import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</div>

<div className="flex items-center space-x-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Notificaciones</Label>
</div>`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default FormsDemo;
