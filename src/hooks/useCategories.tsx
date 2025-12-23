import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface ConsiderItem {
  id: string;
  title: string;
  description: string;
  icon: string | null;
  sort_order: number;
}

export interface ColorImage {
  id: string;
  hex: string;
  image: string;
  sort_order: number;
}

export interface LineupProduct {
  id: string;
  product_id: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  is_new: boolean;
  sort_order: number;
  colorImages: ColorImage[];
}

export interface Category {
  id: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string | null;
  promoBanner: string;
  lineupTitle: string;
  ctaTitle: string;
  ctaSubtitle: string;
  considerations: ConsiderItem[];
  lineup: LineupProduct[];
}

async function fetchCategories(): Promise<Category[]> {
  const { data: categories, error: categoriesError } = await supabase
    .from("categories")
    .select("*");

  if (categoriesError) throw categoriesError;
  if (!categories) return [];

  const categoryIds = categories.map((c) => c.id);

  const [considerationsRes, lineupRes] = await Promise.all([
    supabase
      .from("category_considerations")
      .select("*")
      .in("category_id", categoryIds)
      .order("sort_order"),
    supabase
      .from("category_lineup")
      .select("*")
      .in("category_id", categoryIds)
      .order("sort_order"),
  ]);

  if (considerationsRes.error) throw considerationsRes.error;
  if (lineupRes.error) throw lineupRes.error;

  const lineupIds = (lineupRes.data || []).map((l) => l.id);
  
  const { data: colorImages, error: colorImagesError } = await supabase
    .from("lineup_color_images")
    .select("*")
    .in("lineup_id", lineupIds)
    .order("sort_order");

  if (colorImagesError) throw colorImagesError;

  return categories.map((category) => ({
    id: category.id,
    heroTitle: category.hero_title,
    heroSubtitle: category.hero_subtitle,
    heroImage: category.hero_image,
    promoBanner: category.promo_banner,
    lineupTitle: category.lineup_title,
    ctaTitle: category.cta_title,
    ctaSubtitle: category.cta_subtitle,
    considerations: (considerationsRes.data || [])
      .filter((c) => c.category_id === category.id)
      .map((c) => ({
        id: c.id,
        title: c.title,
        description: c.description,
        icon: c.icon,
        sort_order: c.sort_order,
      })),
    lineup: (lineupRes.data || [])
      .filter((l) => l.category_id === category.id)
      .map((l) => ({
        id: l.id,
        product_id: l.product_id,
        name: l.name,
        tagline: l.tagline,
        price: l.price,
        image: l.image,
        is_new: l.is_new,
        sort_order: l.sort_order,
        colorImages: (colorImages || [])
          .filter((ci) => ci.lineup_id === l.id)
          .map((ci) => ({
            id: ci.id,
            hex: ci.hex,
            image: ci.image,
            sort_order: ci.sort_order,
          })),
      })),
  }));
}

async function fetchCategory(categoryId: string): Promise<Category | null> {
  const { data: category, error } = await supabase
    .from("categories")
    .select("*")
    .eq("id", categoryId)
    .maybeSingle();

  if (error) throw error;
  if (!category) return null;

  const [considerationsRes, lineupRes] = await Promise.all([
    supabase
      .from("category_considerations")
      .select("*")
      .eq("category_id", categoryId)
      .order("sort_order"),
    supabase
      .from("category_lineup")
      .select("*")
      .eq("category_id", categoryId)
      .order("sort_order"),
  ]);

  if (considerationsRes.error) throw considerationsRes.error;
  if (lineupRes.error) throw lineupRes.error;

  const lineupIds = (lineupRes.data || []).map((l) => l.id);
  
  const { data: colorImages, error: colorImagesError } = await supabase
    .from("lineup_color_images")
    .select("*")
    .in("lineup_id", lineupIds)
    .order("sort_order");

  if (colorImagesError) throw colorImagesError;

  return {
    id: category.id,
    heroTitle: category.hero_title,
    heroSubtitle: category.hero_subtitle,
    heroImage: category.hero_image,
    promoBanner: category.promo_banner,
    lineupTitle: category.lineup_title,
    ctaTitle: category.cta_title,
    ctaSubtitle: category.cta_subtitle,
    considerations: (considerationsRes.data || []).map((c) => ({
      id: c.id,
      title: c.title,
      description: c.description,
      icon: c.icon,
      sort_order: c.sort_order,
    })),
    lineup: (lineupRes.data || []).map((l) => ({
      id: l.id,
      product_id: l.product_id,
      name: l.name,
      tagline: l.tagline,
      price: l.price,
      image: l.image,
      is_new: l.is_new,
      sort_order: l.sort_order,
      colorImages: (colorImages || [])
        .filter((ci) => ci.lineup_id === l.id)
        .map((ci) => ({
          id: ci.id,
          hex: ci.hex,
          image: ci.image,
          sort_order: ci.sort_order,
        })),
    })),
  };
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
}

export function useCategory(categoryId: string | undefined) {
  return useQuery({
    queryKey: ["category", categoryId],
    queryFn: () => (categoryId ? fetchCategory(categoryId) : null),
    enabled: !!categoryId,
  });
}
