import Image from "next/image";
import FeatureCard from "./FeatureCard";

export default function HeroSection() {
  return (
    <div className="flex-1 max-w-lg">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Children reading colorful books"
            width={600}
            height={320}
            className="w-full h-80 object-cover rounded-2xl shadow-lg"
          />
          <div className="mt-6 space-y-4">
            <FeatureCard
              icon="📚"
              title="Interactive Stories"
              description="Engaging tales that come to life"
              bgGradient="bg-gradient-to-br from-blue-400 to-pink-400"
            />
            <FeatureCard
              icon="🎮"
              title="Learning Games"
              description="Fun activities for skill development"
              bgGradient="bg-gradient-to-br from-pink-400 to-blue-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
