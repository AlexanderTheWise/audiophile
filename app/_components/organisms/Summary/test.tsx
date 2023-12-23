import renderWithProviders from "@/_testUtils/renderWithProviders";
import { getTotalPrice, getVat } from "@/lib/products";
import { initialState } from "@/_testUtils/data";
import Summary from ".";

const renderSummary = () => renderWithProviders(<Summary />, { initialState });

describe("<Summary /> component", () => {
  const totalPrice = getTotalPrice(initialState);
  const vat = getVat(totalPrice);
  const shipping = 50;

  describe("when there are two products in the product cart", () => {
    it("should show a level 2 heading called 'Summary'", () => {
      const level = 2;
      const name = "summary";
      const { getByRole } = renderSummary();

      const heading = getByRole("heading", { level, name });

      expect(heading).toBeInTheDocument();
    });

    it("should show two images with the names of the products", () => {
      const names = [initialState[1].name, initialState[2].name];
      const { getByRole } = renderSummary();

      names.forEach((name) => {
        const image = getByRole("img", { name });

        expect(image).toBeInTheDocument();
      });
    });

    it("should show two texts with the names of the products without their categories", () => {
      const ids = ["YX1 Wireless", "XX59"];
      const { getByText } = renderSummary();

      ids.forEach((id) => {
        const text = getByText(id);

        expect(text).toBeInTheDocument();
      });
    });

    it("should show a text with the total price of the products", () => {
      const id = `$ ${totalPrice.toLocaleString("en-US")}`;
      const { getByText } = renderSummary();

      const text = getByText(id);

      expect(text).toBeInTheDocument();
    });

    it("should show a text with the shipping price", () => {
      const id = `$ ${shipping.toLocaleString("en-US")}`;
      const { getByText } = renderSummary();

      const text = getByText(id);

      expect(text).toBeInTheDocument();
    });

    it("should show a text with the vat", () => {
      const id = `$ ${vat.toLocaleString("en-US")}`;
      const { getByText } = renderSummary();

      const text = getByText(id);

      expect(text).toBeInTheDocument();
    });

    it("should show a text with the shipping price plus the total price", () => {
      const id = `$ ${(totalPrice + shipping).toLocaleString("en-US")}`;
      const { getByText } = renderSummary();

      const text = getByText(id);

      expect(text).toBeInTheDocument();
    });
  });
});
