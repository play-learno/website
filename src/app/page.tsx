import { Metadata } from "next";
import BackgroundElements from "@/components/BackgroundElements";
import MainContent from "@/components/MainContent";
import { generateMetadata } from "@/utils/seo";

export const metadata: Metadata = generateMetadata({
  title:
    "Play Learno - Coming Soon | Educational Books & Learning Adventures for Kids",
  description:
    "🌟 Something amazing is coming! Play Learno is crafting thoughtful educational books and interactive learning adventures for children aged 2-6. Join our waitlist to be the first to discover stories designed with child development in mind. Early childhood education made engaging and fun! 📖",
  keywords: [
    "children books coming soon",
    "educational books for kids",
    "early childhood education",
    "preschool learning activities",
    "interactive books for toddlers",
    "child development books",
    "ages 2-6 learning",
    "kids story books",
    "educational content for children",
    "learning adventures",
    "play-based learning",
    "early literacy",
    "kindergarten readiness",
    "email signup kids books",
    "notify me launch",
    "waitlist educational books",
  ],
  type: "website",
  url: "/",
});

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
