import { Package, Shield, RotateCcw, MessageCircle } from "lucide-react";
import { ProductColor } from "@/data/products";

interface BuyPageHeroProps {
  image: string;
  name: string;
  selectedColor?: ProductColor;
}

export const BuyPageHero = ({ image, name, selectedColor }: BuyPageHeroProps) => {
  const currentImage = selectedColor?.image || image;
  
  const benefits = [
    {
      icon: Package,
      text: "Бесплатная доставка или самовывоз из магазина",
    },
    {
      icon: Shield,
      text: "Гарантия 2 года и техническая поддержка",
    },
    {
      icon: RotateCcw,
      text: "Бесплатный возврат в течение 14 дней",
    },
  ];

  return (
    <div className="flex flex-col items-center lg:sticky lg:top-24">
      {/* Main Product Image */}
      <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
        <img
          src={currentImage}
          alt={`${name} - ${selectedColor?.name || ''}`}
          className="w-full h-full object-contain transition-opacity duration-300"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = image;
          }}
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
          <span>Есть вопросы о покупке {name}?</span>
          <br />
          <a href="#" className="text-link-blue hover:underline">
            Связаться со специалистом ↗
          </a>
        </div>
      </div>
    </div>
  );
};
