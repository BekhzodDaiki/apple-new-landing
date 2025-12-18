import { Link } from "react-router-dom";

interface CategoryHeroProps {
  title: string;
  subtitle: string;
  image: string;
  productId: string;
}

export const CategoryHero = ({ title, subtitle, image, productId }: CategoryHeroProps) => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 py-8 md:py-12 text-center">
        {/* Text Content */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground tracking-tight opacity-0 animate-fade-in-up">
          {title}
        </h1>
        <p className="mt-3 text-xl md:text-2xl lg:text-3xl text-text-secondary max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-100">
          {subtitle}
        </p>

        {/* CTA Links */}
        <div className="mt-4 flex justify-center gap-6 opacity-0 animate-fade-in-up animation-delay-200">
          <Link
            to={`/product/${productId}`}
            className="text-link-blue hover:underline text-lg md:text-xl font-medium"
          >
            Подробнее {">"}
          </Link>
          <Link
            to={`/buy/${productId}`}
            className="text-link-blue hover:underline text-lg md:text-xl font-medium"
          >
            Купить {">"}
          </Link>
        </div>

        {/* Hero Image */}
        <div className="mt-6 md:mt-8 opacity-0 animate-scale-in animation-delay-300">
          <img
            src={image}
            alt={title}
            className="w-full max-w-3xl mx-auto object-contain"
          />
        </div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-section-gray to-transparent pointer-events-none" />
    </section>
  );
};
