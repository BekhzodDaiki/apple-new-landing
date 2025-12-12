import { Search, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

const navItems = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "Dyson",
  "Alisa",
  "Hoop",
];

export const AppleNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-nav/80 nav-blur border-b border-border/50">
        <div className="max-w-[980px] mx-auto px-4">
          <div className="flex items-center justify-between h-11">
            {/* Mobile Menu Button - Left side */}
            <button
              className="md:hidden text-foreground/80 hover:text-foreground transition-colors p-2 -ml-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Apple Logo - Center on mobile, left on desktop */}
            <a 
              href="/" 
              className="text-foreground hover:opacity-80 transition-opacity md:order-first absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
            >
              <svg
                height="44"
                viewBox="0 0 14 44"
                width="14"
                className="fill-current"
              >
                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.8912-2.4787-2.0228a9.7842 9.7842 0 0 1 -1.6628-5.469 4.2932 4.2932 0 0 1 2.0117-3.5085 3.9088 3.9088 0 0 1 2.0322-.5765c1.0637 0 1.9447.6917 2.6429.6917.67 0 1.7041-.7324 2.9113-.6243a3.7791 3.7791 0 0 1 2.9548 1.5765zm-3.4365-1.4854a3.7855 3.7855 0 0 0 .8875-2.7168 3.8639 3.8639 0 0 0 -2.5 1.296 3.5991 3.5991 0 0 0 -.9181 2.6186 3.19 3.19 0 0 0 2.5306-1.1978z" />
              </svg>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-7">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Search and Cart */}
            <div className="flex items-center space-x-5">
              <button className="text-foreground/80 hover:text-foreground transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <button className="text-foreground/80 hover:text-foreground transition-colors">
                <ShoppingBag className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
