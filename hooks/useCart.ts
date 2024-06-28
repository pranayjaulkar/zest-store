import { create } from "zustand";
import toast from "react-hot-toast";
import { createJSONStorage, persist } from "zustand/middleware";
import { CartItem } from "@/types";

interface CartStore {
  addItem: (data: CartItem) => void;
  items: CartItem[];
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (newItem: CartItem) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => {
          if (
            item.product.id === newItem.product.id &&
            item.size.id === newItem.size.id &&
            item.color.id === newItem.color.id
          ) {
            return true;
          } else return false;
        });

        if (existingItem) {
          return toast("Item already added to cart");
        } else {
          set({ items: [...get().items, newItem] });
          toast.success("Item added to cart");
        }
      },
      removeItem: (id: string) => {
        set({
          items: get().items.filter((item) => item.product.id !== id),
        });
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useCart;
