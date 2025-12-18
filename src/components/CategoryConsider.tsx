import { useRef, useState, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  RefreshCw, 
  Gem, 
  Brain, 
  Lock, 
  Camera, 
  Shield, 
  Zap, 
  Pencil, 
  Keyboard, 
  Battery, 
  Smartphone, 
  Target,
  Heart,
  Dumbbell,
  AlertCircle,
  MessageCircle,
  CreditCard,
  Palette,
  VolumeX,
  Music,
  Headphones,
  Repeat,
  Mic,
  Monitor,
  Cpu,
  HardDrive,
  Layers,
  Sparkles,
  Home,
  Lightbulb,
  Wind,
  Gauge,
  Wifi,
  Bot,
  type LucideIcon
} from "lucide-react";

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  "🔄": RefreshCw,
  "💎": Gem,
  "🧠": Brain,
  "🔒": Lock,
  "📸": Camera,
  "🛡️": Shield,
  "⚡": Zap,
  "✏️": Pencil,
  "⌨️": Keyboard,
  "🔋": Battery,
  "📱": Smartphone,
  "🎯": Target,
  "❤️": Heart,
  "💪": Dumbbell,
  "🆘": AlertCircle,
  "📲": MessageCircle,
  "💳": CreditCard,
  "🎨": Palette,
  "🔇": VolumeX,
  "🎵": Music,
  "🎧": Headphones,
  "🗣️": Mic,
  "🖥️": Monitor,
  "💻": Cpu,
  "💾": HardDrive,
  "📐": Layers,
  "✨": Sparkles,
  "🏠": Home,
  "💡": Lightbulb,
  "🌬️": Wind,
  "📊": Gauge,
  "📡": Wifi,
  "🤖": Bot,
};

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

  const getIcon = (iconEmoji?: string) => {
    if (!iconEmoji) return Sparkles;
    return iconMap[iconEmoji] || Sparkles;
  };

  return (
    <section className="bg-section-gray py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-center text-sm font-medium text-text-secondary uppercase tracking-wider mb-8 px-4">
          Почему выбирают
        </h2>

        {/* Navigation Arrows */}
        <div className="hidden md:block">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-foreground hover:bg-card hover:scale-110 transition-all duration-300"
              aria-label="Прокрутить влево"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-foreground hover:bg-card hover:scale-110 transition-all duration-300"
              aria-label="Прокрутить вправо"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item, index) => {
            const IconComponent = getIcon(item.icon);
            return (
              <div
                key={index}
                className="group flex-shrink-0 w-[300px] md:w-[340px] bg-card rounded-3xl p-7 snap-start opacity-0 animate-fade-in-up hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Icon Container with gradient and animation */}
                <div className="relative h-44 md:h-52 mb-5 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-muted flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-link-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6 rounded-full bg-background/80 backdrop-blur-sm shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
                    <IconComponent 
                      className="w-14 h-14 md:w-16 md:h-16 text-link-blue group-hover:text-primary transition-colors duration-300" 
                      strokeWidth={1.5}
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-link-blue/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-gradient-to-tr from-accent/20 to-transparent blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-link-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
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
