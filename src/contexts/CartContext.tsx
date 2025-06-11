import { createContext, useContext, useState, ReactNode } from "react";

export type CartItem = {
  nombre: string;
  tipo: "pizza" | "bebida";
  tamaño?: "fraccion" | "mediana" | "familiar" | "unica"; // Solo para pizzas
  precio: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  clearCart: () => void;
  cartItemCount: number; // 👈 añadido
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => setItems([...items, item]);
  const removeItem = (index: number) =>
    setItems(items.filter((_, i) => i !== index));
  const clearCart = () => setItems([]);

  const cartItemCount = items.length; // 👈 computado

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, cartItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};
