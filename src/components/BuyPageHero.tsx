import { Package, Music, RotateCcw, MessageCircle } from "lucide-react";

interface BuyPageHeroProps {
  image: string;
  name: string;
}

export const BuyPageHero = ({ image, name }: BuyPageHeroProps) => {
  const benefits = [
    {
      icon: Package,
      text: "Get free delivery, or pick up available items at an Apple Store",
    },
    {
      icon: Music,
      text: "Get 3 months of Apple Fitness+ and Apple Music free",
    },
    {
      icon: RotateCcw,
      text: "Free extended returns now through 1/8/2026",
    },
  ];

  return (
    <div className="flex flex-col items-center lg:sticky lg:top-24">
      {/* Main Product Image */}
      <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain animate-scale-in"
        />
      </div>

      {/* Benefits */}
      <div className="mt-8 flex flex-col sm:flex-row gap-6 lg:gap-8 text-center">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 max-w-[180px]"
          >
            <benefit.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
            <p className="text-xs text-text-secondary leading-relaxed">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>

      {/* Chat with Specialist */}
      <div className="mt-8 flex items-center gap-3 text-sm text-text-secondary">
        <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
        <div>
          <span>Have questions about buying {name}?</span>
          <br />
          <a href="#" className="text-link-blue hover:underline">
            Chat with a Specialist ↗
          </a>
        </div>
      </div>
    </div>
  );
};
