import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CartProvider } from "@/hooks/useCart";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import BuyPage from "./pages/BuyPage";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/iphone" element={<CategoryPage />} />
            <Route path="/ipad" element={<CategoryPage />} />
            <Route path="/watch" element={<CategoryPage />} />
            <Route path="/airpods" element={<CategoryPage />} />
            <Route path="/mac" element={<CategoryPage />} />
            <Route path="/dyson" element={<CategoryPage />} />
            <Route path="/alisa" element={<CategoryPage />} />
            <Route path="/whoop" element={<CategoryPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/buy/:productId" element={<BuyPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
