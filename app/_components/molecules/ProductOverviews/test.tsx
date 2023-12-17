import { render } from "@testing-library/react";
import { PrimaryProductOverView, TerciaryProductOverview } from "..";
import { ProductOverview } from "@/models/Product";

const productOverview: ProductOverview = {
  name: "XX99 Mark II Headphones",
  description:
    "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  slug: "headphones/xx99-mark-two-headphones",
};

describe("<PrimaryProductOverView /> component", () => {
  const renderProductOverview = () =>
    render(<PrimaryProductOverView productOverview={productOverview} />);

  describe("when it receives a title and a headline", () => {
    it("should render a level one heading with the title passed", () => {
      const { getByRole } = renderProductOverview();
      const level = 1;
      const name = productOverview.name;

      const heading = getByRole("heading", {
        level,
        name,
      });

      expect(heading).toBeInTheDocument();
    });

    it("should render a paragraph with the headline passed", () => {
      const { getByText } = renderProductOverview();

      const headline = getByText(productOverview.name);

      expect(headline).toBeInTheDocument();
    });
  });
});

describe("<TerciaryProductOverview /> component", () => {
  describe("when it receives a product overview", () => {
    it("should render a level two heading with the title passed", () => {
      const { getByRole } = render(
        <TerciaryProductOverview productOverview={productOverview} />,
      );
      const level = 2;
      const name = productOverview.name;

      const heading = getByRole("heading", { level, name });

      expect(heading).toBeInTheDocument();
    });
  });
});
