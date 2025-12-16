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
        text="Закажите до 22/12 для бесплатной доставки товаров в наличии до 24/12. Смотрите точные сроки доставки при оформлении."
        linkText="Магазин"
        linkHref="#"
      />
      
      {/* Main Hero - iPhone */}
      <HeroSection
        title="iPhone"
        subtitle="Познакомьтесь с новейшим поколением iPhone."
        primaryText="Подробнее"
        secondaryText="Купить iPhone"
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
            subtitle="Теперь с мощным чипом M3."
            image={ipadImage}
            primaryText="Подробнее"
            secondaryText="Купить"
            productId="ipad"
          />
          
          {/* Watch */}
          <PromoCard
            title="Apple Watch"
            subtitle="Лучший способ следить за здоровьем."
            image={watchImage}
            primaryText="Подробнее"
            secondaryText="Купить"
            productId="watch"
          />
          
          {/* AirPods */}
          <PromoCard
            title="AirPods Pro"
            subtitle="Лучшее активное шумоподавление в мире."
            image={airpodsImage}
            primaryText="Подробнее"
            secondaryText="Купить"
            productId="airpods"
          />
          
          {/* MacBook */}
          <PromoCard
            title="MacBook Pro"
            subtitle="Невероятный. Впечатляющий."
            image={macbookImage}
            primaryText="Подробнее"
            secondaryText="Купить"
            productId="macbook"
          />
        </div>
      </section>

      {/* Dyson Hero Section */}
      <HeroSection
        title="Dyson"
        subtitle="Мощное всасывание. Интеллектуальная уборка. Создан для вашего дома."
        primaryText="Изучить Dyson"
        secondaryText="Магазин"
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
            subtitle="Ваш умный помощник. Голосовое управление всем."
            image={alisaImage}
            primaryText="Подробнее"
            secondaryText="Купить"
            productId="alisa"
          />
          
          {/* Hoop */}
          <PromoCard
            title="Hoop"
            subtitle="Следите за здоровьем. Мониторинг 24/7 на вашем пальце."
            image={hoopImage}
            primaryText="Подробнее"
            secondaryText="Купить"
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
            Получите до $180–$670 в кредит при сдаче iPhone 13 или новее.
          </p>
          <div className="mt-4">
            <a href="#" className="text-link-blue hover:underline text-lg">
              Получить оценку {">"}
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
