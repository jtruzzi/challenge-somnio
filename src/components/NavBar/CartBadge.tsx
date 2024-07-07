import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/stores/cartStore";

const CartBadge = () => {
  const { hydrated, getCartItemsQuantity } = useCartStore();
  const totalQuantity = getCartItemsQuantity();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  }, [totalQuantity]);

  if (!hydrated) {
    return "Loading...";
  }

  return (
    <Link href="/cart" className="relative">
      <Image src="/icons/cart.svg" alt="Cart" width={40} height={40} />
      <div
        className={`rounded-full w-6 h-6 color-black bg-dark-gray border border-[#9ca1a5] flex justify-center items-center text-center text-s font-bold absolute -bottom-4 -left-4 ${isAnimating ? "animate-ping" : ""}`}
      >
        {totalQuantity}
      </div>
    </Link>
  );
};

export default CartBadge;
