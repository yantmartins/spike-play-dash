import { Upload, BarChart3, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/volleyball-hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Jogadores de voleibol em ação" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Scout Automatizado
            <span className="block text-primary-glow mt-2">de Voleibol</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Análise inteligente de desempenho usando Inteligência Artificial.
            Tecnologia acessível para equipes amadoras.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow shadow-volleyball"
              onClick={() => document.getElementById('jogadores')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Upload className="mr-2 h-5 w-5" />
              Adicionar Jogadores
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => document.getElementById('comparacao')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <BarChart3 className="mr-2 h-5 w-5" />
              Ver Comparação
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Upload className="h-10 w-10 text-primary-glow mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Upload Simples</h3>
              <p className="text-white/80 text-sm">Envie vídeos gravados pelo celular</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Target className="h-10 w-10 text-primary-glow mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Análise IA</h3>
              <p className="text-white/80 text-sm">Detecção automática de fundamentos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <BarChart3 className="h-10 w-10 text-primary-glow mb-4 mx-auto" />
              <h3 className="font-semibold text-lg mb-2">Métricas Precisas</h3>
              <p className="text-white/80 text-sm">Dados objetivos para melhorar performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
