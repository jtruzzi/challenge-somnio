import React from "react";
import { CartItem } from "@/types/cart";
import { useCartStore } from "@/stores/cartStore";

interface Props {
  cartItem: CartItem;
}

const ProductCartItem = ({ cartItem }: Props) => {
  const { product } = cartItem;
  const cartStore = useCartStore();

  function handleRemove() {
    cartStore.removeCartItem(cartItem.product.id);
  }

  const cartQuantity = cartStore.getProductCartItemsQuantity(
    cartItem.product.id
  );

  return (
    <>
      <div className="ext-lg text-center">{cartQuantity}</div>
      <div className="text-left">{product.title}</div>
      <div className="text-lg font-semibold text-nowrap">
        USD {product.price}
      </div>
      <div>
        <button
          className={`col-span-1 p-2 pt-1 border border-black cursor-pointer flex items-center justify-center`}
          onClick={handleRemove}
          style={{ width: "30px", height: "30px" }}
        >
          <span className="text-black text-xl">x</span>
        </button>
      </div>
    </>
  );
};

export default ProductCartItem;
