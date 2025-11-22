import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle2, Info, AlertTriangle, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

const FeedbackDemo = () => {
  const { toast } = useToast();
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-h2 font-bold text-ink-strong mb-2">Feedback</h2>
        <p className="text-body-m text-ink-muted">
          Componentes para comunicar estado y retroalimentación al usuario
        </p>
      </div>

      {/* Toast */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Toast Notifications</h3>
        <Card>
          <CardHeader>
            <CardTitle>Notificaciones Toast</CardTitle>
            <CardDescription>Mensajes temporales no intrusivos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={() => {
                  toast({
                    title: "¡Éxito!",
                    description: "Tu operación se completó correctamente.",
                  });
                }}
              >
                Toast Simple
              </Button>

              <Button
                variant="destructive"
                onClick={() => {
                  toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Hubo un problema con tu solicitud.",
                  });
                }}
              >
                Toast Error
              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  toast({
                    title: "Actualización disponible",
                    description: "Hay una nueva versión lista para instalar.",
                    action: (
                      <Button variant="outline" size="sm">
                        Actualizar
                      </Button>
                    ),
                  });
                }}
              >
                Toast con Acción
              </Button>

              <Button
                variant="secondary"
                onClick={() => {
                  toast({
                    title: "Mensaje programado",
                    description: "Viernes, 10 de febrero de 2023 a las 17:57",
                  });
                }}
              >
                Toast Informativo
              </Button>
            </div>

            <div className="mt-6 p-4 bg-surface-warm rounded-lg border border-border">
              <p className="text-sm text-ink-muted">
                <strong>Nota:</strong> Los toasts aparecen en la esquina inferior derecha y se ocultan automáticamente después de unos segundos.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Alerts */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Alerts</h3>
        <Card>
          <CardHeader>
            <CardTitle>Alertas</CardTitle>
            <CardDescription>Mensajes destacados con diferentes niveles de importancia</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Información</AlertTitle>
              <AlertDescription>
                Puedes agregar componentes usando la CLI de shadcn.
              </AlertDescription>
            </Alert>

            <Alert className="border-blue-500 bg-blue-50">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-900">Aviso Informativo</AlertTitle>
              <AlertDescription className="text-blue-800">
                Esta es una alerta de información personalizada con colores azules.
              </AlertDescription>
            </Alert>

            <Alert className="border-green-500 bg-green-50">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-900">¡Éxito!</AlertTitle>
              <AlertDescription className="text-green-800">
                Tu configuración se guardó correctamente.
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-500 bg-yellow-50">
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
              <AlertTitle className="text-yellow-900">Advertencia</AlertTitle>
              <AlertDescription className="text-yellow-800">
                Ten cuidado al proceder con esta acción. No se puede deshacer.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Tu sesión ha expirado. Por favor inicia sesión nuevamente.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>

      {/* Progress */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Progress Bars</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Barra de Progreso</CardTitle>
              <CardDescription>Indicador visual de progreso</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-ink-strong">Cargando...</span>
                  <span className="text-sm text-ink-muted">{progress}%</span>
                </div>
                <Progress value={progress} />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-ink-strong">Completado</span>
                  <span className="text-sm text-ink-muted">100%</span>
                </div>
                <Progress value={100} />
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-ink-strong">Iniciando</span>
                  <span className="text-sm text-ink-muted">25%</span>
                </div>
                <Progress value={25} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estados de Carga</CardTitle>
              <CardDescription>Diferentes niveles de progreso</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm font-medium mb-2 text-ink-strong">Almacenamiento usado</p>
                <Progress value={85} className="h-2" />
                <p className="text-xs text-ink-muted mt-1">85% de 100 GB</p>
              </div>

              <div>
                <p className="text-sm font-medium mb-2 text-ink-strong">Memoria RAM</p>
                <Progress value={62} className="h-2" />
                <p className="text-xs text-ink-muted mt-1">62% de 16 GB</p>
              </div>

              <div>
                <p className="text-sm font-medium mb-2 text-ink-strong">CPU</p>
                <Progress value={43} className="h-2" />
                <p className="text-xs text-ink-muted mt-1">43% en uso</p>
              </div>

              <div>
                <p className="text-sm font-medium mb-2 text-ink-strong">Descarga</p>
                <Progress value={18} className="h-2" />
                <p className="text-xs text-ink-muted mt-1">18% - 2.5 MB de 14 MB</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Loading States */}
      <section>
        <h3 className="text-h3 font-bold text-ink-strong mb-4">Estados Combinados</h3>
        <Card>
          <CardHeader>
            <CardTitle>Feedback Combinado</CardTitle>
            <CardDescription>Ejemplos de múltiples elementos de feedback trabajando juntos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Procesando tu solicitud</AlertTitle>
                <AlertDescription className="space-y-2">
                  <p>Por favor espera mientras procesamos tu información...</p>
                  <Progress value={progress} className="mt-2" />
                </AlertDescription>
              </Alert>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => {
                  toast({
                    title: "Proceso iniciado",
                    description: "Tu tarea comenzó a procesarse.",
                  });
                }}
              >
                Iniciar Proceso
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  toast({
                    title: "Proceso cancelado",
                    description: "La operación fue cancelada por el usuario.",
                  });
                }}
              >
                Cancelar
              </Button>
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
              <code>{`import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

function MyComponent() {
  const { toast } = useToast();

  return (
    <>
      <Button onClick={() => {
        toast({
          title: "¡Éxito!",
          description: "Operación completada.",
        });
      }}>
        Mostrar Toast
      </Button>

      <Alert>
        <AlertTitle>Información</AlertTitle>
        <AlertDescription>
          Mensaje de alerta
        </AlertDescription>
      </Alert>

      <Progress value={60} />
    </>
  );
}`}</code>
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default FeedbackDemo;
