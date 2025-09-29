interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  bgGradient: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  bgGradient,
}: FeatureCardProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-12 h-12 ${bgGradient} rounded-2xl flex items-center justify-center`}
      >
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}
