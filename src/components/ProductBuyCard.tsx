import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Truck, Shield, Phone } from "lucide-react";
import { ProductColor } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface ProductBuyCardProps {
  productId: string;
  name: string;
  price: number;
  originalPrice?: number;
  selectedColor: ProductColor;
  image: string;
}

export const ProductBuyCard = ({
  productId,
  name,
  price,
  originalPrice,
  selectedColor,
  image,
}: ProductBuyCardProps) => {
  const { addItem } = useCart();

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  };

  const handleAddToCart = () => {
    addItem({
      productId,
      name,
      price,
      color: selectedColor,
      image: selectedColor.image || image,
    });
    toast.success(`${name} добавлен в корзину`);
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
            Экономия {formatPrice(originalPrice - price)}
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
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-link-blue hover:bg-link-blue/90 text-white h-12 text-base font-medium"
        >
          <ShoppingBag className="w-5 h-5 mr-2" />
          В корзину
        </Button>
        <Button variant="outline" className="w-full h-12 text-base font-medium">
          <Heart className="w-5 h-5 mr-2" />
          В избранное
        </Button>
      </div>

      {/* Delivery Info */}
      <div className="space-y-3 pt-4 border-t border-border">
        <div className="flex items-center gap-3 text-sm">
          <Truck className="w-5 h-5 text-text-secondary" />
          <span className="text-foreground">Имеется доставка</span>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Shield className="w-5 h-5 text-text-secondary" />
          <span className="text-foreground">Гарантия на заводской брак</span>
        </div>
      </div>

      {/* Financing */}
      <div className="bg-section-gray rounded-xl p-4">
        <p className="text-sm text-foreground">
          Есть рассрочка от 3 до 12 месяцев
        </p>
        <a href="tel:+79991234567" className="text-sm text-link-blue hover:underline inline-flex items-center gap-1">
          <Phone className="w-4 h-4" />
          Узнать о рассрочке
        </a>
      </div>
    </div>
  );
};
