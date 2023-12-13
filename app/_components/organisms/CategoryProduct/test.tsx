import { render } from "@testing-library/react";
import products from "@/app/lib/products.json";
import CategoryProduct from ".";

const product = products[0];

describe("<CategoryProduct /> component", () => {
  const renderCategoryProduct = (isNew = false) =>
    render(<CategoryProduct product={{ ...product, new: isNew }} />);

  describe("receives a  product", () => {
    const name = product.name;

    it("should render an image with the name of the product as an alternative name", () => {
      const { getByRole } = renderCategoryProduct();

      const img = getByRole("img", { name });

      expect(img).toBeInTheDocument();
    });

    it("should render a level two heading with the name of the product", () => {
      const { getByRole } = renderCategoryProduct();
      const level = 2;

      const heading = getByRole("heading", { level, name });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("receives a product that is new", () => {
    it("should render a paragraph called 'new product'", () => {
      const { getByText } = renderCategoryProduct(true);

      const paragraph = getByText("new product");

      expect(paragraph).toBeInTheDocument();
    });
  });
});
