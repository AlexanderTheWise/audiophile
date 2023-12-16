import { renderHook } from "@testing-library/react";
import ProductCartProvider from "../_context/ProductCart";
import { ProductCart } from "../store/ProductCart/types";

export default function renderHookWithProviders<T>(
  hook: () => T,
  initialState: ProductCart = [],
): { current: T } {
  const { result } = renderHook(hook, {
    wrapper({ children }) {
      return (
        <ProductCartProvider initalState={initialState}>
          {children}
        </ProductCartProvider>
      );
    },
  });

  return result;
}
