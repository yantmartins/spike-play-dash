import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
              SV
            </div>
            <span className="font-bold text-xl">Scout Voleibol</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('upload')} 
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Upload
            </button>
            <button 
              onClick={() => scrollToSection('dashboard')} 
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Dashboard
            </button>
            <Button>Começar</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border space-y-3">
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('upload')} 
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Upload
            </button>
            <button 
              onClick={() => scrollToSection('dashboard')} 
              className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-colors"
            >
              Dashboard
            </button>
            <div className="px-4">
              <Button className="w-full">Começar</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
