import { createContext, useContext, ReactNode } from "react";
import { useProducts, Product } from "@/hooks/useProducts";
import { useCategories, Category } from "@/hooks/useCategories";
import { products as staticProducts, Product as StaticProduct } from "@/data/products";
import { categoryData as staticCategories, CategoryInfo } from "@/data/categories";

interface DataContextType {
  products: Record<string, StaticProduct>;
  categories: Record<string, CategoryInfo>;
  isLoading: boolean;
  isUsingDatabase: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Convert database product to static product format
function convertDbProductToStatic(dbProduct: Product): StaticProduct {
  return {
    id: dbProduct.id,
    name: dbProduct.name,
    tagline: dbProduct.tagline,
    description: dbProduct.description,
    price: dbProduct.price,
    originalPrice: dbProduct.original_price ?? undefined,
    image: dbProduct.image,
    colors: dbProduct.colors.map(c => ({
      name: c.name,
      hex: c.hex,
      image: c.image ?? undefined,
    })),
    specs: dbProduct.specs.map(s => ({
      label: s.label,
      value: s.value,
    })),
    features: dbProduct.features.map(f => f.feature),
    category: dbProduct.category,
  };
}

// Convert database category to static category format
function convertDbCategoryToStatic(dbCategory: Category): CategoryInfo {
  return {
    heroTitle: dbCategory.heroTitle,
    heroSubtitle: dbCategory.heroSubtitle,
    heroImage: dbCategory.heroImage ?? undefined,
    promoBanner: dbCategory.promoBanner,
    lineupTitle: dbCategory.lineupTitle,
    ctaTitle: dbCategory.ctaTitle,
    ctaSubtitle: dbCategory.ctaSubtitle,
    considerations: dbCategory.considerations.map(c => ({
      title: c.title,
      description: c.description,
      icon: c.icon ?? undefined,
    })),
    lineup: dbCategory.lineup.map(l => ({
      id: l.product_id,
      name: l.name,
      tagline: l.tagline,
      price: l.price,
      image: l.image,
      isNew: l.is_new,
      colorImages: l.colorImages.map(ci => ({
        hex: ci.hex,
        image: ci.image,
      })),
    })),
  };
}

export function DataProvider({ children }: { children: ReactNode }) {
  const { data: dbProducts, isLoading: productsLoading } = useProducts();
  const { data: dbCategories, isLoading: categoriesLoading } = useCategories();

  const isLoading = productsLoading || categoriesLoading;
  const hasDbProducts = dbProducts && dbProducts.length > 0;
  const hasDbCategories = dbCategories && dbCategories.length > 0;
  const isUsingDatabase = hasDbProducts || hasDbCategories;

  // Convert database data to static format or use static data as fallback
  const products: Record<string, StaticProduct> = hasDbProducts
    ? dbProducts.reduce((acc, p) => {
        acc[p.id] = convertDbProductToStatic(p);
        return acc;
      }, {} as Record<string, StaticProduct>)
    : staticProducts;

  const categories: Record<string, CategoryInfo> = hasDbCategories
    ? dbCategories.reduce((acc, c) => {
        acc[c.id] = convertDbCategoryToStatic(c);
        return acc;
      }, {} as Record<string, CategoryInfo>)
    : staticCategories;

  return (
    <DataContext.Provider value={{ products, categories, isLoading, isUsingDatabase }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
