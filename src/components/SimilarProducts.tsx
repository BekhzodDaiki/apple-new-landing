import { Link } from "react-router-dom";
import { memo } from "react";

interface SimilarProduct {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
}

interface SimilarProductsProps {
  products: SimilarProduct[];
  currentProductId: string;
}

const ProductCard = memo(({ product, index }: { product: SimilarProduct; index: number }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-card rounded-3xl overflow-hidden opacity-0 animate-fade-in-up flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "forwards",
      }}
    >
      {/* Product Image */}
      <div className="relative h-48 md:h-56 flex items-center justify-center p-6 bg-gradient-to-b from-background to-card">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="p-6 text-center flex-1 flex flex-col justify-between border-t border-border/30">
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-link-blue transition-colors">
            {product.name}
          </h3>
          <p className="mt-2 text-sm text-text-secondary line-clamp-2">
            {product.tagline}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-sm font-medium text-foreground">
            От ${product.price.toLocaleString()}
          </p>
          <span className="mt-3 inline-block text-link-blue text-sm font-medium group-hover:underline">
            Подробнее {">"}
          </span>
        </div>
      </div>
    </Link>
  );
});

ProductCard.displayName = "SimilarProductCard";

export const SimilarProducts = ({ products, currentProductId }: SimilarProductsProps) => {
  // Filter out current product and take up to 3
  const similarProducts = products
    .filter((p) => p.id !== currentProductId)
    .slice(0, 3);

  if (similarProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-foreground mb-3">
          Похожие продукты
        </h2>
        <p className="text-center text-text-secondary mb-10">
          Вам также может понравиться
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {similarProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
