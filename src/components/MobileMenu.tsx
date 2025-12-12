import { X } from "lucide-react";
import { useEffect } from "react";

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
          <svg
            height="44"
            viewBox="0 0 14 44"
            width="14"
            className="fill-foreground"
          >
            <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.8912-2.4787-2.0228a9.7842 9.7842 0 0 1 -1.6628-5.469 4.2932 4.2932 0 0 1 2.0117-3.5085 3.9088 3.9088 0 0 1 2.0322-.5765c1.0637 0 1.9447.6917 2.6429.6917.67 0 1.7041-.7324 2.9113-.6243a3.7791 3.7791 0 0 1 2.9548 1.5765zm-3.4365-1.4854a3.7855 3.7855 0 0 0 .8875-2.7168 3.8639 3.8639 0 0 0 -2.5 1.296 3.5991 3.5991 0 0 0 -.9181 2.6186 3.19 3.19 0 0 0 2.5306-1.1978z" />
          </svg>
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
            <a
              key={item}
              href="#"
              className="block py-3 text-lg font-medium text-foreground border-b border-border/30 last:border-0 hover:text-text-secondary transition-colors opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};
