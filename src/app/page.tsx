import BackgroundElements from "@/components/BackgroundElements";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      <BackgroundElements />

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <MainContent />
      </div>
    </div>
  );
}
