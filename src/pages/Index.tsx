import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { VideoUpload } from "@/components/VideoUpload";
import { ScoutDashboard } from "@/components/ScoutDashboard";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoUpload />
        <ScoutDashboard />
      </main>
      <Footer />
    </div>
  );
}
