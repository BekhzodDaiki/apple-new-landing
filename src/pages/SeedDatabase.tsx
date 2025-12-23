import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { products } from "@/data/products";
import { categoryData } from "@/data/categories";
import { ArrowLeft, Database, CheckCircle, AlertCircle, Upload } from "lucide-react";

// Map of static imports to file names
const imageMapping: Record<string, string> = {};

// Helper to get the base URL for storage
const getStorageUrl = (path: string) => {
  const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID || 'rnolcyvgpdmliglxpugc';
  return `https://${projectId}.supabase.co/storage/v1/object/public/products/${path}`;
};

// Helper to extract filename from a path or URL
const getFileName = (path: string): string => {
  if (!path) return '';
  // If it's already a URL, extract the last part
  if (path.startsWith('http')) {
    return path;
  }
  // If it's a module import (starts with /src or contains /assets/)
  const parts = path.split('/');
  return parts[parts.length - 1];
};

export default function SeedDatabase() {
  const navigate = useNavigate();
  const { user, isLoading, isAdmin } = useAuth();
  const [isSeeding, setIsSeeding] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState<string[]>([]);

  const addProgress = (message: string) => {
    setProgress((prev) => [...prev, message]);
  };

  // Upload all images to storage bucket
  const uploadImages = async () => {
    addProgress("📤 Начинаем загрузку изображений...");
    
    // Collect all unique images from products and categories
    const imagesToUpload = new Set<string>();
    
    // From products
    for (const product of Object.values(products)) {
      if (product.image && !product.image.startsWith('http')) {
        imagesToUpload.add(product.image);
      }
      for (const color of product.colors) {
        if (color.image && !color.image.startsWith('http')) {
          imagesToUpload.add(color.image);
        }
      }
    }
    
    // From categories
    for (const category of Object.values(categoryData)) {
      if (category.heroImage && !category.heroImage.startsWith('http')) {
        imagesToUpload.add(category.heroImage);
      }
      for (const item of category.lineup) {
        if (item.image && !item.image.startsWith('http')) {
          imagesToUpload.add(item.image);
        }
        if (item.colorImages) {
          for (const colorImg of item.colorImages) {
            if (colorImg.image && !colorImg.image.startsWith('http')) {
              imagesToUpload.add(colorImg.image);
            }
          }
        }
      }
    }

    addProgress(`📦 Найдено ${imagesToUpload.size} изображений для загрузки`);
    
    let uploaded = 0;
    let skipped = 0;
    
    for (const imagePath of imagesToUpload) {
      try {
        const fileName = getFileName(imagePath);
        if (!fileName) continue;
        
        // Check if file already exists
        const { data: existingFile } = await supabase.storage
          .from('products')
          .list('', { search: fileName });
        
        if (existingFile && existingFile.length > 0) {
          skipped++;
          imageMapping[imagePath] = getStorageUrl(fileName);
          continue;
        }
        
        // Fetch the image from the asset path
        const response = await fetch(imagePath);
        if (!response.ok) {
          addProgress(`⚠️ Не удалось загрузить: ${fileName}`);
          continue;
        }
        
        const blob = await response.blob();
        
        // Upload to storage
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(fileName, blob, {
            contentType: blob.type || 'image/png',
            upsert: true
          });
        
        if (uploadError) {
          addProgress(`❌ Ошибка загрузки ${fileName}: ${uploadError.message}`);
        } else {
          uploaded++;
          imageMapping[imagePath] = getStorageUrl(fileName);
        }
      } catch (error: any) {
        addProgress(`❌ Ошибка: ${error.message}`);
      }
    }
    
    addProgress(`✅ Загружено: ${uploaded}, пропущено (уже есть): ${skipped}`);
  };

  // Get the correct image URL
  const getImageUrl = (originalPath: string): string => {
    if (!originalPath) return '';
    if (originalPath.startsWith('http')) return originalPath;
    
    // Check if we have a mapped URL
    if (imageMapping[originalPath]) {
      return imageMapping[originalPath];
    }
    
    // Otherwise, construct the URL from the filename
    const fileName = getFileName(originalPath);
    return getStorageUrl(fileName);
  };

  const seedProducts = async () => {
    addProgress("📦 Начинаем заполнение продуктов...");
    
    for (const [key, product] of Object.entries(products)) {
      try {
        // Insert product
        const { error: productError } = await supabase.from("products").insert({
          id: product.id,
          name: product.name,
          tagline: product.tagline,
          description: product.description,
          price: product.price,
          original_price: product.originalPrice || null,
          image: getImageUrl(product.image),
          category: product.category,
        });

        if (productError) {
          if (productError.code === "23505") {
            addProgress(`⏭️ Продукт "${product.name}" уже существует`);
            continue;
          }
          throw productError;
        }

        // Insert colors
        for (let i = 0; i < product.colors.length; i++) {
          const color = product.colors[i];
          await supabase.from("product_colors").insert({
            product_id: product.id,
            name: color.name,
            hex: color.hex,
            image: color.image ? getImageUrl(color.image) : null,
            sort_order: i,
          });
        }

        // Insert specs
        for (let i = 0; i < product.specs.length; i++) {
          const spec = product.specs[i];
          await supabase.from("product_specs").insert({
            product_id: product.id,
            label: spec.label,
            value: spec.value,
            sort_order: i,
          });
        }

        // Insert features
        for (let i = 0; i < product.features.length; i++) {
          const feature = product.features[i];
          await supabase.from("product_features").insert({
            product_id: product.id,
            feature: feature,
            sort_order: i,
          });
        }

        addProgress(`✅ Продукт "${product.name}" добавлен`);
      } catch (error: any) {
        addProgress(`❌ Ошибка для "${product.name}": ${error.message}`);
      }
    }
  };

  const seedCategories = async () => {
    addProgress("📂 Начинаем заполнение категорий...");

    for (const [key, category] of Object.entries(categoryData)) {
      try {
        // Insert category
        const { error: categoryError } = await supabase.from("categories").insert({
          id: key,
          hero_title: category.heroTitle,
          hero_subtitle: category.heroSubtitle,
          hero_image: category.heroImage ? getImageUrl(category.heroImage) : null,
          promo_banner: category.promoBanner,
          lineup_title: category.lineupTitle,
          cta_title: category.ctaTitle,
          cta_subtitle: category.ctaSubtitle,
        });

        if (categoryError) {
          if (categoryError.code === "23505") {
            addProgress(`⏭️ Категория "${category.heroTitle}" уже существует`);
            continue;
          }
          throw categoryError;
        }

        // Insert considerations
        for (let i = 0; i < category.considerations.length; i++) {
          const consideration = category.considerations[i];
          await supabase.from("category_considerations").insert({
            category_id: key,
            title: consideration.title,
            description: consideration.description,
            icon: consideration.icon || null,
            sort_order: i,
          });
        }

        // Insert lineup
        for (let i = 0; i < category.lineup.length; i++) {
          const item = category.lineup[i];
          const { data: lineupData, error: lineupError } = await supabase
            .from("category_lineup")
            .insert({
              category_id: key,
              product_id: item.id,
              name: item.name,
              tagline: item.tagline,
              price: item.price,
              image: getImageUrl(item.image),
              is_new: item.isNew || false,
              sort_order: i,
            })
            .select()
            .single();

          if (lineupError) throw lineupError;

          // Insert color images
          if (item.colorImages) {
            for (let j = 0; j < item.colorImages.length; j++) {
              const colorImage = item.colorImages[j];
              await supabase.from("lineup_color_images").insert({
                lineup_id: lineupData.id,
                hex: colorImage.hex,
                image: getImageUrl(colorImage.image),
                sort_order: j,
              });
            }
          }
        }

        addProgress(`✅ Категория "${category.heroTitle}" добавлена`);
      } catch (error: any) {
        addProgress(`❌ Ошибка для "${category.heroTitle}": ${error.message}`);
      }
    }
  };

  const handleSeed = async () => {
    setIsSeeding(true);
    setProgress([]);

    try {
      // First upload all images
      await uploadImages();
      
      // Then seed the database with correct URLs
      await seedProducts();
      await seedCategories();
      
      addProgress("🎉 Заполнение базы данных завершено!");
      toast.success("База данных успешно заполнена");
    } catch (error: any) {
      addProgress(`❌ Критическая ошибка: ${error.message}`);
      toast.error("Ошибка при заполнении базы данных");
    }

    setIsSeeding(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Доступ запрещён</CardTitle>
            <CardDescription>Требуются права администратора</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/auth")}>Войти</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/admin")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">Заполнение базы данных</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Импорт данных
            </CardTitle>
            <CardDescription>
              Эта операция загрузит все изображения в хранилище и импортирует продукты и категории в базу данных.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-4 text-sm space-y-2">
              <div className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                <span className="font-medium">Процесс импорта:</span>
              </div>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                <li>Загрузка всех изображений в хранилище</li>
                <li>Создание записей продуктов с URL изображений</li>
                <li>Создание записей категорий и линеек товаров</li>
              </ol>
            </div>

            <Button
              onClick={handleSeed}
              disabled={isSeeding}
              className="w-full"
              size="lg"
            >
              {isSeeding ? "Импортируем..." : "Начать импорт"}
            </Button>

            {progress.length > 0 && (
              <div className="bg-muted rounded-lg p-4 max-h-96 overflow-y-auto">
                <div className="space-y-1 text-sm font-mono">
                  {progress.map((msg, i) => (
                    <div key={i} className="flex items-start gap-2">
                      {msg.startsWith("✅") || msg.startsWith("🎉") ? (
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : msg.startsWith("❌") ? (
                        <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      ) : null}
                      <span>{msg}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
