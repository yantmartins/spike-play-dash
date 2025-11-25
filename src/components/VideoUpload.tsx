import { useState } from "react";
import { Upload, Video, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function VideoUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setIsUploaded(false);
    }
  };

  const handleUpload = () => {
    if (!file) return;

    setIsUploading(true);
    
    // Simular upload
    setTimeout(() => {
      setIsUploading(false);
      setIsUploaded(true);
      toast({
        title: "Vídeo enviado com sucesso!",
        description: "Iniciando análise automática...",
      });
    }, 2000);
  };

  return (
    <section id="upload" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Enviar Vídeo para Análise</h2>
            <p className="text-muted-foreground text-lg">
              Faça upload de um vídeo da partida e deixe a IA analisar os fundamentos
            </p>
          </div>

          <Card className="shadow-volleyball">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                Upload de Vídeo
              </CardTitle>
              <CardDescription>
                Formatos aceitos: MP4, MOV, AVI (máx. 500MB)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="video-upload"
                />
                <label htmlFor="video-upload" className="cursor-pointer">
                  {isUploaded ? (
                    <CheckCircle2 className="h-16 w-16 mx-auto mb-4 text-green-500" />
                  ) : (
                    <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  )}
                  <p className="text-lg font-medium mb-2">
                    {file ? file.name : "Clique para selecionar um vídeo"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ou arraste e solte aqui
                  </p>
                </label>
              </div>

              {file && !isUploaded && (
                <Button 
                  onClick={handleUpload} 
                  disabled={isUploading}
                  className="w-full"
                  size="lg"
                >
                  {isUploading ? "Enviando..." : "Analisar Vídeo"}
                </Button>
              )}

              {isUploaded && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
                  <p className="text-green-700 dark:text-green-400 font-medium">
                    Análise em andamento! Os resultados aparecerão no dashboard.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
