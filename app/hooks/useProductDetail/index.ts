"use client";

import { useContext, useState } from "react";
import { ProductTile } from "@/app/store/ProductCart/types";
import { ProductCartContext } from "@/app/_context/ProductCart";
import { addProductActionCreator } from "@/app/store/ProductCart/actions";

export type UseProductDetailTile = Omit<ProductTile, "count"> & { id: number };

const useProductDetail = (
  { id, ...rest }: UseProductDetailTile,
  initialCount = 1,
) => {
  const [count, setCount] = useState(initialCount);
  const { dispatch } = useContext(ProductCartContext);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev == 1 ? prev : prev - 1));
  const addToCart = () => {
    dispatch(addProductActionCreator([id, { ...rest, count }]));
  };

  return { increment, decrement, addToCart, count };
};

export default useProductDetail;
