import { GraduationCap, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                SV
              </div>
              <span className="font-bold text-lg">Scout Voleibol</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Plataforma open-source de análise automatizada de voleibol usando Inteligência Artificial.
            </p>
          </div>

          {/* Project Info */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Projeto Acadêmico
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Curso: Análise e Desenvolvimento de Sistemas</li>
              <li>Instituição: SENAC MS</li>
              <li>Semestre: 2º</li>
              <li>Ano: 2024</li>
            </ul>
          </div>

          {/* Team */}
          <div>
            <h3 className="font-semibold mb-4">Desenvolvedores</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xs font-bold">
                  JJ
                </div>
                José Junior
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-court flex items-center justify-center text-white text-xs font-bold">
                  YT
                </div>
                Yan Torres
              </li>
            </ul>
            <div className="mt-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                Projeto Open Source
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Scout Voleibol. Alinhado aos ODS 3, 4 e 9.</p>
        </div>
      </div>
    </footer>
  );
}
