import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { HexColorPicker } from "react-colorful";
import { toast } from "sonner";
import { Plus, Trash2, GripVertical, RefreshCw } from "lucide-react";
import { ImageUpload } from "@/components/ImageUpload";
import { useQueryClient } from "@tanstack/react-query";

interface ProductSpec {
  id: string;
  label: string;
  value: string;
  sort_order: number;
}

interface ProductFeature {
  id: string;
  feature: string;
  sort_order: number;
}

interface ProductColor {
  id: string;
  name: string;
  hex: string;
  image: string | null;
  sort_order: number;
}

interface Category {
  id: string;
  hero_title: string;
}

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

interface ProductFormDialogProps {
  product: Product | null;
  categories: Category[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSaved: () => void;
}

export function ProductFormDialog({
  product,
  categories,
  open,
  onOpenChange,
  onSaved,
}: ProductFormDialogProps) {
  const queryClient = useQueryClient();
  const isEditing = !!product;

  // Product form state
  const [productForm, setProductForm] = useState({
    id: "",
    name: "",
    tagline: "",
    description: "",
    price: "",
    original_price: "",
    image: "",
    category: "",
  });

  // Details state
  const [specs, setSpecs] = useState<ProductSpec[]>([]);
  const [features, setFeatures] = useState<ProductFeature[]>([]);
  const [colors, setColors] = useState<ProductColor[]>([]);
  const [detailsLoading, setDetailsLoading] = useState(false);

  // New item forms
  const [newSpec, setNewSpec] = useState({ label: "", value: "" });
  const [newFeature, setNewFeature] = useState("");
  const [newColor, setNewColor] = useState({ name: "", hex: "#000000", image: "" });

  // Current tab
  const [activeTab, setActiveTab] = useState("basic");

  // Add to lineup toggle
  const [addToLineup, setAddToLineup] = useState(false);
  const [isInLineup, setIsInLineup] = useState(false);

  // Reset form when dialog opens/closes
  useEffect(() => {
    if (open) {
      if (product) {
        setProductForm({
          id: product.id,
          name: product.name,
          tagline: product.tagline,
          description: product.description,
          price: product.price.toString(),
          original_price: product.original_price?.toString() || "",
          image: product.image,
          category: product.category,
        });
        fetchProductDetails(product.id);
        checkIfInLineup(product.id);
      } else {
        resetForm();
        setAddToLineup(false);
        setIsInLineup(false);
      }
      setActiveTab("basic");
    }
  }, [open, product]);

  const checkIfInLineup = async (productId: string) => {
    const { data } = await supabase
      .from("category_lineup")
      .select("id")
      .eq("product_id", productId)
      .maybeSingle();
    const inLineup = !!data;
    setIsInLineup(inLineup);
    setAddToLineup(inLineup);
  };

  const resetForm = () => {
    setProductForm({
      id: "",
      name: "",
      tagline: "",
      description: "",
      price: "",
      original_price: "",
      image: "",
      category: "",
    });
    setSpecs([]);
    setFeatures([]);
    setColors([]);
    setNewSpec({ label: "", value: "" });
    setNewFeature("");
    setNewColor({ name: "", hex: "#000000", image: "" });
    setAddToLineup(false);
    setIsInLineup(false);
  };

  const fetchProductDetails = async (productId: string) => {
    setDetailsLoading(true);
    const [specsRes, featuresRes, colorsRes] = await Promise.all([
      supabase.from("product_specs").select("*").eq("product_id", productId).order("sort_order"),
      supabase.from("product_features").select("*").eq("product_id", productId).order("sort_order"),
      supabase.from("product_colors").select("*").eq("product_id", productId).order("sort_order"),
    ]);
    setSpecs(specsRes.data || []);
    setFeatures(featuresRes.data || []);
    setColors(colorsRes.data || []);
    setDetailsLoading(false);
  };

  const syncProductToLineup = async (formData: typeof productForm, isNew: boolean) => {
    const { data: existingLineup } = await supabase
      .from("category_lineup")
      .select("id, sort_order")
      .eq("product_id", formData.id)
      .maybeSingle();

    const lineupData = {
      product_id: formData.id,
      category_id: formData.category,
      name: formData.name,
      tagline: formData.tagline,
      image: formData.image,
      price: `${parseFloat(formData.price).toLocaleString("ru-RU")} ₽`,
      is_new: isNew,
    };

    let lineupId: string;

    if (existingLineup) {
      await supabase.from("category_lineup").update(lineupData).eq("id", existingLineup.id);
      lineupId = existingLineup.id;
    } else {
      const { data: maxOrder } = await supabase
        .from("category_lineup")
        .select("sort_order")
        .eq("category_id", formData.category)
        .order("sort_order", { ascending: false })
        .limit(1)
        .maybeSingle();

      const { data: newLineup } = await supabase.from("category_lineup").insert({
        ...lineupData,
        sort_order: (maxOrder?.sort_order ?? -1) + 1,
      }).select("id").single();
      
      lineupId = newLineup?.id || "";
    }

    // Sync product colors to lineup_color_images
    if (lineupId) {
      await syncColorsToLineup(formData.id, lineupId);
    }
  };

  const syncColorsToLineup = async (productId: string, lineupId: string) => {
    // Get product colors
    const { data: productColors } = await supabase
      .from("product_colors")
      .select("hex, image, sort_order")
      .eq("product_id", productId)
      .order("sort_order");

    // Delete existing lineup color images
    await supabase.from("lineup_color_images").delete().eq("lineup_id", lineupId);

    // Insert new ones from product colors
    if (productColors && productColors.length > 0) {
      const lineupColors = productColors
        .filter((c) => c.image) // Only include colors with images
        .map((c) => ({
          lineup_id: lineupId,
          hex: c.hex,
          image: c.image!,
          sort_order: c.sort_order,
        }));

      if (lineupColors.length > 0) {
        await supabase.from("lineup_color_images").insert(lineupColors);
      }
    }
  };

  const removeFromLineup = async (productId: string) => {
    // First get lineup id to delete color images
    const { data: lineup } = await supabase
      .from("category_lineup")
      .select("id")
      .eq("product_id", productId)
      .maybeSingle();

    if (lineup) {
      await supabase.from("lineup_color_images").delete().eq("lineup_id", lineup.id);
    }
    await supabase.from("category_lineup").delete().eq("product_id", productId);
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const productData = {
      id: productForm.id,
      name: productForm.name,
      tagline: productForm.tagline,
      description: productForm.description,
      price: parseFloat(productForm.price),
      original_price: productForm.original_price ? parseFloat(productForm.original_price) : null,
      image: productForm.image,
      category: productForm.category,
    };

    if (isEditing) {
      const { error } = await supabase
        .from("products")
        .update(productData as any)
        .eq("id", product.id);

      if (error) {
        toast.error("Ошибка обновления продукта");
        return;
      }

      // Handle lineup based on toggle
      if (addToLineup) {
        await syncProductToLineup(productForm, false);
      } else if (isInLineup) {
        await removeFromLineup(productForm.id);
      }
      
      toast.success("Продукт обновлён");
    } else {
      const { error } = await supabase.from("products").insert(productData as any);

      if (error) {
        if (error.code === "23505") {
          toast.error("Продукт с таким ID уже существует");
        } else {
          toast.error("Ошибка создания продукта");
        }
        return;
      }

      // Only add to lineup if toggle is on
      if (addToLineup) {
        await syncProductToLineup(productForm, true);
      }
      
      toast.success("Продукт создан. Теперь можно добавить характеристики, цвета и особенности.");
      
      // After creating, fetch details and switch to details tab
      await fetchProductDetails(productForm.id);
      setActiveTab("specs");
    }

    queryClient.invalidateQueries({ queryKey: ["products"] });
    queryClient.invalidateQueries({ queryKey: ["categories"] });
    onSaved();
  };

  // Specs handlers
  const addSpec = async () => {
    const productId = productForm.id;
    if (!productId || !newSpec.label || !newSpec.value) return;

    const { error } = await supabase.from("product_specs").insert({
      product_id: productId,
      label: newSpec.label,
      value: newSpec.value,
      sort_order: specs.length,
    });

    if (error) {
      toast.error("Ошибка добавления характеристики");
      return;
    }

    toast.success("Характеристика добавлена");
    setNewSpec({ label: "", value: "" });
    fetchProductDetails(productId);
    queryClient.invalidateQueries({ queryKey: ["products"] });
  };

  const deleteSpec = async (id: string) => {
    const { error } = await supabase.from("product_specs").delete().eq("id", id);
    if (error) {
      toast.error("Ошибка удаления");
      return;
    }
    setSpecs(specs.filter((s) => s.id !== id));
    queryClient.invalidateQueries({ queryKey: ["products"] });
  };

  // Features handlers
  const addFeature = async () => {
    const productId = productForm.id;
    if (!productId || !newFeature) return;

    const { error } = await supabase.from("product_features").insert({
      product_id: productId,
      feature: newFeature,
      sort_order: features.length,
    });

    if (error) {
      toast.error("Ошибка добавления особенности");
      return;
    }

    toast.success("Особенность добавлена");
    setNewFeature("");
    fetchProductDetails(productId);
    queryClient.invalidateQueries({ queryKey: ["products"] });
  };

  const deleteFeature = async (id: string) => {
    const { error } = await supabase.from("product_features").delete().eq("id", id);
    if (error) {
      toast.error("Ошибка удаления");
      return;
    }
    setFeatures(features.filter((f) => f.id !== id));
    queryClient.invalidateQueries({ queryKey: ["products"] });
  };

  // Sync colors to lineup if product is in lineup
  const syncColorsIfInLineup = async (productId: string) => {
    if (!addToLineup) return;
    
    const { data: lineup } = await supabase
      .from("category_lineup")
      .select("id")
      .eq("product_id", productId)
      .maybeSingle();

    if (lineup) {
      await syncColorsToLineup(productId, lineup.id);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    }
  };

  // Colors handlers
  const addColor = async () => {
    const productId = productForm.id;
    if (!productId || !newColor.name || !newColor.hex) return;

    const { error } = await supabase.from("product_colors").insert({
      product_id: productId,
      name: newColor.name,
      hex: newColor.hex,
      image: newColor.image || null,
      sort_order: colors.length,
    });

    if (error) {
      toast.error("Ошибка добавления цвета");
      return;
    }

    toast.success("Цвет добавлен");
    setNewColor({ name: "", hex: "#000000", image: "" });
    fetchProductDetails(productId);
    queryClient.invalidateQueries({ queryKey: ["products"] });
    
    // Sync to lineup if enabled
    await syncColorsIfInLineup(productId);
  };

  const deleteColor = async (id: string) => {
    const productId = productForm.id;
    const { error } = await supabase.from("product_colors").delete().eq("id", id);
    if (error) {
      toast.error("Ошибка удаления");
      return;
    }
    setColors(colors.filter((c) => c.id !== id));
    queryClient.invalidateQueries({ queryKey: ["products"] });
    
    // Sync to lineup if enabled
    if (productId) {
      await syncColorsIfInLineup(productId);
    }
  };

  const updateColorImage = async (colorId: string, imageUrl: string) => {
    const productId = productForm.id;
    const { error } = await supabase
      .from("product_colors")
      .update({ image: imageUrl })
      .eq("id", colorId);

    if (error) {
      toast.error("Ошибка обновления изображения");
      return;
    }

    setColors(colors.map((c) => (c.id === colorId ? { ...c, image: imageUrl } : c)));
    toast.success("Изображение обновлено");
    queryClient.invalidateQueries({ queryKey: ["products"] });
    
    // Sync to lineup if enabled
    if (productId) {
      await syncColorsIfInLineup(productId);
    }
  };

  // Manual sync button handler
  const handleSyncToLineup = async () => {
    const productId = productForm.id;
    if (!productId) return;

    const { data: lineup } = await supabase
      .from("category_lineup")
      .select("id")
      .eq("product_id", productId)
      .maybeSingle();

    if (lineup) {
      await syncColorsToLineup(productId, lineup.id);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Цвета синхронизированы с линейкой категории");
    } else {
      toast.error("Продукт не добавлен в линейку категории");
    }
  };

  // Check if product exists (saved)
  const productExists = isEditing || specs.length > 0 || features.length > 0 || colors.length > 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? `Редактировать: ${product.name}` : "Новый продукт"}</DialogTitle>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="basic">Основное</TabsTrigger>
            <TabsTrigger value="specs" disabled={!productForm.id && !isEditing}>
              Характеристики ({specs.length})
            </TabsTrigger>
            <TabsTrigger value="features" disabled={!productForm.id && !isEditing}>
              Особенности ({features.length})
            </TabsTrigger>
            <TabsTrigger value="colors" disabled={!productForm.id && !isEditing}>
              Цвета ({colors.length})
            </TabsTrigger>
          </TabsList>

