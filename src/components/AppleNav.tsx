import { Search, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";
import { CartSheet } from "./CartSheet";
import logoImage from "@/assets/logo.png";

const navItems = [
  { name: "Store", path: "/" },
  { name: "Mac", path: "/mac" },
  { name: "iPad", path: "/ipad" },
  { name: "iPhone", path: "/iphone" },
  { name: "Watch", path: "/watch" },
  { name: "AirPods", path: "/airpods" },
  { name: "Dyson", path: "/dyson" },
  { name: "Alisa", path: "/alisa" },
  { name: "Whoop", path: "/whoop" },
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

            {/* Logo - Center on mobile, left on desktop */}
            <Link 
              to="/" 
              className="hover:opacity-80 transition-opacity md:order-first absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
            >
              <img 
                src={logoImage} 
                alt="MobiStore" 
                className="h-8 md:h-6 w-auto invert dark:invert-0"
              />
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-7">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-xs text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Search and Cart */}
            <div className="flex items-center space-x-5">
              <button className="text-foreground/80 hover:text-foreground transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <CartSheet />
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};
