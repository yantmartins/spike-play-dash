import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Lightbulb, Target } from "lucide-react";
import femalePlayer from "@/assets/player-female.jpg";
import malePlayer from "@/assets/player-male.jpg";
import volleyballBall from "@/assets/volleyball-ball.jpg";

export function About() {
  return (
    <section id="sobre" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative volleyball */}
      <div className="absolute top-10 right-10 w-32 h-32 opacity-10">
        <img src={volleyballBall} alt="" className="w-full h-full object-cover rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Sobre o Projeto</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Scout Automatizado de Voleibol Amador - Democratizando a análise esportiva através da tecnologia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Conteúdo */}
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">O Problema</h3>
                      <p className="text-muted-foreground">
                        Equipes amadoras de voleibol em Mato Grosso do Sul não têm acesso a ferramentas 
                        profissionais de análise. Softwares comerciais são caros e complexos, limitando o 
                        desenvolvimento técnico baseado em dados.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Target className="h-6 w-6 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">A Solução</h3>
                      <p className="text-muted-foreground">
                        Um protótipo web open-source que usa Inteligência Artificial para analisar vídeos 
                        gravados por celular, extraindo métricas de fundamentos como saque, ataque, recepção 
                        e bloqueio de forma automática e acessível.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Impacto</h3>
                      <p className="text-muted-foreground">
                        Democratiza o acesso à tecnologia esportiva, promovendo desenvolvimento técnico 
                        baseado em dados para equipes escolares, universitárias e projetos comunitários. 
                        Alinhado aos ODS 4, 9 e 3.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Imagens */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={femalePlayer} 
                    alt="Jogadora de voleibol" 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <Card className="bg-gradient-primary text-white">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2">Visão Computacional</h4>
                    <p className="text-sm text-white/90">
                      Detecção automática de movimentos e fundamentos
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="bg-gradient-court text-white">
                  <CardContent className="pt-6">
                    <h4 className="font-bold mb-2">Tecnologia Acessível</h4>
                    <p className="text-sm text-white/90">
                      Funciona com vídeos de celular, sem equipamento especial
                    </p>
                  </CardContent>
                </Card>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={malePlayer} 
                    alt="Jogador de voleibol" 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Equipe */}
          <Card className="shadow-volleyball">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-6">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-2xl font-bold">Equipe do Projeto</h3>
                  <p className="text-muted-foreground">
                    2º Semestre - Tecnologia em Análise e Desenvolvimento de Sistemas - SENAC MS
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                    JJ
                  </div>
                  <div>
                    <p className="font-semibold">José Junior</p>
                    <p className="text-sm text-muted-foreground">Desenvolvedor</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-gradient-court flex items-center justify-center text-white font-bold text-lg">
                    YT
                  </div>
                  <div>
                    <p className="font-semibold">Yan Torres</p>
                    <p className="text-sm text-muted-foreground">Desenvolvedor</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
