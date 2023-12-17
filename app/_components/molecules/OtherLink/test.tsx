import { render } from "@testing-library/react";
import products from "@/lib/products.json";
import OtherLink from ".";

const other = products[0].others[0];
const name = other.name;

const renderOtherLink = () => render(<OtherLink other={other} />);

describe("<OtherLink /> component", () => {
  describe("receives other product", () => {
    it("should render an image with the name of the product", () => {
      const { getByRole } = renderOtherLink();

      const image = getByRole("img", { name });

      expect(image).toBeInTheDocument();
    });

    it("should render a level 4 heading with the name of the product", () => {
      const { getByRole } = renderOtherLink();
      const level = 4;

      const heading = getByRole("heading", { level, name });

      expect(heading).toBeInTheDocument();
    });
  });
});
