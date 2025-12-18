import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ProductColor } from "@/data/products";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  color: ProductColor;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (productId: string, colorName: string) => void;
  updateQuantity: (productId: string, colorName: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "mobistore-cart";

const loadCartFromStorage = (): CartItem[] => {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const saveCartToStorage = (items: CartItem[]) => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage full or unavailable
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(loadCartFromStorage);

  useEffect(() => {
    saveCartToStorage(items);
  }, [items]);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productId === item.productId && i.color.name === item.color.name
      );
      if (existing) {
        return prev.map((i) =>
          i.productId === item.productId && i.color.name === item.color.name
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (productId: string, colorName: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.productId === productId && i.color.name === colorName))
    );
  };

  const updateQuantity = (productId: string, colorName: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, colorName);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.productId === productId && i.color.name === colorName
          ? { ...i, quantity }
          : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
