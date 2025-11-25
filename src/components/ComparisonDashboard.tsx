import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { BarChart, Users, TrendingUp, Award } from "lucide-react";
import { Player } from "./PlayerManagement";

interface ComparisonDashboardProps {
  players: Player[];
}

export function ComparisonDashboard({ players }: ComparisonDashboardProps) {
  const analyzedPlayers = players.filter(p => p.videoAnalyzed);

  if (analyzedPlayers.length === 0) {
    return (
      <section id="comparacao" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Comparação de Jogadores</h2>
            <p className="text-muted-foreground text-lg">
              Faça upload de vídeos dos jogadores para visualizar comparações
            </p>
          </div>
          <Card className="max-w-2xl mx-auto p-12 text-center">
            <BarChart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">
              Nenhuma análise disponível ainda. Adicione jogadores e faça upload dos vídeos.
            </p>
          </Card>
        </div>
      </section>
    );
  }

  const getTopPerformer = (metric: keyof NonNullable<Player['metrics']>) => {
    return analyzedPlayers.reduce((top, player) => {
      if (!player.metrics || !top.metrics) return top;
      return (player.metrics[metric] > top.metrics[metric]) ? player : top;
    }, analyzedPlayers[0]);
  };

  return (
    <section id="comparacao" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <BarChart className="h-10 w-10 text-primary" />
            Comparação de Jogadores
          </h2>
          <p className="text-muted-foreground text-lg">
            Compare o desempenho de todos os jogadores analisados
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="detailed">Detalhado</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Top Performers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-volleyball">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Maior Salto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {getTopPerformer('jumpHeight').metrics?.jumpHeight}cm
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {getTopPerformer('jumpHeight').name}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-volleyball">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Award className="h-4 w-4 text-secondary" />
                    Melhor Ataque
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {getTopPerformer('attackEfficiency').metrics?.attackEfficiency}%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {getTopPerformer('attackEfficiency').name}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-volleyball">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Award className="h-4 w-4 text-accent" />
                    Melhor Saque
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-accent mb-1">
                    {getTopPerformer('serveAccuracy').metrics?.serveAccuracy}%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {getTopPerformer('serveAccuracy').name}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-volleyball">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4 text-chart-4" />
                    Melhor Geral
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-chart-4 mb-1">
                    {getTopPerformer('overallPerformance').metrics?.overallPerformance}%
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {getTopPerformer('overallPerformance').name}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Comparação por Métrica */}
            <Card className="shadow-court">
              <CardHeader>
                <CardTitle>Comparação por Métrica</CardTitle>
                <CardDescription>
                  Visualize o desempenho de todos os jogadores lado a lado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Altura de Salto */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Altura de Salto
                  </h4>
                  <div className="space-y-3">
                    {analyzedPlayers.map((player) => (
                      <div key={player.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{player.name}</span>
                          <Badge variant="outline">{player.metrics?.jumpHeight}cm</Badge>
                        </div>
                        <Progress value={(player.metrics!.jumpHeight / 80) * 100} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Eficiência de Ataque */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Award className="h-4 w-4 text-secondary" />
                    Eficiência de Ataque
                  </h4>
                  <div className="space-y-3">
                    {analyzedPlayers.map((player) => (
                      <div key={player.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{player.name}</span>
                          <Badge variant="outline">{player.metrics?.attackEfficiency}%</Badge>
                        </div>
                        <Progress value={player.metrics!.attackEfficiency} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Precisão de Saque */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Award className="h-4 w-4 text-accent" />
                    Precisão de Saque
                  </h4>
                  <div className="space-y-3">
                    {analyzedPlayers.map((player) => (
                      <div key={player.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{player.name}</span>
                          <Badge variant="outline">{player.metrics?.serveAccuracy}%</Badge>
                        </div>
                        <Progress value={player.metrics!.serveAccuracy} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="detailed" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analyzedPlayers.map((player) => (
                <Card key={player.id} className="shadow-volleyball">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                        {player.name.charAt(0)}
                      </div>
                      <div>
                        <CardTitle>{player.name}</CardTitle>
                        <CardDescription>{player.position}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <p className="text-2xl font-bold text-primary">{player.metrics?.jumpHeight}cm</p>
                        <p className="text-xs text-muted-foreground">Salto</p>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <p className="text-2xl font-bold text-secondary">{player.metrics?.attackEfficiency}%</p>
                        <p className="text-xs text-muted-foreground">Ataque</p>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <p className="text-2xl font-bold text-accent">{player.metrics?.serveAccuracy}%</p>
                        <p className="text-xs text-muted-foreground">Saque</p>
                      </div>
                      <div className="text-center p-3 bg-muted rounded-lg">
                        <p className="text-2xl font-bold text-chart-4">{player.metrics?.overallPerformance}%</p>
                        <p className="text-xs text-muted-foreground">Geral</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
