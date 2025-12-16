import { Link } from "react-router-dom";

interface ProductLineupItem {
  id: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  isNew?: boolean;
  colors?: string[];
}

interface CategoryProductsProps {
  title: string;
  products: ProductLineupItem[];
  categoryId: string;
}

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-3xl overflow-hidden opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              {/* Product Card Content */}
              <div className="p-6 pb-0 text-center">
                {/* New Badge */}
                {product.isNew && (
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full mb-3">
                    Новинка
                  </span>
                )}

                {/* Product Name */}
                <h3 className="text-2xl font-semibold text-foreground">
                  {product.name}
                </h3>
              </div>

              {/* Product Image */}
              <div className="relative h-64 md:h-72 flex items-center justify-center px-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Color Options */}
              {product.colors && product.colors.length > 0 && (
                <div className="flex justify-center gap-2 py-4">
                  {product.colors.map((color, i) => (
                    <button
                      key={i}
                      className="w-4 h-4 rounded-full border-2 border-transparent hover:border-border transition-colors ring-1 ring-border/20"
                      style={{ backgroundColor: color }}
                      title={`Цвет ${i + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Product Info */}
              <div className="p-6 pt-2 text-center border-t border-border/50">
                <p className="text-text-secondary text-sm mb-3 leading-relaxed min-h-[40px]">
                  {product.tagline}
                </p>

                {/* Price */}
                <p className="text-sm text-foreground font-medium mb-5">
                  {product.price}
                </p>

                {/* CTA Links */}
                <div className="flex justify-center gap-6">
                  <Link
                    to={`/product/${categoryId}`}
                    className="text-link-blue hover:underline text-sm font-medium"
                  >
                    Подробнее {">"}
                  </Link>
                  <Link
                    to={`/buy/${categoryId}`}
                    className="text-link-blue hover:underline text-sm font-medium"
                  >
                    Купить {">"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
