import React from "react";
import ProductCartItem from "@/components/ProductCartItem";
import { CartItem } from "@/types/cart";
import Link from "next/link";
import { useCartStore } from "@/stores/cartStore";

const Cart = () => {
  const cartStore = useCartStore();
  const cartItems = cartStore.cartItems;

  return (
    <div className="container max-w-3xl mx-auto px-4 text-center flex flex-col gap-8">
      <h1 className="text-2xl">Tu Carrito</h1>
      <div className="w-full grid grid-cols-[min-content,1fr,min-content,min-content] gap-4 bg-white rounded-2xl shadow p-10 w-full mx-auto">
        {!cartItems.length ? (
          <p>No se han agregado productos al carrito</p>
        ) : (
          cartItems.map((cartItem: CartItem, index: number) => (
            <>
              <ProductCartItem key={cartItem.product.id} cartItem={cartItem} />
              {index < cartItems.length - 1 && (
                <hr className="col-span-4 border-t-1 border-gray" />
              )}
            </>
          ))
        )}
      </div>

      <Link
        href="/"
        className="mx-auto w-60 bg-primary-900 text-white px-5 py-5 rounded-xl border border-dark-gray bg-primary-900"
      >
        SEGUIR COMPRANDO
      </Link>
    </div>
  );
};

export default Cart;
