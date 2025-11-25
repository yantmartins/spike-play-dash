import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Target, 
  TrendingUp, 
  Activity, 
  Award,
  ArrowUp,
  ArrowDown,
  Minus
} from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  percentage: number;
  trend: "up" | "down" | "neutral";
  icon: React.ReactNode;
}

function MetricCard({ title, value, percentage, trend, icon }: MetricCardProps) {
  const trendIcon = trend === "up" ? <ArrowUp className="h-4 w-4" /> : 
                     trend === "down" ? <ArrowDown className="h-4 w-4" /> : 
                     <Minus className="h-4 w-4" />;
  const trendColor = trend === "up" ? "text-green-600" : 
                      trend === "down" ? "text-red-600" : 
                      "text-muted-foreground";

  return (
    <Card className="shadow-sm hover:shadow-volleyball transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-primary">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-2">{value}</div>
        <div className="flex items-center gap-2">
          <Progress value={percentage} className="h-2" />
          <span className={`text-xs flex items-center gap-1 ${trendColor}`}>
            {trendIcon}
            {percentage}%
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

interface FundamentoData {
  nome: string;
  eficiencia: number;
  total: number;
  positivos: number;
  neutros: number;
  negativos: number;
}

function FundamentoCard({ fundamento }: { fundamento: FundamentoData }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {fundamento.nome}
          <Badge variant={fundamento.eficiencia >= 60 ? "default" : "secondary"}>
            {fundamento.eficiencia}% eficiência
          </Badge>
        </CardTitle>
        <CardDescription>{fundamento.total} ações detectadas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm">Positivos</span>
            <span className="font-semibold text-green-600">{fundamento.positivos}</span>
          </div>
          <Progress value={(fundamento.positivos / fundamento.total) * 100} className="h-2" />
          
          <div className="flex justify-between items-center">
            <span className="text-sm">Neutros</span>
            <span className="font-semibold text-yellow-600">{fundamento.neutros}</span>
          </div>
          <Progress value={(fundamento.neutros / fundamento.total) * 100} className="h-2" />
          
          <div className="flex justify-between items-center">
            <span className="text-sm">Negativos</span>
            <span className="font-semibold text-red-600">{fundamento.negativos}</span>
          </div>
          <Progress value={(fundamento.negativos / fundamento.total) * 100} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}

export function ScoutDashboard() {
  const fundamentos: FundamentoData[] = [
    { nome: "Saque", eficiencia: 72, total: 45, positivos: 32, neutros: 10, negativos: 3 },
    { nome: "Recepção", eficiencia: 68, total: 52, positivos: 35, neutros: 12, negativos: 5 },
    { nome: "Levantamento", eficiencia: 85, total: 48, positivos: 41, neutros: 5, negativos: 2 },
    { nome: "Ataque", eficiencia: 64, total: 58, positivos: 37, neutros: 14, negativos: 7 },
    { nome: "Bloqueio", eficiencia: 55, total: 28, positivos: 15, neutros: 8, negativos: 5 },
    { nome: "Defesa", eficiencia: 70, total: 42, positivos: 29, neutros: 9, negativos: 4 },
  ];

  return (
    <section id="dashboard" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Dashboard de Análise</h2>
          <p className="text-muted-foreground text-lg">
            Métricas detalhadas extraídas pela análise de IA
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="fundamentos">Fundamentos</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Métricas Principais */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard 
                title="Altura Média de Salto"
                value="68 cm"
                percentage={75}
                trend="up"
                icon={<TrendingUp className="h-4 w-4" />}
              />
              <MetricCard 
                title="Eficiência de Ataque"
                value="64%"
                percentage={64}
                trend="up"
                icon={<Target className="h-4 w-4" />}
              />
              <MetricCard 
                title="Taxa de Acerto (Saque)"
                value="72%"
                percentage={72}
                trend="neutral"
                icon={<Activity className="h-4 w-4" />}
              />
              <MetricCard 
                title="Performance Geral"
                value="69%"
                percentage={69}
                trend="up"
                icon={<Award className="h-4 w-4" />}
              />
            </div>

            {/* Resumo por Fundamento */}
            <Card className="shadow-court">
              <CardHeader>
                <CardTitle>Resumo de Fundamentos</CardTitle>
                <CardDescription>Visão geral do desempenho em cada fundamento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {fundamentos.map((fund) => (
                    <div key={fund.nome} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{fund.nome}</span>
                        <span className="text-sm text-muted-foreground">
                          {fund.eficiencia}% ({fund.positivos}/{fund.total})
                        </span>
                      </div>
                      <Progress value={fund.eficiencia} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="fundamentos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fundamentos.map((fundamento) => (
                <FundamentoCard key={fundamento.nome} fundamento={fundamento} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
