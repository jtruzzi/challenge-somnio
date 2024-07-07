import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { Product } from "@/types/product";
import { CartItem } from "@/types/cart";

const baseApiUrl = "https://fakestoreapi.com";

interface ProductState {
  products: Product[];
  isLoadingProducts: boolean;
  pageLimit: number;
  setPageLimit: (limit: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  fetchProducts: () => void;
  hydrated: boolean;
  setHydrated: (value: boolean) => void;
}

type PersistConfig = (
  config: StateCreator<ProductState>,
  options: PersistOptions<ProductState>
) => StateCreator<ProductState>;

export const useProductStore = create<ProductState>(
  (persist as PersistConfig)(
    (set, get) => ({
      hydrated: false,
      setHydrated: (value) => set({ hydrated: value }),
      products: [],
      isLoadingProducts: true,
      pageLimit: 3,
      setPageLimit: (limit) => set({ pageLimit: limit }),
      searchQuery: "",
      setSearchQuery: (query) => set({ searchQuery: query }),
      fetchProducts: async () => {
        const response = await fetch(`${baseApiUrl}/products`);
        const data = await response.json();
        set({ products: data, isLoadingProducts: false });
      },
    }),
    {
      name: "product-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);
