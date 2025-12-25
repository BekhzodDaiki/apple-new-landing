import { useParams, Link, Navigate } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { AppleNav } from "@/components/AppleNav";
import { Footer } from "@/components/Footer";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductSpecs } from "@/components/ProductSpecs";
import { ProductFeatures } from "@/components/ProductFeatures";
import { ProductBuyCard } from "@/components/ProductBuyCard";
import { SimilarProducts } from "@/components/SimilarProducts";
import { useData } from "@/hooks/useData";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products, isLoading } = useData();
  const product = productId ? products[productId] : null;
  
  const [selectedColor, setSelectedColor] = useState(
    product?.colors[0] || { name: "", hex: "" }
  );

  // Reset selected color when product changes
  useEffect(() => {
    if (product?.colors[0]) {
      setSelectedColor(product.colors[0]);
    }
  }, [productId, product?.colors]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!product) {
    return <Navigate to="/" replace />;
  }

  // Check if product is from partner brands (Alisa, Whoop) - Dyson now uses standard Apple style
  const isAlisa = productId?.startsWith("alisa");
  const isWhoop = productId?.startsWith("whoop");
  const isPartnerProduct = isAlisa || isWhoop;

  // Get similar products from the same category
  const similarProducts = useMemo(() => {
    if (!product) return [];
    return Object.values(products)
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 3);
  }, [products, product]);

  // Original Apple-style product page
  return (
    <div className="min-h-screen bg-background">
      <AppleNav />
      
      {/* Spacer for fixed nav */}
      <div className="h-11" />
      
      {/* Breadcrumb */}
      <div className="bg-section-gray border-b border-border">
        <div className="max-w-[1200px] mx-auto px-4 py-3">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-link-blue hover:underline"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Вернуться в магазин
          </Link>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight opacity-0 animate-fade-in-up">
              {product.name}
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-text-secondary opacity-0 animate-fade-in-up animation-delay-100">
              {product.tagline}
            </p>
          </div>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Gallery */}
            <div className="lg:col-span-2">
              <ProductGallery
                image={product.image}
                name={product.name}
                colors={product.colors}
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
              />
              
              {/* Description */}
              <div className="mt-8 max-w-2xl mx-auto text-center lg:text-left">
                <p className="text-lg text-text-secondary leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
            
            {/* Buy Card */}
            <div className="lg:col-span-1">
              <ProductBuyCard
                productId={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                selectedColor={selectedColor}
                image={product.image}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Specs & Features */}
      <section className="py-12 bg-background">
        <div className="max-w-[1200px] mx-auto px-4 space-y-8">
          <ProductSpecs specs={product.specs} />
          <ProductFeatures features={product.features} />
        </div>
      </section>
      
      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <SimilarProducts products={similarProducts} currentProductId={product.id} />
      )}
      
      {/* Related Products CTA */}
      <section className="py-16 bg-section-gray text-center">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Изучите больше продуктов
          </h2>
          <p className="mt-3 text-lg text-text-secondary">
            Откройте для себя идеальные аксессуары и сопутствующие устройства.
          </p>
          <div className="mt-6">
            <Link to="/" className="text-link-blue hover:underline text-lg">
              Смотреть все продукты {">"}
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductPage;