import { useState } from "react";
import { ProductColor } from "@/data/products";

interface ProductGalleryProps {
  image: string;
  name: string;
  colors: ProductColor[];
  selectedColor: ProductColor;
  onColorChange: (color: ProductColor) => void;
}

export const ProductGallery = ({
  image,
  name,
  colors,
  selectedColor,
  onColorChange,
}: ProductGalleryProps) => {
  return (
    <div className="flex flex-col items-center">
      {/* Main Image */}
      <div className="relative w-full max-w-md aspect-square flex items-center justify-center bg-section-gray rounded-2xl overflow-hidden mb-6">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-8 animate-scale-in"
        />
      </div>

      {/* Color Selector */}
      {colors.length > 1 && (
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => onColorChange(color)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  selectedColor.name === color.name
                    ? "border-link-blue scale-110"
                    : "border-border hover:scale-105"
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
          <span className="text-sm text-text-secondary">{selectedColor.name}</span>
        </div>
      )}
    </div>
  );
};
