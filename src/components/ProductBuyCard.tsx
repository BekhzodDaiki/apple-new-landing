import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Truck, Shield, RotateCcw } from "lucide-react";
import { ProductColor } from "@/data/products";

interface ProductBuyCardProps {
  productId: string;
  name: string;
  price: number;
  originalPrice?: number;
  selectedColor: ProductColor;
}

export const ProductBuyCard = ({
  productId,
  name,
  price,
  originalPrice,
  selectedColor,
}: ProductBuyCardProps) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="sticky top-16 bg-background border border-border rounded-2xl p-6 space-y-6">
      {/* Price */}
      <div>
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-semibold text-foreground">
            {formatPrice(price)}
          </span>
          {originalPrice && (
            <span className="text-lg text-text-secondary line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
        {originalPrice && (
          <span className="text-sm text-green-600 font-medium">
            Save {formatPrice(originalPrice - price)}
          </span>
        )}
      </div>

      {/* Selected Configuration */}
      <div className="py-4 border-y border-border">
        <div className="flex items-center gap-3">
          <div
            className="w-6 h-6 rounded-full border border-border"
            style={{ backgroundColor: selectedColor.hex }}
          />
          <span className="text-foreground">{selectedColor.name}</span>
        </div>
      </div>

      {/* Buy Buttons */}
      <div className="space-y-3">
        <Button asChild className="w-full bg-link-blue hover:bg-link-blue/90 text-white h-12 text-base font-medium">
          <Link to={`/buy/${productId}`}>
            <ShoppingBag className="w-5 h-5 mr-2" />
            Buy
          </Link>
        </Button>
        <Button variant="outline" className="w-full h-12 text-base font-medium">
          <Heart className="w-5 h-5 mr-2" />
          Add to Wishlist
        </Button>
      </div>

      {/* Delivery Info */}
      <div className="space-y-3 pt-4 border-t border-border">
        <div className="flex items-center gap-3 text-sm">
          <Truck className="w-5 h-5 text-text-secondary" />
          <div>
            <span className="text-foreground">Free Delivery</span>
            <span className="text-text-secondary block">Get it by Dec 24</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <RotateCcw className="w-5 h-5 text-text-secondary" />
          <span className="text-foreground">Free 14-day returns</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Shield className="w-5 h-5 text-text-secondary" />
          <span className="text-foreground">2-year warranty included</span>
        </div>
      </div>

      {/* Financing */}
      <div className="bg-section-gray rounded-xl p-4">
        <p className="text-sm text-foreground">
          Pay <span className="font-semibold">{formatPrice(Math.round(price / 12))}/mo.</span>
          {" "}for 12 months at 0% APR
        </p>
        <a href="#" className="text-sm text-link-blue hover:underline">
          Learn about financing options
        </a>
      </div>
    </div>
  );
};
