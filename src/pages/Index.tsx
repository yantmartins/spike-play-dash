import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { PlayerManagement, Player } from "@/components/PlayerManagement";
import { PlayerVideoUpload } from "@/components/PlayerVideoUpload";
import { ComparisonDashboard } from "@/components/ComparisonDashboard";
import { Footer } from "@/components/Footer";

export default function Index() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const handlePlayerSelect = (playerId: string) => {
    const player = players.find(p => p.id === playerId);
    if (player) {
      setSelectedPlayer(player);
    }
  };

  const handleUploadComplete = (playerId: string, metrics: any) => {
    setPlayers(players.map(p => 
      p.id === playerId 
        ? { ...p, videoAnalyzed: true, metrics } 
        : p
    ));
    setSelectedPlayer(null);
  };

  const handleCloseUpload = () => {
    setSelectedPlayer(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <PlayerManagement 
          onPlayerSelect={handlePlayerSelect}
          players={players}
          setPlayers={setPlayers}
        />
        <ComparisonDashboard players={players} />
      </main>
      <Footer />
      
      {selectedPlayer && (
        <PlayerVideoUpload
          player={selectedPlayer}
          onUploadComplete={handleUploadComplete}
          onClose={handleCloseUpload}
        />
      )}
    </div>
  );
}
