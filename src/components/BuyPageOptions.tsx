import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Check } from "lucide-react";
import { ProductColor } from "@/data/products";

interface BuyOption {
  id: string;
  title: string;
  description?: string;
  price?: string;
  features?: string[];
  badge?: string;
}

interface BuyPageOptionsProps {
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  colors: ProductColor[];
  selectedColor: ProductColor;
  onColorChange: (color: ProductColor) => void;
}

export const BuyPageOptions = ({
  name,
  tagline,
  price,
  originalPrice,
  colors,
  selectedColor,
  onColorChange,
}: BuyPageOptionsProps) => {
  const [selectedEngraving, setSelectedEngraving] = useState<string>("none");
  const [selectedCare, setSelectedCare] = useState<string>("none");

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const engravingOptions: BuyOption[] = [
    {
      id: "engraving",
      title: "Add Engraving",
      description:
        "Engrave a mix of emoji, names, initials, and numbers to make it unmistakably yours. Only at Apple.",
      price: "Free",
    },
    {
      id: "none",
      title: "No Engraving",
    },
  ];

  const careOptions: BuyOption[] = [
    {
      id: "applecare",
      title: "AppleCare+",
      description: "Cover this product only",
      price: "$1.99/mo. or $19.99/yr. until cancelled",
      features: [
        "Unlimited repairs for accidents like drops and spills",
        "24/7 priority support from Apple experts",
        "Express Replacement Service",
      ],
    },
    {
      id: "applecare-one",
      title: "AppleCare One",
      description: "Cover multiple products, including this one",
      price: "$19.99/mo. until cancelled",
      badge: "New",
    },
    {
      id: "none",
      title: "No AppleCare Coverage",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <span className="text-sm font-medium text-destructive">New</span>
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mt-1">
          Buy {name}
        </h1>
        <p className="mt-3 text-lg text-text-secondary">{tagline}</p>
      </div>

      {/* Personalization Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          Free and fast personalization.
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
          AppleCare coverage.{" "}
          <span className="font-normal text-text-secondary">
            Choose your plan.
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
            Color.{" "}
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

        <Button className="w-full bg-link-blue hover:bg-link-blue/90 text-white h-12 text-base font-medium rounded-xl">
          <ShoppingBag className="w-5 h-5 mr-2" />
          Add to Bag
        </Button>

        <p className="text-center text-sm text-text-secondary">
          Or pay {formatPrice(Math.round(price / 12))}/mo. for 12 months at 0%
          APR.{" "}
          <a href="#" className="text-link-blue hover:underline">
            Learn more
          </a>
        </p>
      </div>
    </div>
  );
};
