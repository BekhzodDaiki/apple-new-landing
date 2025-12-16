import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ConsiderItem {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

interface CategoryConsiderProps {
  items: ConsiderItem[];
}

export const CategoryConsider = ({ items }: CategoryConsiderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-section-gray py-16 md:py-24 relative">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-center text-sm font-medium text-text-secondary uppercase tracking-wider mb-8 px-4">
          Почему выбирают
        </h2>

        {/* Navigation Arrows */}
        <div className="hidden md:block">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-foreground hover:bg-card transition-colors"
              aria-label="Прокрутить влево"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-foreground hover:bg-card transition-colors"
              aria-label="Прокрутить вправо"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[300px] bg-card rounded-2xl p-6 snap-start opacity-0 animate-fade-in-up hover:shadow-lg transition-shadow duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "forwards",
              }}
            >
              {/* Image placeholder with gradient */}
              <div className="relative h-40 md:h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <span className="text-5xl">{item.icon || "✨"}</span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {items.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-border"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
