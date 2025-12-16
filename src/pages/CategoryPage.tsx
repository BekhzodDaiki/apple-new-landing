import { useLocation, Navigate, Link } from "react-router-dom";
import { AppleNav } from "@/components/AppleNav";
import { Footer } from "@/components/Footer";
import { PromoBanner } from "@/components/PromoBanner";
import { CategoryHero } from "@/components/CategoryHero";
import { CategoryConsider } from "@/components/CategoryConsider";
import { CategoryProducts } from "@/components/CategoryProducts";
import { products } from "@/data/products";
import { categoryData } from "@/data/categories";

// Map URL paths to product IDs
const pathToProductId: Record<string, string> = {
  "/iphone": "iphone",
  "/ipad": "ipad",
  "/watch": "watch",
  "/airpods": "airpods",
  "/mac": "macbook",
  "/dyson": "dyson",
  "/alisa": "alisa",
  "/hoop": "hoop",
};

// Map URL paths to category data keys
const pathToCategoryKey: Record<string, string> = {
  "/iphone": "iphone",
  "/ipad": "ipad",
  "/watch": "watch",
  "/airpods": "airpods",
  "/mac": "macbook",
  "/dyson": "dyson",
  "/alisa": "alisa",
  "/hoop": "hoop",
};

const CategoryPage = () => {
  const location = useLocation();
  const categoryKey = pathToCategoryKey[location.pathname];
  const productId = pathToProductId[location.pathname];
  
  const category = categoryKey ? categoryData[categoryKey] : null;
  const product = productId ? products[productId] : null;

  if (!category || !product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <AppleNav />
      
      {/* Spacer for fixed nav */}
      <div className="h-11" />
      
      {/* Promo Banner */}
      <PromoBanner
        text={category.promoBanner}
        linkText="Shop"
        linkHref={`/buy/${productId}`}
      />
      
      {/* Hero Section */}
      <CategoryHero
        title={category.heroTitle}
        subtitle={category.heroSubtitle}
        image={product.image}
        productId={productId}
      />
      
      {/* Consider Section - Why choose this product */}
      <CategoryConsider items={category.considerations} />
      
      {/* Product Lineup */}
      <CategoryProducts
        title={category.lineupTitle}
        products={category.lineup}
        categoryId={productId}
      />
      
      {/* Trade-in / Additional CTA */}
      <section className="bg-section-gray py-16 text-center">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            {category.ctaTitle}
          </h2>
          <p className="mt-3 text-lg md:text-xl text-text-secondary">
            {category.ctaSubtitle}
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              to={`/product/${productId}`}
              className="text-link-blue hover:underline text-lg"
            >
              Learn more {">"}
            </Link>
            <Link
              to={`/buy/${productId}`}
              className="text-link-blue hover:underline text-lg"
            >
              Shop now {">"}
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CategoryPage;
