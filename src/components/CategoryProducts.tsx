import { Link } from "react-router-dom";
import { useState, memo } from "react";

interface ColorOption {
  hex: string;
  image: string;
}

interface ProductLineupItem {
  id: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  isNew?: boolean;
  colors?: string[];
  colorImages?: ColorOption[];
}

interface CategoryProductsProps {
  title: string;
  products: ProductLineupItem[];
  categoryId: string;
}

const ProductCard = memo(({ product, categoryId, index }: { product: ProductLineupItem; categoryId: string; index: number }) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  
  const currentImage = product.colorImages?.[selectedColorIndex]?.image || product.image;
  const colors = product.colorImages?.map(c => c.hex) || product.colors || [];

  return (
    <div
      className="group relative bg-card rounded-3xl overflow-hidden opacity-0 animate-fade-in-up flex flex-col h-full"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "forwards",
      }}
    >
      {/* Product Card Content */}
      <div className="p-6 pb-0 text-center h-[80px] flex flex-col justify-center">
        {/* New Badge */}
        {product.isNew && (
          <span className="inline-block bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full mb-2">
            Новинка
          </span>
        )}

        {/* Product Name - Clickable */}
        <Link to={`/product/${product.id}`} className="text-xl font-semibold text-foreground hover:text-link-blue transition-colors">
          {product.name}
        </Link>
      </div>

      {/* Product Image - Clickable */}
      <Link to={`/product/${product.id}`} className="relative h-56 flex items-center justify-center px-6 cursor-pointer">
        <img
          src={currentImage}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.src = product.image;
          }}
        />
      </Link>

      {/* Color Options */}
      <div className="flex justify-center gap-2 py-3 h-[44px]">
        {colors.length > 0 ? (
          colors.map((color, i) => (
            <button
              key={i}
              onClick={() => setSelectedColorIndex(i)}
              className={`w-4 h-4 rounded-full transition-all ring-1 ring-border/20 ${
                selectedColorIndex === i
                  ? "ring-2 ring-link-blue ring-offset-2 scale-110"
                  : "hover:scale-110"
              }`}
              style={{ backgroundColor: color }}
              aria-label={`Цвет ${i + 1}`}
            />
          ))
        ) : (
          <div className="h-4" />
        )}
      </div>

      {/* Product Info */}
      <div className="p-6 pt-2 text-center border-t border-border/50 flex-1 flex flex-col justify-between">
        <p className="text-text-secondary text-sm mb-3 leading-relaxed line-clamp-2">
          {product.tagline}
        </p>

        <div>
          {/* Price */}
          <p className="text-sm text-foreground font-medium mb-4">
            {product.price}
          </p>

          {/* CTA Links */}
          <div className="flex justify-center gap-6">
            <Link
              to={`/product/${product.id}`}
              className="text-link-blue hover:underline text-sm font-medium"
            >
              Подробнее {">"}
            </Link>
            <Link
              to={`/buy/${product.id}`}
              className="text-link-blue hover:underline text-sm font-medium"
            >
              Купить {">"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

export const CategoryProducts = ({ title, products, categoryId }: CategoryProductsProps) => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-foreground mb-4">
          {title}
        </h2>
        <p className="text-center text-text-secondary mb-12">
          Найдите лучший вариант для вас.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              categoryId={categoryId} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};
