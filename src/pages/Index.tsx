import { AppleNav } from "@/components/AppleNav";
import { HeroSection } from "@/components/HeroSection";
import { PromoCard } from "@/components/PromoCard";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";

import heroIphone from "@/assets/hero-iphone.png";
import watchImage from "@/assets/watch.png";
import ipadImage from "@/assets/ipad.png";
import airpodsImage from "@/assets/airpods.png";
import macbookImage from "@/assets/macbook.png";
import dysonImage from "@/assets/dyson.png";
import alisaImage from "@/assets/alisa.png";
import hoopImage from "@/assets/hoop.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AppleNav />
      
      {/* Spacer for fixed nav */}
      <div className="h-11" />
      
      {/* Promo Banner */}
      <PromoBanner
        text="Order by 12/22 for free delivery of in‑stock items by 12/24. See checkout for specific delivery dates and options."
        linkText="Shop"
        linkHref="#"
      />
      
      {/* Main Hero - iPhone */}
      <HeroSection
        title="iPhone"
        subtitle="Say hello to the latest generation of iPhone."
        primaryText="Learn more"
        secondaryText="Shop iPhone"
        image={heroIphone}
        bgColor="white"
        textColor="dark"
        productId="iphone"
      />
      
      {/* Product Grid - Apple Products */}
      <section className="bg-background py-3">
        <div className="max-w-[1060px] mx-auto px-3 grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* iPad */}
          <PromoCard
            title="iPad Air"
            subtitle="Now supercharged by the M3 chip."
            image={ipadImage}
            primaryText="Learn more"
            secondaryText="Buy"
            productId="ipad"
          />
          
          {/* Watch */}
          <PromoCard
            title="Apple Watch"
            subtitle="The ultimate way to watch your health."
            image={watchImage}
            primaryText="Learn more"
            secondaryText="Buy"
            productId="watch"
          />
          
          {/* AirPods */}
          <PromoCard
            title="AirPods Pro"
            subtitle="The world's best in-ear Active Noise Cancellation."
            image={airpodsImage}
            primaryText="Learn more"
            secondaryText="Buy"
            productId="airpods"
          />
          
          {/* MacBook */}
          <PromoCard
            title="MacBook Pro"
            subtitle="Mind-blowing. Head-turning."
            image={macbookImage}
            primaryText="Learn more"
            secondaryText="Buy"
            productId="macbook"
          />
        </div>
      </section>

      {/* Dyson Hero Section */}
      <HeroSection
        title="Dyson"
        subtitle="Powerful suction. Intelligent cleaning. Engineered for your home."
        primaryText="Explore Dyson"
        secondaryText="Shop"
        image={dysonImage}
        bgColor="gray"
        textColor="dark"
        productId="dyson"
      />

      {/* New Products Grid - Alisa & Hoop */}
      <section className="bg-background py-3">
        <div className="max-w-[1060px] mx-auto px-3 grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Alisa */}
          <PromoCard
            title="Alisa"
            subtitle="Your smart home assistant. Voice control for everything."
            image={alisaImage}
            primaryText="Learn more"
            secondaryText="Buy"
            productId="alisa"
          />
          
          {/* Hoop */}
          <PromoCard
            title="Hoop"
            subtitle="Track your health. 24/7 monitoring on your finger."
            image={hoopImage}
            primaryText="Learn more"
            secondaryText="Buy"
            productId="hoop"
          />
        </div>
      </section>
      
      {/* Trade In Section */}
      <section className="bg-section-gray py-16 text-center">
        <div className="max-w-[980px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Apple Trade In
          </h2>
          <p className="mt-3 text-lg md:text-xl text-text-secondary">
            Get up to $180–$670 in credit when you trade in iPhone 13 or higher.
          </p>
          <div className="mt-4">
            <a href="#" className="text-link-blue hover:underline text-lg">
              Get your estimate {">"}
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