          {/* Basic Info Tab */}
          <TabsContent value="basic">
            <form onSubmit={handleProductSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="product-id">ID</Label>
                  <Input
                    id="product-id"
                    value={productForm.id}
                    onChange={(e) => setProductForm({ ...productForm, id: e.target.value })}
                    disabled={isEditing}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-category">Категория</Label>
                  <Select
                    value={productForm.category}
                    onValueChange={(value) => setProductForm({ ...productForm, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.id}>
                          {cat.hero_title || cat.id}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-name">Название</Label>
                <Input
                  id="product-name"
                  value={productForm.name}
                  onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-tagline">Слоган</Label>
                <Input
                  id="product-tagline"
                  value={productForm.tagline}
                  onChange={(e) => setProductForm({ ...productForm, tagline: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="product-description">Описание</Label>
                <Textarea
                  id="product-description"
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="product-price">Цена</Label>
                  <Input
                    id="product-price"
                    type="number"
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="product-original-price">Старая цена</Label>
                  <Input
                    id="product-original-price"
                    type="number"
                    value={productForm.original_price}
                    onChange={(e) => setProductForm({ ...productForm, original_price: e.target.value })}
                  />
                </div>
              </div>
              <ImageUpload
                label="Изображение"
                value={productForm.image}
                onChange={(url) => setProductForm({ ...productForm, image: url })}
                folder="products"
                required
              />
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div className="space-y-0.5">
                  <Label htmlFor="add-to-lineup" className="text-base font-medium">
                    Показывать в линейке категории
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Продукт будет виден на странице категории
                  </p>
                </div>
                <Switch
                  id="add-to-lineup"
                  checked={addToLineup}
                  onCheckedChange={setAddToLineup}
                />
              </div>
              <Button type="submit" className="w-full">
                {isEditing ? "Сохранить" : "Создать продукт"}
              </Button>
            </form>
          </TabsContent>

          {/* Specs Tab */}
          <TabsContent value="specs" className="space-y-4">
            {detailsLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Добавить характеристику</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Название (например: Экран)"
                        value={newSpec.label}
                        onChange={(e) => setNewSpec({ ...newSpec, label: e.target.value })}
                      />
                      <Input
                        placeholder="Значение (например: 6.7 дюймов)"
                        value={newSpec.value}
                        onChange={(e) => setNewSpec({ ...newSpec, value: e.target.value })}
                      />
                      <Button onClick={addSpec} disabled={!newSpec.label || !newSpec.value}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-2">
                  {specs.map((spec) => (
                    <div key={spec.id} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <GripVertical className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium flex-1">{spec.label}</span>
                      <span className="text-muted-foreground flex-1">{spec.value}</span>
                      <Button variant="ghost" size="icon" onClick={() => deleteSpec(spec.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                  {specs.length === 0 && (
                    <p className="text-muted-foreground text-center py-4">Нет характеристик</p>
                  )}
                </div>
              </>
            )}
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="space-y-4">
            {detailsLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : (
              <>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Добавить особенность</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Описание особенности"
                        value={newFeature}
                        onChange={(e) => setNewFeature(e.target.value)}
                        className="flex-1"
                      />
                      <Button onClick={addFeature} disabled={!newFeature}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-2">
                  {features.map((feature) => (
                    <div key={feature.id} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <GripVertical className="h-4 w-4 text-muted-foreground" />
                      <span className="flex-1">{feature.feature}</span>
                      <Button variant="ghost" size="icon" onClick={() => deleteFeature(feature.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  ))}
                  {features.length === 0 && (
                    <p className="text-muted-foreground text-center py-4">Нет особенностей</p>
                  )}
                </div>
              </>
            )}
          </TabsContent>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-4">
            {detailsLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : (
              <>
                {isInLineup && (
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border">
                    <p className="text-sm text-muted-foreground">
                      Цвета автоматически синхронизируются с линейкой категории
                    </p>
                    <Button variant="outline" size="sm" onClick={handleSyncToLineup}>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Синхронизировать
                    </Button>
                  </div>
                )}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Добавить цвет</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Название цвета"
                        value={newColor.name}
                        onChange={(e) => setNewColor((prev) => ({ ...prev, name: e.target.value }))}
                      />
                      <div className="flex items-center gap-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <button
                              type="button"
                              className="h-10 w-10 rounded-full border bg-muted flex-shrink-0"
                              style={{ backgroundColor: newColor.hex }}
                              aria-label="Выбрать цвет"
                              title={newColor.hex}
                            />
                          </PopoverTrigger>
                          <PopoverContent className="w-64">
                            <div className="space-y-3">
                              <HexColorPicker
                                color={newColor.hex}
                                onChange={(hex) => setNewColor((prev) => ({ ...prev, hex }))}
                              />
                              <div className="space-y-1">
                                <Label htmlFor="color-hex" className="text-xs text-muted-foreground">
                                  HEX
                                </Label>
                                <Input
                                  id="color-hex"
                                  value={newColor.hex}
                                  onChange={(e) =>
                                    setNewColor((prev) => ({
                                      ...prev,
                                      hex: e.target.value.startsWith("#")
                                        ? e.target.value
                                        : `#${e.target.value}`,
                                    }))
                                  }
                                  className="font-mono"
                                />
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>

                        <Input
                          value={newColor.hex}
                          onChange={(e) =>
                            setNewColor((prev) => ({
                              ...prev,
                              hex: e.target.value.startsWith("#")
                                ? e.target.value
                                : `#${e.target.value}`,
                            }))
                          }
                          className="w-24 font-mono"
                        />
                      </div>
                    </div>
                    <ImageUpload
                      label="Изображение для цвета"
                      value={newColor.image}
                      onChange={(url) => setNewColor((prev) => ({ ...prev, image: url }))}
                      folder="products"
                    />
                    <Button onClick={addColor} disabled={!newColor.name || !newColor.hex} className="w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Добавить цвет
                    </Button>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {colors.map((color) => (
                    <Card key={color.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div
                            className="w-10 h-10 rounded-full border-2 flex-shrink-0"
                            style={{ backgroundColor: color.hex }}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium">{color.name}</p>
                            <p className="text-sm text-muted-foreground font-mono">{color.hex}</p>
                          </div>
                          <Button variant="ghost" size="icon" onClick={() => deleteColor(color.id)}>
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>

                        {color.image ? (
                          <div className="mt-3">
                            <img
                              src={color.image}
                              alt={color.name}
                              className="w-full h-24 object-contain bg-muted rounded"
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full mt-2"
                              onClick={() => updateColorImage(color.id, "")}
                            >
                              Удалить изображение
                            </Button>
                          </div>
                        ) : (
                          <div className="mt-3">
                            <ImageUpload
                              label=""
                              value=""
                              onChange={(url) => updateColorImage(color.id, url)}
                              folder="products"
                            />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                  {colors.length === 0 && (
                    <p className="text-muted-foreground text-center py-4 col-span-2">Нет цветов</p>
                  )}
                </div>
              </>
            )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
