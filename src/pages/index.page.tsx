import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import { useCartStore } from "@/stores/cartStore";
import Image from "next/image";

const Home = () => {
  const {
    products,
    fetchProducts,
    isLoadingProducts,
    pageLimit,
    setPageLimit,
    searchQuery,
  } = useCartStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleShowMore = () => {
    setPageLimit(pageLimit + 3);
  };

  const filteredProducts = !searchQuery
    ? products
    : products.filter((product: { title: string }) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
  const limitedProducts = filteredProducts.slice(0, pageLimit);
  if (isLoadingProducts) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {limitedProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {limitedProducts.length < products.length && (
        <div className="flex justify-center my-4">
          <button
            onClick={handleShowMore}
            className="bg-white text-black px-32 py-5 rounded-2xl border border-dark-gray bg-white flex items-center font-bold"
          >
            <Image
              src="/icons/eye.svg"
              width={20}
              height={20}
              alt="Ver más"
              className="mr-2"
            />
            VER MÁS
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
