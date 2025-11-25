import { useState } from "react";
import { Upload, Video, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Player } from "./PlayerManagement";

interface PlayerVideoUploadProps {
  player: Player | null;
  onUploadComplete: (playerId: string, metrics: any) => void;
  onClose: () => void;
}

export function PlayerVideoUpload({ player, onUploadComplete, onClose }: PlayerVideoUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const { toast } = useToast();

  if (!player) return null;

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
    
    // Simular análise e gerar métricas aleatórias para demonstração
    setTimeout(() => {
      const metrics = {
        jumpHeight: Math.floor(Math.random() * (80 - 55) + 55),
        attackEfficiency: Math.floor(Math.random() * (85 - 55) + 55),
        serveAccuracy: Math.floor(Math.random() * (80 - 60) + 60),
        overallPerformance: Math.floor(Math.random() * (80 - 60) + 60),
      };
      
      setIsUploading(false);
      setIsUploaded(true);
      
      toast({
        title: "Análise concluída!",
        description: `Vídeo de ${player.name} analisado com sucesso.`,
      });

      setTimeout(() => {
        onUploadComplete(player.id, metrics);
        onClose();
      }, 1500);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-glow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                Upload de Vídeo - {player.name}
              </CardTitle>
              <CardDescription>
                {player.position} | Formatos: MP4, MOV, AVI (máx. 500MB)
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary transition-colors">
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="hidden"
              id={`video-upload-${player.id}`}
            />
            <label htmlFor={`video-upload-${player.id}`} className="cursor-pointer">
              {isUploaded ? (
                <CheckCircle2 className="h-16 w-16 mx-auto mb-4 text-green-500" />
              ) : (
                <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              )}
              <p className="text-lg font-medium mb-2">
                {file ? file.name : "Clique para selecionar o vídeo"}
              </p>
              <p className="text-sm text-muted-foreground">
                Vídeo de treino ou partida do jogador
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
              {isUploading ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Analisando vídeo com IA...
                </>
              ) : (
                "Iniciar Análise"
              )}
            </Button>
          )}

          {isUploaded && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
              <p className="text-green-700 dark:text-green-400 font-medium">
                ✓ Análise concluída! Métricas disponíveis no dashboard.
              </p>
            </div>
          )}

          {isUploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Processando vídeo...</span>
                <span>Detectando fundamentos</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div className="h-full bg-gradient-primary animate-pulse" style={{ width: '60%' }} />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
