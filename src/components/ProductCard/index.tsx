import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { useCartStore } from "@/stores/cartStore";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addCartItem } = useCartStore();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    addCartItem(product, 1);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  const getBgColorByPrice = useMemo(() => {
    const price = Number(product.price);
    if (price < 50) {
      return "bg-cyan";
    } else if (price >= 50 && price < 100) {
      return "bg-green";
    }
    return "bg-purple";
  }, [product]);

  return (
    <div className="max-w-xs rounded-xl overflow-hidden shadow-lg my-2 bg-white flex flex-col">
      <div className="relative h-64">
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
          layout="fill"
          priority={true}
        />
        <button
          className={`absolute top-2 left-2 bg-white hover:bg-gray p-2 pt-1 border border-black cursor-pointer flex items-center justify-center ${isAnimating ? "add-to-cart-animation" : ""}`}
          onClick={handleAddToCart}
          style={{ width: "30px", height: "30px" }}
        >
          <span className="text-black text-2xl">+</span>
        </button>
        <div
          className={`absolute bottom-6 right-0 bg-gray-800 text-black text-2xl shadow-lg font-bold px-2 py-1 rounded ${getBgColorByPrice}`}
        >
          USD {product.price}
        </div>
      </div>
      <div className="px-6 py-4 flex flex-col justify-between">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base text-dark-gray">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
