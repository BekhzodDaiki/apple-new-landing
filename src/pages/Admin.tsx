import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Plus, Pencil, Trash2, LogOut, ArrowLeft, Download } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { ImageUpload } from "@/components/ImageUpload";
import { ProductFormDialog } from "@/components/admin/ProductFormDialog";
import * as XLSX from "xlsx";

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  original_price: number | null;
  image: string;
  category: string;
}

interface Category {
  id: string;
  hero_title: string;
  hero_subtitle: string;
  hero_image: string | null;
  promo_banner: string;
  lineup_title: string;
  cta_title: string;
  cta_subtitle: string;
}

export default function Admin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user, isLoading, isAdmin, signOut } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [isCategoryDialogOpen, setIsCategoryDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  // Category form state
  const [categoryForm, setCategoryForm] = useState({
    id: "",
    hero_title: "",
    hero_subtitle: "",
    hero_image: "",
    promo_banner: "",
    lineup_title: "Изучите линейку",
    cta_title: "",
    cta_subtitle: "",
  });

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/auth");
    } else if (!isLoading && user && !isAdmin) {
      toast.error("Доступ запрещён. Требуются права администратора.");
      navigate("/");
    }
  }, [user, isLoading, isAdmin, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchProducts();
      fetchCategories();
    }
  }, [isAdmin]);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("products").select("*").order("created_at", { ascending: false });
    if (error) {
      toast.error("Ошибка загрузки продуктов");
      return;
    }
    setProducts(data || []);
  };

  const fetchCategories = async () => {
    const { data, error } = await supabase.from("categories").select("*");
    if (error) {
      toast.error("Ошибка загрузки категорий");
      return;
    }
    setCategories(data || []);
  };

  const handleCategorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const categoryData = {
      id: categoryForm.id,
      hero_title: categoryForm.hero_title,
      hero_subtitle: categoryForm.hero_subtitle,
      hero_image: categoryForm.hero_image || null,
      promo_banner: categoryForm.promo_banner,
      lineup_title: categoryForm.lineup_title,
      cta_title: categoryForm.cta_title,
      cta_subtitle: categoryForm.cta_subtitle,
    };

    if (editingCategory) {
      const { error } = await supabase
        .from("categories")
        .update(categoryData)
        .eq("id", editingCategory.id);

      if (error) {
        toast.error("Ошибка обновления категории");
        return;
      }
      toast.success("Категория обновлена");
    } else {
      const { error } = await supabase.from("categories").insert(categoryData);

      if (error) {
        if (error.code === "23505") {
          toast.error("Категория с таким ID уже существует");
        } else {
          toast.error("Ошибка создания категории");
        }
        return;
      }
      toast.success("Категория создана");
    }

    setIsCategoryDialogOpen(false);
    resetCategoryForm();
    fetchCategories();
    queryClient.invalidateQueries({ queryKey: ["categories"] });
  };

  const handleDeleteProduct = async (id: string) => {
    if (!confirm("Удалить этот продукт?")) return;
    
    // Delete from category_lineup first
    await supabase.from("category_lineup").delete().eq("product_id", id);
    
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) {
      toast.error("Ошибка удаления продукта");
      return;
    }
    toast.success("Продукт удалён");
    fetchProducts();
    queryClient.invalidateQueries({ queryKey: ["products"] });
    queryClient.invalidateQueries({ queryKey: ["categories"] });
  };

  const handleDeleteCategory = async (id: string) => {
    if (!confirm("Удалить эту категорию?")) return;
    
    const { error } = await supabase.from("categories").delete().eq("id", id);
    if (error) {
      toast.error("Ошибка удаления категории");
      return;
    }
    toast.success("Категория удалена");
    fetchCategories();
    queryClient.invalidateQueries({ queryKey: ["categories"] });
  };

  const openEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsProductDialogOpen(true);
  };

  const openCreateProduct = () => {
    setEditingProduct(null);
    setIsProductDialogOpen(true);
  };

  const openEditCategory = (category: Category) => {
    setEditingCategory(category);
    setCategoryForm({
      id: category.id,
      hero_title: category.hero_title,
      hero_subtitle: category.hero_subtitle,
      hero_image: category.hero_image || "",
      promo_banner: category.promo_banner,
      lineup_title: category.lineup_title,
      cta_title: category.cta_title,
      cta_subtitle: category.cta_subtitle,
    });
    setIsCategoryDialogOpen(true);
  };

  const resetCategoryForm = () => {
    setEditingCategory(null);
    setCategoryForm({
      id: "",
      hero_title: "",
      hero_subtitle: "",
      hero_image: "",
      promo_banner: "",
      lineup_title: "Изучите линейку",
      cta_title: "",
      cta_subtitle: "",
    });
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const handleExportProducts = async () => {
    try {
      toast.loading("Загрузка данных...", { id: "export" });

      // Fetch all products with related data
      const { data: productsData, error: productsError } = await supabase
        .from("products")
        .select("*")
        .order("name");

      if (productsError) throw productsError;

      const { data: specsData } = await supabase.from("product_specs").select("*");
      const { data: featuresData } = await supabase.from("product_features").select("*");
      const { data: colorsData } = await supabase.from("product_colors").select("*");

      // Build export rows
      const exportData = productsData?.map((product) => {
        const specs = specsData?.filter((s) => s.product_id === product.id) || [];
        const features = featuresData?.filter((f) => f.product_id === product.id) || [];
        const colors = colorsData?.filter((c) => c.product_id === product.id) || [];

        return {
          "ID": product.id,
          "Название": product.name,
          "Категория": product.category,
          "Слоган": product.tagline,
          "Описание": product.description,
          "Цена": product.price,
          "Старая цена": product.original_price || "",
          "Изображение": product.image,
          "Характеристики": specs.map((s) => `${s.label}: ${s.value}`).join("\n"),
          "Особенности": features.map((f) => f.feature).join("\n"),
          "Цвета": colors.map((c) => `${c.name} (${c.hex})`).join("\n"),
        };
      }) || [];

      // Create workbook
      const ws = XLSX.utils.json_to_sheet(exportData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Продукты");

      // Auto-width columns
      const colWidths = [
        { wch: 25 }, // ID
        { wch: 30 }, // Название
        { wch: 15 }, // Категория
        { wch: 40 }, // Слоган
        { wch: 50 }, // Описание
        { wch: 10 }, // Цена
        { wch: 12 }, // Старая цена
        { wch: 50 }, // Изображение
        { wch: 50 }, // Характеристики
        { wch: 50 }, // Особенности
        { wch: 40 }, // Цвета
      ];
      ws["!cols"] = colWidths;

      // Download
      XLSX.writeFile(wb, `products_export_${new Date().toISOString().split("T")[0]}.xlsx`);
      toast.success("Файл успешно экспортирован!", { id: "export" });
    } catch (error) {
      console.error("Export error:", error);
      toast.error("Ошибка экспорта", { id: "export" });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold">Панель администратора</h1>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Выйти
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="products">
          <TabsList className="mb-6">
            <TabsTrigger value="products">Продукты</TabsTrigger>
            <TabsTrigger value="categories">Категории</TabsTrigger>
          </TabsList>

          <TabsContent value="products">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Продукты</CardTitle>
                  <CardDescription>Управление каталогом продуктов</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={handleExportProducts}>
                    <Download className="h-4 w-4 mr-2" />
                    Экспорт в Excel
                  </Button>
                  <Button onClick={openCreateProduct}>
                    <Plus className="h-4 w-4 mr-2" />
                    Добавить продукт
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Фото</TableHead>
                      <TableHead>ID</TableHead>
                      <TableHead>Название</TableHead>
                      <TableHead>Категория</TableHead>
                      <TableHead>Цена</TableHead>
                      <TableHead className="text-right">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>
                          {product.image && (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 object-contain rounded bg-muted"
                            />
                          )}
                        </TableCell>
                        <TableCell className="font-mono text-sm">{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>${product.price}</TableCell>
                        <TableCell className="text-right space-x-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => openEditProduct(product)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteProduct(product.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {products.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                          Нет продуктов
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <ProductFormDialog
              product={editingProduct}
              categories={categories.map(c => ({ id: c.id, hero_title: c.hero_title }))}
              open={isProductDialogOpen}
              onOpenChange={(open) => {
                setIsProductDialogOpen(open);
                if (!open) setEditingProduct(null);
              }}
              onSaved={fetchProducts}
            />
          </TabsContent>

          <TabsContent value="categories">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Категории</CardTitle>
                  <CardDescription>Управление категориями продуктов</CardDescription>
                </div>
                <Dialog open={isCategoryDialogOpen} onOpenChange={(open) => {
                  setIsCategoryDialogOpen(open);
                  if (!open) resetCategoryForm();
                }}>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>
                        Редактировать категорию
                      </DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleCategorySubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="category-id">ID</Label>
                        <Input
                          id="category-id"
                          value={categoryForm.id}
                          onChange={(e) => setCategoryForm({ ...categoryForm, id: e.target.value })}
                          disabled={!!editingCategory}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category-hero-title">Hero заголовок</Label>
                        <Input
                          id="category-hero-title"
                          value={categoryForm.hero_title}
                          onChange={(e) => setCategoryForm({ ...categoryForm, hero_title: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category-hero-subtitle">Hero подзаголовок</Label>
                        <Input
                          id="category-hero-subtitle"
                          value={categoryForm.hero_subtitle}
                          onChange={(e) => setCategoryForm({ ...categoryForm, hero_subtitle: e.target.value })}
                          required
                        />
                      </div>
                      <ImageUpload
                        label="Hero изображение"
                        value={categoryForm.hero_image}
                        onChange={(url) => setCategoryForm({ ...categoryForm, hero_image: url })}
                        folder="categories"
                      />
                      <div className="space-y-2">
                        <Label htmlFor="category-promo-banner">Промо баннер</Label>
                        <Input
                          id="category-promo-banner"
                          value={categoryForm.promo_banner}
                          onChange={(e) => setCategoryForm({ ...categoryForm, promo_banner: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category-lineup-title">Заголовок линейки</Label>
                        <Input
                          id="category-lineup-title"
                          value={categoryForm.lineup_title}
                          onChange={(e) => setCategoryForm({ ...categoryForm, lineup_title: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category-cta-title">CTA заголовок</Label>
                        <Input
                          id="category-cta-title"
                          value={categoryForm.cta_title}
                          onChange={(e) => setCategoryForm({ ...categoryForm, cta_title: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category-cta-subtitle">CTA подзаголовок</Label>
                        <Input
                          id="category-cta-subtitle"
                          value={categoryForm.cta_subtitle}
                          onChange={(e) => setCategoryForm({ ...categoryForm, cta_subtitle: e.target.value })}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Сохранить
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Фото</TableHead>
                      <TableHead>ID</TableHead>
                      <TableHead>Заголовок</TableHead>
                      <TableHead>Подзаголовок</TableHead>
                      <TableHead className="text-right">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {categories.map((category) => (
                      <TableRow key={category.id}>
                        <TableCell>
                          {category.hero_image && (
                            <img
                              src={category.hero_image}
                              alt={category.hero_title}
                              className="w-12 h-12 object-contain rounded bg-muted"
                            />
                          )}
                        </TableCell>
                        <TableCell className="font-mono text-sm">{category.id}</TableCell>
                        <TableCell>{category.hero_title}</TableCell>
                        <TableCell className="max-w-xs truncate">{category.hero_subtitle}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => openEditCategory(category)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteCategory(category.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {categories.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                          Нет категорий
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
