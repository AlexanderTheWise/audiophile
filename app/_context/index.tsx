"use client";
import { useState, useEffect } from "react";
import ProductCartProvider from "./ProductCart";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [initialState, setInitialState] = useState({});

  useEffect(() => {
    const cart = localStorage.getItem("cart");

    setInitialState(cart ? JSON.parse(cart) : {});
  }, []);

  return (
    <ProductCartProvider initalState={initialState}>
      {children}
    </ProductCartProvider>
  );
};

export default Providers;
