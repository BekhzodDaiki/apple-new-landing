import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export const CartSheet = () => {
  const { items, totalItems, totalPrice, updateQuantity, removeItem } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative text-foreground hover:text-text-secondary transition-colors">
          <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-link-blue text-white text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-text-secondary">
            <ShoppingBag className="w-16 h-16 mb-4 opacity-30" />
            <p>Ваша корзина пуста</p>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.color.name}`}
                  className="flex gap-4 p-4 bg-section-gray rounded-xl"
                >
                  <div className="w-24 h-24 flex-shrink-0 bg-background rounded-lg overflow-hidden">
                    <img
                      src={item.color.image || item.image}
                      alt={`${item.name} - ${item.color.name}`}
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground truncate">{item.name}</h4>
                    <p className="text-sm text-text-secondary">{item.color.name}</p>
                    <p className="text-sm font-medium text-foreground mt-1">
                      {formatPrice(item.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.color.name, item.quantity - 1)}
                        className="p-1 rounded-full hover:bg-border transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.color.name, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-border transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeItem(item.productId, item.color.name)}
                        className="p-1 ml-auto text-red-500 hover:bg-red-500/10 rounded-full transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-border pt-4 pb-6 space-y-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Итого:</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <Button className="w-full" size="lg">
                Оформить заказ
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
