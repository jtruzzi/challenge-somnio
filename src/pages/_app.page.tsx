import React from "react";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <div className="pt-20 ">
        <Component {...pageProps} />
      </div>
    </>
  );
}
