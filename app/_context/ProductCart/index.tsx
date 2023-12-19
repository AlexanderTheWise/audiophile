"use client";

import { createContext, useReducer, Dispatch, useMemo, useEffect } from "react";
import { productCartReducer } from "@/store/ProductCart/reducer";
import { ProductCart, UnionProductActions } from "@/store/ProductCart/types";
import { loadProductCartActionCreator } from "@/store/ProductCart/actions";

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

  useEffect(() => {
    dispatch(loadProductCartActionCreator(initalState));
  }, [initalState]);

  return (
    <ProductCartContext.Provider value={value}>
      {children}
    </ProductCartContext.Provider>
  );
};

export default ProductCartProvider;
