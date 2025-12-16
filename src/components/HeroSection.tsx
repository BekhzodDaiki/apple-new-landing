import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryLink?: string;
  secondaryLink?: string;
  primaryText?: string;
  secondaryText?: string;
  image: string;
  bgColor?: "white" | "gray" | "black";
  textColor?: "dark" | "light";
  productId?: string;
}

export const HeroSection = ({
  title,
  subtitle,
  primaryLink = "#",
  secondaryLink = "#",
  primaryText = "Подробнее",
  secondaryText = "Купить",
  image,
  bgColor = "white",
  textColor = "dark",
  productId,
}: HeroSectionProps) => {
  const bgClass = {
    white: "bg-background",
    gray: "bg-section-gray",
    black: "bg-foreground",
  }[bgColor];

  const textClass = textColor === "dark" ? "text-foreground" : "text-background";
  const subtitleClass = textColor === "dark" ? "text-text-secondary" : "text-background/80";

  const learnLink = productId ? `/product/${productId}` : primaryLink;
  const buyLink = productId ? `/product/${productId}` : secondaryLink;

  return (
    <section className={`${bgClass} pt-12 pb-0 overflow-hidden`}>
      <div className="max-w-[980px] mx-auto px-4 text-center">
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-semibold ${textClass} tracking-tight opacity-0 animate-fade-in-up`}
        >
          {title}
        </h2>
        <p
          className={`mt-3 text-lg md:text-xl ${subtitleClass} opacity-0 animate-fade-in-up animation-delay-100`}
        >
          {subtitle}
        </p>
        <div className="mt-4 flex items-center justify-center gap-6 opacity-0 animate-fade-in-up animation-delay-200">
          <Link
            to={learnLink}
            className="text-link-blue hover:underline text-lg"
          >
            {primaryText} {">"}
          </Link>
          <Link
            to={buyLink}
            className="text-link-blue hover:underline text-lg"
          >
            {secondaryText} {">"}
          </Link>
        </div>
        <Link to={learnLink} className="mt-8 block opacity-0 animate-scale-in animation-delay-300 cursor-pointer group overflow-hidden">
          <img
            src={image}
            alt={title}
            className="mx-auto max-w-full h-auto transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>
      </div>
    </section>
  );
};
