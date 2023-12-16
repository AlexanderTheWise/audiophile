import { ReactElement } from "react";
import { RenderOptions, render } from "@testing-library/react";
import ProductCartProvider from "../_context/ProductCart";
import { ProductCart } from "../store/ProductCart/types";

interface ExtendedRenderOptions extends Omit<RenderOptions, "wrapper"> {
  initialState?: ProductCart;
}

const renderWithProviders = (
  ui: ReactElement,
  { initialState = {}, ...renderOptions }: ExtendedRenderOptions = {},
) =>
  render(ui, {
    ...renderOptions,
    wrapper({ children }) {
      return (
        <ProductCartProvider initalState={initialState}>
          {children}
        </ProductCartProvider>
      );
    },
  });

export default renderWithProviders;
