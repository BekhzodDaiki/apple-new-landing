import { X, Smartphone } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AppleLogo from "./utils/AppleLogo";

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

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/80 animate-fade-in"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="absolute top-0 left-0 right-0 bg-nav nav-blur animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between h-11 px-4 border-b border-border/30">
          <span className="flex items-center gap-0.5 text-foreground font-semibold text-lg tracking-tight">
            mobi st<AppleLogo />re
          </span>
          <button
            onClick={onClose}
            className="text-foreground hover:opacity-70 transition-opacity p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-4 py-4 max-h-[calc(100vh-44px)] overflow-y-auto">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={onClose}
              className="block py-3 text-lg font-medium text-foreground border-b border-border/30 last:border-0 hover:text-text-secondary transition-colors opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
