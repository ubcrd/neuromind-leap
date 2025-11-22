import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const NavigationDemo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-h2 font-bold text-ink-strong mb-2">Navigation</h2>
        <p className="text-body-m text-ink-muted">
          Componentes para organizar y navegar contenido
        </p>
      </div>

      {/* Tabs */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Tabs</h3>
        <Card>
          <CardHeader>
            <CardTitle>Pestañas</CardTitle>
            <CardDescription>Organiza contenido en pestañas navegables</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="account">Cuenta</TabsTrigger>
                <TabsTrigger value="password">Contraseña</TabsTrigger>
                <TabsTrigger value="preferences">Preferencias</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="space-y-4 mt-4">
                <div>
                  <h4 className="text-h4 font-semibold text-ink-strong mb-2">Información de Cuenta</h4>
                  <p className="text-body-m text-ink-muted">
                    Aquí puedes gestionar tu información personal y configuración de cuenta.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Nombre:</span>
                    <span className="text-sm text-ink-muted">Juan Pérez</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Email:</span>
                    <span className="text-sm text-ink-muted">juan@example.com</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="password" className="space-y-4 mt-4">
                <div>
                  <h4 className="text-h4 font-semibold text-ink-strong mb-2">Seguridad</h4>
                  <p className="text-body-m text-ink-muted">
                    Cambia tu contraseña y gestiona opciones de seguridad.
                  </p>
                </div>
                <Separator />
                <p className="text-sm text-ink-muted">
                  Última actualización: hace 30 días
                </p>
              </TabsContent>
              <TabsContent value="preferences" className="space-y-4 mt-4">
                <div>
                  <h4 className="text-h4 font-semibold text-ink-strong mb-2">Preferencias</h4>
                  <p className="text-body-m text-ink-muted">
                    Personaliza tu experiencia con nuestras opciones de configuración.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Idioma:</span>
                    <span className="text-sm text-ink-muted">Español</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Tema:</span>
                    <span className="text-sm text-ink-muted">Claro</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Tabs Vertical Example */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Tabs Variations</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Tabs Simples</CardTitle>
              <CardDescription>Ejemplo básico con 2 pestañas</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="pt-4">
                  <p className="text-body-m text-ink-muted">
                    Vista general de tu dashboard con métricas importantes.
                  </p>
                </TabsContent>
                <TabsContent value="analytics" className="pt-4">
                  <p className="text-body-m text-ink-muted">
                    Análisis detallado de tu rendimiento y estadísticas.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tabs con Contador</CardTitle>
              <CardDescription>Tabs mostrando cantidad de items</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" className="w-full">
                <TabsList>
                  <TabsTrigger value="all">Todos (12)</TabsTrigger>
                  <TabsTrigger value="pending">Pendientes (3)</TabsTrigger>
                  <TabsTrigger value="completed">Completados (9)</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="pt-4">
                  <p className="text-body-m text-ink-muted">Mostrando todos los elementos.</p>
                </TabsContent>
                <TabsContent value="pending" className="pt-4">
                  <p className="text-body-m text-ink-muted">3 elementos pendientes por completar.</p>
                </TabsContent>
                <TabsContent value="completed" className="pt-4">
                  <p className="text-body-m text-ink-muted">9 elementos completados exitosamente.</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Breadcrumb */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Breadcrumb</h3>
        <Card>
          <CardHeader>
            <CardTitle>Migas de Pan (Breadcrumb)</CardTitle>
            <CardDescription>Navegación jerárquica para mostrar la ubicación actual</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-3 text-ink-strong">Ejemplo básico:</p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Componentes</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Navegación</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <Separator />

            <div>
              <p className="text-sm font-medium mb-3 text-ink-strong">Con más niveles:</p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/projects">Proyectos</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/projects/website">Sitio Web</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Configuración</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <Separator />

            <div>
              <p className="text-sm font-medium mb-3 text-ink-strong">Breadcrumb simple:</p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Página Actual</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Separator */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Separator</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Separador Horizontal</CardTitle>
              <CardDescription>Divide secciones verticalmente</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-ink-strong">Sección 1</h4>
                <p className="text-sm text-ink-muted">Contenido de la primera sección.</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold text-ink-strong">Sección 2</h4>
                <p className="text-sm text-ink-muted">Contenido de la segunda sección.</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-semibold text-ink-strong">Sección 3</h4>
                <p className="text-sm text-ink-muted">Contenido de la tercera sección.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Separador Vertical</CardTitle>
              <CardDescription>Divide elementos horizontalmente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-20 items-center justify-center space-x-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-ink-strong">Item 1</div>
                  <div className="text-ink-muted">Descripción</div>
                </div>
                <Separator orientation="vertical" />
                <div className="text-center">
                  <div className="font-semibold text-ink-strong">Item 2</div>
                  <div className="text-ink-muted">Descripción</div>
                </div>
                <Separator orientation="vertical" />
                <div className="text-center">
                  <div className="font-semibold text-ink-strong">Item 3</div>
                  <div className="text-ink-muted">Descripción</div>
                </div>
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
              <code>{`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Cuenta</TabsTrigger>
    <TabsTrigger value="password">Contraseña</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    Contenido de cuenta
  </TabsContent>
</Tabs>

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Actual</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default NavigationDemo;
