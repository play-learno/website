import { Metadata } from "next";
import BackgroundElements from "@/components/BackgroundElements";
import MainContent from "@/components/MainContent";
import { generateMetadata } from "@/utils/seo";

export const metadata: Metadata = generateMetadata({
  title:
    "Play Learno - Coming Soon | Magical Educational Books for Kids Aged 2-6",
  description:
    "� Something magical is coming! Play Learno is creating delightful educational books and interactive learning adventures for children aged 2-6. Join our adventure and be the first to discover stories designed to spark imagination and learning! �✨",
  keywords: [
    "children books coming soon",
    "educational books for kids",
    "kids books ages 2-6",
    "preschool learning books",
    "interactive books for toddlers",
    "child development books",
    "early childhood education",
    "learning adventures",
    "magical stories for kids",
    "educational activities",
    "play-based learning",
    "kindergarten preparation",
    "toddler books",
    "kids educational content",
    "early literacy development",
    "instagram playlearno",
    "youtube playlearno",
    "waitlist educational books",
  ],
  type: "website",
  url: "/",
});

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 relative overflow-hidden">
      <BackgroundElements />

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 lg:p-8">
        <MainContent />
      </div>
    </div>
  );
}
