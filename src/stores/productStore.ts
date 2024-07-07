import { create, StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface ProductState {
  pageLimit: number;
  setPageLimit: (limit: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  hydrated: boolean;
  setHydrated: (value: boolean) => void;
}

type PersistConfig = (
  config: StateCreator<ProductState>,
  options: PersistOptions<ProductState>
) => StateCreator<ProductState>;

export const useProductStore = create<ProductState>(
  (persist as PersistConfig)(
    (set) => ({
      hydrated: false,
      setHydrated: (value) => set({ hydrated: value }),
      products: [],
      isLoadingProducts: true,
      pageLimit: 3,
      setPageLimit: (limit) => set({ pageLimit: limit }),
      searchQuery: "",
      setSearchQuery: (query) => set({ searchQuery: query }),
    }),
    {
      name: "product-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);
