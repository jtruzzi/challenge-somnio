import React from "react";
import Link from "next/link";
import CartBadge from "./CartBadge";
import Image from "next/image";
import { useProductStore } from "@/stores/productStore";

const NavBar = () => {
  const { setSearchQuery, setPageLimit } = useProductStore();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setPageLimit(3);
  };

  return (
    <div className="fixed w-full h-16 bg-primary-500 flex flex-row justify-between items-center pl-5 pr-10 z-50">
      <Link href="/">
        <Image
          src="/logo.png"
          width={128}
          height={47}
          alt="Logo"
          priority={true}
        />
      </Link>
      <input
        onChange={handleSearchChange}
        type="text"
        placeholder="Buscar Productos ..."
        className="outline-none rounded-full px-5 py-1 w-96"
      />
      <CartBadge />
    </div>
  );
};

export default NavBar;
