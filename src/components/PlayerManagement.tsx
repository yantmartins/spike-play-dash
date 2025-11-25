import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Users, Upload, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export interface Player {
  id: string;
  name: string;
  position: string;
  videoAnalyzed: boolean;
  metrics?: {
    jumpHeight: number;
    attackEfficiency: number;
    serveAccuracy: number;
    overallPerformance: number;
  };
}

interface PlayerManagementProps {
  onPlayerSelect: (playerId: string) => void;
  players: Player[];
  setPlayers: (players: Player[]) => void;
}

export function PlayerManagement({ onPlayerSelect, players, setPlayers }: PlayerManagementProps) {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerPosition, setNewPlayerPosition] = useState("");
  const { toast } = useToast();

  const addPlayer = () => {
    if (!newPlayerName.trim() || !newPlayerPosition.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha nome e posição do jogador",
        variant: "destructive",
      });
      return;
    }

    const newPlayer: Player = {
      id: Date.now().toString(),
      name: newPlayerName,
      position: newPlayerPosition,
      videoAnalyzed: false,
    };

    setPlayers([...players, newPlayer]);
    setNewPlayerName("");
    setNewPlayerPosition("");
    
    toast({
      title: "Jogador adicionado!",
      description: `${newPlayerName} foi adicionado à lista`,
    });
  };

  const removePlayer = (id: string) => {
    setPlayers(players.filter(p => p.id !== id));
    toast({
      title: "Jogador removido",
      description: "O jogador foi removido da lista",
    });
  };

  return (
    <section id="jogadores" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Users className="h-10 w-10 text-primary" />
            Gerenciar Jogadores
          </h2>
          <p className="text-muted-foreground text-lg">
            Adicione jogadores e faça upload de vídeos individuais para análise
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Adicionar Novo Jogador */}
          <Card className="shadow-volleyball lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPlus className="h-5 w-5 text-primary" />
                Novo Jogador
              </CardTitle>
              <CardDescription>Adicione um jogador à equipe</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="playerName">Nome do Jogador</Label>
                <Input
                  id="playerName"
                  value={newPlayerName}
                  onChange={(e) => setNewPlayerName(e.target.value)}
                  placeholder="Ex: Maria Silva"
                />
              </div>
              <div>
                <Label htmlFor="playerPosition">Posição</Label>
                <Input
                  id="playerPosition"
                  value={newPlayerPosition}
                  onChange={(e) => setNewPlayerPosition(e.target.value)}
                  placeholder="Ex: Levantadora, Ponteira..."
                />
              </div>
              <Button onClick={addPlayer} className="w-full">
                <UserPlus className="mr-2 h-4 w-4" />
                Adicionar Jogador
              </Button>
            </CardContent>
          </Card>

          {/* Lista de Jogadores */}
          <div className="lg:col-span-2 space-y-4">
            {players.length === 0 ? (
              <Card className="p-12 text-center">
                <Users className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground">
                  Nenhum jogador adicionado ainda. Adicione jogadores para começar a análise.
                </p>
              </Card>
            ) : (
              players.map((player) => (
                <Card key={player.id} className="hover:shadow-court transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                            {player.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{player.name}</h3>
                            <p className="text-sm text-muted-foreground">{player.position}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {player.videoAnalyzed ? (
                          <Badge className="bg-green-500">
                            Analisado
                          </Badge>
                        ) : (
                          <Badge variant="secondary">
                            Aguardando vídeo
                          </Badge>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onPlayerSelect(player.id)}
                          disabled={player.videoAnalyzed}
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          {player.videoAnalyzed ? "Vídeo enviado" : "Enviar Vídeo"}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removePlayer(player.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                    
                    {player.videoAnalyzed && player.metrics && (
                      <div className="mt-4 pt-4 border-t grid grid-cols-4 gap-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-primary">{player.metrics.jumpHeight}cm</p>
                          <p className="text-xs text-muted-foreground">Salto</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-secondary">{player.metrics.attackEfficiency}%</p>
                          <p className="text-xs text-muted-foreground">Ataque</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-accent">{player.metrics.serveAccuracy}%</p>
                          <p className="text-xs text-muted-foreground">Saque</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-chart-4">{player.metrics.overallPerformance}%</p>
                          <p className="text-xs text-muted-foreground">Geral</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
