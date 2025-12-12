interface PromoBannerProps {
  text: string;
  linkText?: string;
  linkHref?: string;
}

export const PromoBanner = ({
  text,
  linkText = "Shop",
  linkHref = "#",
}: PromoBannerProps) => {
  return (
    <div className="bg-section-gray py-3 text-center text-sm text-foreground">
      <span>{text}</span>{" "}
      <a href={linkHref} className="text-link-blue hover:underline">
        {linkText} {">"}
      </a>
    </div>
  );
};
