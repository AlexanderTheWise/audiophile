import { ReactElement } from "react";
import { RenderOptions, render } from "@testing-library/react";
import ProductCartProvider from "../_context/ProductCart";
import { ProductCart } from "../store/ProductCart/types";
import ModalProvider from "@/_context/Modal";

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
        <ModalProvider>
          <ProductCartProvider initalState={initialState}>
            {children}
          </ProductCartProvider>
        </ModalProvider>
      );
    },
  });

export default renderWithProviders;
