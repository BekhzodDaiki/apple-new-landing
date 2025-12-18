import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Check } from "lucide-react";
import { ProductColor } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface BuyOption {
  id: string;
  title: string;
  description?: string;
  price?: string;
  features?: string[];
  badge?: string;
}

interface BuyPageOptionsProps {
  productId: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  colors: ProductColor[];
  selectedColor: ProductColor;
  onColorChange: (color: ProductColor) => void;
  image: string;
}

export const BuyPageOptions = ({
  productId,
  name,
  tagline,
  price,
  originalPrice,
  colors,
  selectedColor,
  onColorChange,
  image,
}: BuyPageOptionsProps) => {
  const { addItem } = useCart();
  const [selectedEngraving, setSelectedEngraving] = useState<string>("none");
  const [selectedCare, setSelectedCare] = useState<string>("none");

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const engravingOptions: BuyOption[] = [
    {
      id: "engraving",
      title: "Добавить гравировку",
      description:
        "Выгравируйте эмодзи, имена, инициалы и числа, чтобы сделать устройство уникальным. Только в Apple.",
      price: "Бесплатно",
    },
    {
      id: "none",
      title: "Без гравировки",
    },
  ];

  const careOptions: BuyOption[] = [
    {
      id: "applecare",
      title: "AppleCare+",
      description: "Защита только для этого продукта",
      price: "$1,99/мес. или $19,99/год до отмены",
      features: [
        "Неограниченный ремонт при случайных повреждениях",
        "Приоритетная поддержка 24/7 от экспертов Apple",
        "Экспресс-замена",
      ],
    },
    {
      id: "applecare-one",
      title: "AppleCare One",
      description: "Защита нескольких продуктов, включая этот",
      price: "$19,99/мес. до отмены",
      badge: "Новинка",
    },
    {
      id: "none",
      title: "Без AppleCare",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <span className="text-sm font-medium text-destructive">Новинка</span>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mt-1">
          Купить {name}
        </h1>
        <p className="mt-3 text-lg text-text-secondary">{tagline}</p>
      </div>

      {/* Personalization Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          Бесплатная быстрая персонализация.
        </h2>

        <div className="space-y-3">
          {engravingOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedEngraving(option.id)}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                selectedEngraving === option.id
                  ? "border-link-blue bg-background"
                  : "border-border bg-background hover:border-muted-foreground/30"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">
                      {option.title}
                    </span>
                    {selectedEngraving === option.id && (
                      <Check className="w-4 h-4 text-link-blue" />
                    )}
                  </div>
                  {option.description && (
                    <p className="mt-1 text-sm text-text-secondary">
                      {option.description}
                    </p>
                  )}
                </div>
                {option.price && (
                  <span className="text-sm text-text-secondary ml-4">
                    {option.price}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* AppleCare Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          Защита AppleCare.{" "}
          <span className="font-normal text-text-secondary">
            Выберите план.
          </span>
        </h2>

        <div className="space-y-3">
          {careOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedCare(option.id)}
              className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                selectedCare === option.id
                  ? "border-link-blue bg-background"
                  : "border-border bg-background hover:border-muted-foreground/30"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {option.badge && (
                    <span className="text-xs font-medium text-destructive">
                      {option.badge}
                    </span>
                  )}
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">
                      {option.title}
                    </span>
                    {selectedCare === option.id && (
                      <Check className="w-4 h-4 text-link-blue" />
                    )}
                  </div>
                  {option.description && (
                    <p className="text-sm text-text-secondary">
                      {option.description}
                    </p>
                  )}
                  {option.price && (
                    <p className="text-sm text-text-secondary mt-1">
                      {option.price}
                    </p>
                  )}
                  {option.features && (
                    <ul className="mt-3 space-y-1">
                      {option.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-text-secondary flex items-start gap-2"
                        >
                          <span className="text-foreground">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Color Selection */}
      {colors.length > 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-foreground">
            Цвет.{" "}
            <span className="font-normal text-text-secondary">
              {selectedColor.name}
            </span>
          </h2>

          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => onColorChange(color)}
                className={`w-10 h-10 rounded-full border-2 transition-all ${
                  selectedColor.name === color.name
                    ? "border-link-blue ring-2 ring-link-blue ring-offset-2"
                    : "border-border hover:border-muted-foreground"
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}

      {/* Price & Add to Bag */}
      <div className="pt-6 border-t border-border space-y-4">
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-semibold text-foreground">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="text-lg text-text-secondary line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>

        <Button 
          onClick={() => {
            addItem({
              productId,
              name,
              price,
              color: selectedColor,
              image: selectedColor.image || image,
            });
            toast.success(`${name} добавлен в корзину`);
          }}
          className="w-full bg-link-blue hover:bg-link-blue/90 text-white h-12 text-base font-medium rounded-xl"
        >
          <ShoppingBag className="w-5 h-5 mr-2" />
          Добавить в корзину
        </Button>

        <p className="text-center text-sm text-text-secondary">
          Или платите {formatPrice(Math.round(price / 12))}/мес. в течение 12 месяцев под 0%
          годовых.{" "}
          <a href="#" className="text-link-blue hover:underline">
            Подробнее
          </a>
        </p>
      </div>
    </div>
  );
};
