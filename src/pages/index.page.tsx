import React, { useEffect, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";
import Image from "next/image";
import { useProductStore } from "@/stores/productStore";

interface Props {
  products: Product[];
}

const Home = ({ products }: Props) => {
  const { pageLimit, setPageLimit, searchQuery } = useProductStore();

  useEffect(() => {
    setPageLimit(3);
  }, [setPageLimit]);

  const handleShowMore = () => {
    setPageLimit(pageLimit + 3);
  };

  const filteredProducts = useMemo(() => {
    return !searchQuery
      ? products
      : products.filter((product: { title: string }) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
  }, [products, searchQuery]);

  const limitedProducts = filteredProducts.slice(0, pageLimit);

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

export const getServerSideProps = async () => {
  let products: Product[] = [];

  try {
    const response = await fetch(`https://fakestoreapi.com/products`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch products, received status ${response.status}`
      );
    }

    products = await response.json();
  } catch (error) {
    console.error("Error fetching products:", (error as Error).message);
  }

  return {
    props: {
      products: products || [],
    },
  };
};

export default Home;
