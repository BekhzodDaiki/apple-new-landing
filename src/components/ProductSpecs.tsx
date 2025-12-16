import { ProductSpec } from "@/data/products";

interface ProductSpecsProps {
  specs: ProductSpec[];
}

export const ProductSpecs = ({ specs }: ProductSpecsProps) => {
  return (
    <div className="bg-section-gray rounded-2xl p-6 md:p-8">
      <h3 className="text-xl font-semibold text-foreground mb-6">
        Технические характеристики
      </h3>
      <div className="space-y-4">
        {specs.map((spec, index) => (
          <div
            key={spec.label}
            className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-border/50 last:border-0 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
          >
            <span className="text-text-secondary text-sm sm:w-1/3 mb-1 sm:mb-0">
              {spec.label}
            </span>
            <span className="text-foreground font-medium sm:w-2/3">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
