import create, { StateCreator } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import { Product } from "@/types/product";
import { CartItem } from "@/types/cart";

const baseApiUrl = "https://fakestoreapi.com";

interface CartState {
  cartItems: CartItem[];
  addCartItem: (product: Product, amount: number) => void;
  removeCartItem: (productId: string) => void;
  emptyCart: () => void;
  getCartItemsQuantity: () => number;
  getProductCartItemsQuantity: (productId: string) => number;
  hydrated: boolean;
  setHydrated: (value: boolean) => void;
}

type PersistConfig = (
  config: StateCreator<CartState>,
  options: PersistOptions<CartState>
) => StateCreator<CartState>;

export const useCartStore = create<CartState>(
  (persist as PersistConfig)(
    (set, get) => ({
      cartItems: [],
      hydrated: false,
      setHydrated: (value) => set({ hydrated: value }),

      addCartItem: (product, amount) => {
        set((state) => {
          const index = state.cartItems.findIndex(
            (cartItem) => cartItem.product.id === product.id
          );
          if (index >= 0) {
            state.cartItems[index].quantity += amount;
          } else {
            state.cartItems.push({
              product,
              quantity: amount || 1,
            });
          }
          return { cartItems: state.cartItems };
        });
      },

      removeCartItem: (productId) => {
        set((state) => ({
          cartItems: state.cartItems.filter(
            (cartItem) => cartItem.product.id !== productId
          ),
        }));
      },

      emptyCart: () => set({ cartItems: [] }),

      getCartItemsQuantity: () => {
        return get().cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        );
      },

      getProductCartItemsQuantity: (productId) => {
        return (
          get().cartItems.find((cartItem) => cartItem.product.id === productId)
            ?.quantity || 0
        );
      },
    }),
    {
      name: "cart-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);
