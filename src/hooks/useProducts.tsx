import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface ProductColor {
  id: string;
  name: string;
  hex: string;
  image: string | null;
  sort_order: number;
}

export interface ProductSpec {
  id: string;
  label: string;
  value: string;
  sort_order: number;
}

export interface ProductFeature {
  id: string;
  feature: string;
  sort_order: number;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  original_price: number | null;
  image: string;
  category: "apple" | "partner";
  colors: ProductColor[];
  specs: ProductSpec[];
  features: ProductFeature[];
}

async function fetchProducts(): Promise<Product[]> {
  const { data: products, error: productsError } = await supabase
    .from("products")
    .select("*")
    .order("name");

  if (productsError) throw productsError;
  if (!products) return [];

  const productIds = products.map((p) => p.id);

  const [colorsRes, specsRes, featuresRes] = await Promise.all([
    supabase
      .from("product_colors")
      .select("*")
      .in("product_id", productIds)
      .order("sort_order"),
    supabase
      .from("product_specs")
      .select("*")
      .in("product_id", productIds)
      .order("sort_order"),
    supabase
      .from("product_features")
      .select("*")
      .in("product_id", productIds)
      .order("sort_order"),
  ]);

  if (colorsRes.error) throw colorsRes.error;
  if (specsRes.error) throw specsRes.error;
  if (featuresRes.error) throw featuresRes.error;

  return products.map((product) => ({
    id: product.id,
    name: product.name,
    tagline: product.tagline,
    description: product.description,
    price: Number(product.price),
    original_price: product.original_price ? Number(product.original_price) : null,
    image: product.image,
    category: product.category as "apple" | "partner",
    colors: (colorsRes.data || [])
      .filter((c) => c.product_id === product.id)
      .map((c) => ({
        id: c.id,
        name: c.name,
        hex: c.hex,
        image: c.image,
        sort_order: c.sort_order,
      })),
    specs: (specsRes.data || [])
      .filter((s) => s.product_id === product.id)
      .map((s) => ({
        id: s.id,
        label: s.label,
        value: s.value,
        sort_order: s.sort_order,
      })),
    features: (featuresRes.data || [])
      .filter((f) => f.product_id === product.id)
      .map((f) => ({
        id: f.id,
        feature: f.feature,
        sort_order: f.sort_order,
      })),
  }));
}

async function fetchProduct(productId: string): Promise<Product | null> {
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productId)
    .maybeSingle();

  if (error) throw error;
  if (!product) return null;

  const [colorsRes, specsRes, featuresRes] = await Promise.all([
    supabase
      .from("product_colors")
      .select("*")
      .eq("product_id", productId)
      .order("sort_order"),
    supabase
      .from("product_specs")
      .select("*")
      .eq("product_id", productId)
      .order("sort_order"),
    supabase
      .from("product_features")
      .select("*")
      .eq("product_id", productId)
      .order("sort_order"),
  ]);

  if (colorsRes.error) throw colorsRes.error;
  if (specsRes.error) throw specsRes.error;
  if (featuresRes.error) throw featuresRes.error;

  return {
    id: product.id,
    name: product.name,
    tagline: product.tagline,
    description: product.description,
    price: Number(product.price),
    original_price: product.original_price ? Number(product.original_price) : null,
    image: product.image,
    category: product.category as "apple" | "partner",
    colors: (colorsRes.data || []).map((c) => ({
      id: c.id,
      name: c.name,
      hex: c.hex,
      image: c.image,
      sort_order: c.sort_order,
    })),
    specs: (specsRes.data || []).map((s) => ({
      id: s.id,
      label: s.label,
      value: s.value,
      sort_order: s.sort_order,
    })),
    features: (featuresRes.data || []).map((f) => ({
      id: f.id,
      feature: f.feature,
      sort_order: f.sort_order,
    })),
  };
}

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}

export function useProduct(productId: string | undefined) {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => (productId ? fetchProduct(productId) : null),
    enabled: !!productId,
  });
}
