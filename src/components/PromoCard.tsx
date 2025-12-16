import { Link } from "react-router-dom";

interface PromoCardProps {
  title: string;
  subtitle: string;
  image: string;
  primaryLink?: string;
  secondaryLink?: string;
  primaryText?: string;
  secondaryText?: string;
  textColor?: "dark" | "light";
  size?: "half" | "full";
  productId?: string;
}

export const PromoCard = ({
  title,
  subtitle,
  image,
  primaryLink = "#",
  secondaryLink,
  primaryText = "Learn more",
  secondaryText = "Buy",
  textColor = "dark",
  size = "half",
  productId,
}: PromoCardProps) => {
  const textClass = textColor === "dark" ? "text-foreground" : "text-background";
  const subtitleClass = textColor === "dark" ? "text-text-secondary" : "text-background/80";

  const learnMoreLink = productId ? `/product/${productId}` : primaryLink;
  const buyLink = productId ? `/product/${productId}` : secondaryLink;

  return (
    <div
      className={`relative bg-section-gray overflow-hidden ${
        size === "full" ? "col-span-2" : "col-span-1"
      }`}
    >
      <div className="pt-10 pb-0 text-center relative z-10">
        <h3 className={`text-2xl md:text-3xl font-semibold ${textClass} tracking-tight`}>
          {title}
        </h3>
        <p className={`mt-2 text-base md:text-lg ${subtitleClass}`}>
          {subtitle}
        </p>
        <div className="mt-3 flex items-center justify-center gap-4">
          <Link
            to={learnMoreLink}
            className="text-link-blue hover:underline text-base"
          >
            {primaryText} {">"}
          </Link>
          {buyLink && (
            <Link
              to={buyLink}
              className="text-link-blue hover:underline text-base"
            >
              {secondaryText} {">"}
            </Link>
          )}
        </div>
      </div>
      <Link to={learnMoreLink} className="mt-4 block cursor-pointer group overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </Link>
    </div>
  );
};
