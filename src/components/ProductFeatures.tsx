import { Check } from "lucide-react";

interface ProductFeaturesProps {
  features: string[];
}

export const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <div className="bg-background rounded-2xl border border-border p-6 md:p-8">
      <h3 className="text-xl font-semibold text-foreground mb-6">
        Ключевые особенности
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div
            key={feature}
            className="flex items-start gap-3 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${index * 50}ms`, animationFillMode: "forwards" }}
          >
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-link-blue/10 flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-link-blue" />
            </div>
            <span className="text-foreground">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
