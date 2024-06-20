import { create } from "zustand";
import { ProductWithVarsAndImages } from "@/types";

interface PreviewModalStore {
  isOpen: boolean;
  data?: ProductWithVarsAndImages;
  open: (data: ProductWithVarsAndImages) => void;
  close: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  open: (data) => set({ data, isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default usePreviewModal;
