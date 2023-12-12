import { ProductOverview } from "@/app/_components/types";
import { render } from "@testing-library/react";
import { PrimaryProductOverView, TerciaryProductOverview } from "..";

const productOverview: ProductOverview = {
  title: "XX99 Mark II Headphones",
  headline:
    "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
};

describe("<PrimaryProductOverView /> component", () => {
  const renderProductOverview = () =>
    render(<PrimaryProductOverView {...productOverview} />);

  describe("when it receives a title and a headline", () => {
    it("should render a level one heading with the title passed", () => {
      const { getByRole } = renderProductOverview();
      const level = 1;
      const name = productOverview.title;

      const heading = getByRole("heading", {
        level,
        name,
      });

      expect(heading).toBeInTheDocument();
    });

    it("should render a paragraph with the headline passed", () => {
      const { getByText } = renderProductOverview();

      const headline = getByText(productOverview.headline);

      expect(headline).toBeInTheDocument();
    });
  });
});

describe("<TerciaryProductOverview /> component", () => {
  describe("when it receives a product overview", () => {
    it("should render a level two heading with the title passed", () => {
      const { getByRole } = render(
        <TerciaryProductOverview {...productOverview} />,
      );
      const level = 2;
      const name = productOverview.title;

      const heading = getByRole("heading", { level, name });

      expect(heading).toBeInTheDocument();
    });
  });
});
