import { create } from "zustand";
import { Store } from "@/types";

interface storeStore {
  store: Store | null;
  setStore: (store: Store) => void;
}

const useCart = create<storeStore>((set) => ({
  store: null,
  setStore: (store) => set({ store }),
}));

export default useCart;
