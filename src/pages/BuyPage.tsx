import { useParams, Navigate, Link } from "react-router-dom";
import { useState } from "react";
import { AppleNav } from "@/components/AppleNav";
import { Footer } from "@/components/Footer";
import { BuyPageHero } from "@/components/BuyPageHero";
import { BuyPageOptions } from "@/components/BuyPageOptions";
import { products } from "@/data/products";

const BuyPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? products[productId] : null;

  const [selectedColor, setSelectedColor] = useState(
    product?.colors[0] || { name: "", hex: "" }
  );

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <AppleNav />

      {/* Spacer for fixed nav */}
      <div className="h-11" />

      {/* Product Sub-nav */}
      <div className="sticky top-11 z-40 bg-section-gray/95 nav-blur border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">
            {product.name}
          </span>
          <div className="flex items-center gap-6 text-sm">
            <Link
              to={`/product/${product.id}`}
              className="text-text-secondary hover:text-foreground transition-colors"
            >
              Обзор
            </Link>
            <span className="text-link-blue font-medium">Купить</span>
            <Link
              to={`/product/${product.id}`}
              className="text-text-secondary hover:text-foreground transition-colors"
            >
              Характеристики
            </Link>
          </div>
        </div>
      </div>


      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Product Image & Benefits */}
            <BuyPageHero 
              image={product.image} 
              name={product.name}
              selectedColor={selectedColor}
            />

            {/* Right - Buy Options */}
            <BuyPageOptions
              productId={product.id}
              name={product.name}
              tagline={product.tagline}
              price={product.price}
              originalPrice={product.originalPrice}
              colors={product.colors}
              selectedColor={selectedColor}
              onColorChange={setSelectedColor}
              image={product.image}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BuyPage;
