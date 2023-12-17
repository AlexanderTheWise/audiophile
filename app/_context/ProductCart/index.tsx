"use client";

import { createContext, useReducer, Dispatch, useMemo } from "react";
import { productCartReducer } from "@/store/ProductCart/reducer";
import { ProductCart, UnionProductActions } from "@/store/ProductCart/types";

type ProductCartContext = {
  state: ProductCart;
  dispatch: Dispatch<UnionProductActions>;
};

type ProductCartProviderProps = {
  children: React.ReactNode;
  initalState: ProductCart;
};

export const ProductCartContext = createContext<ProductCartContext>({
  state: [],
  dispatch: () => {},
});

const ProductCartProvider = ({
  children,
  initalState,
}: ProductCartProviderProps) => {
  const [state, dispatch] = useReducer(productCartReducer, initalState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ProductCartContext.Provider value={value}>
      {children}
    </ProductCartContext.Provider>
  );
};

export default ProductCartProvider;
