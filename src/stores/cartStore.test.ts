import { renderHook, act } from "@testing-library/react";
import { useCartStore } from "@/stores/cartStore";
import { Product } from "@/types/product";

describe("useCartStore", () => {
  const sampleProduct: Product = {
    id: "1",
    title: "product title",
    description: "product description",
    price: "100",
    image: "",
    category: "Mens clothes",
  };

  beforeEach(() => {
    const { result } = renderHook(() => useCartStore());
    act(() => {
      result.current.reset();
    });
  });

  it("should initialize with correct default values", () => {
    const { result } = renderHook(() => useCartStore());

    expect(result.current.cartItems).toEqual([]);
  });

  it("should add a product to the cart", () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addCartItem(sampleProduct, 2);
    });

    expect(result.current.cartItems).toHaveLength(1);
    expect(result.current.cartItems[0].product).toEqual(sampleProduct);
    expect(result.current.cartItems[0].quantity).toBe(2);
  });

  it("should remove a product from the cart", () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addCartItem(sampleProduct, 2);
    });

    act(() => {
      result.current.removeCartItem(sampleProduct.id);
    });

    expect(result.current.cartItems).toHaveLength(0);
  });

  it("should empty the cart", () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addCartItem(sampleProduct, 2);
    });

    act(() => {
      result.current.emptyCart();
    });

    expect(result.current.cartItems).toHaveLength(0);
  });

  it("should get the correct total quantity of items in the cart", () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addCartItem(sampleProduct, 2);
    });

    const totalQuantity = result.current.getCartItemsQuantity();
    expect(totalQuantity).toBe(2);
  });

  it("should get the correct quantity of a product in the cart", () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addCartItem(sampleProduct, 2);
    });

    const productQuantity = result.current.getProductCartItemsQuantity(
      sampleProduct.id
    );
    expect(productQuantity).toBe(2);
  });
});
