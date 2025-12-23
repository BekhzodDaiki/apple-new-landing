import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CartProvider } from "@/hooks/useCart";
import { AuthProvider } from "@/hooks/useAuth";
import { DataProvider } from "@/hooks/useData";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import BuyPage from "./pages/BuyPage";
import CategoryPage from "./pages/CategoryPage";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import SeedDatabase from "./pages/SeedDatabase";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <DataProvider>
        <CartProvider>
          <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/seed" element={<SeedDatabase />} />
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
    </DataProvider>
  </AuthProvider>
</QueryClientProvider>
);

export default App;
