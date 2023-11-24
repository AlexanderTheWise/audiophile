import { render } from "@testing-library/react";
import CategoryCard from "./CategoryCard";

const name = "headphones";
const imageUrl = "/headphones.png";

const renderCategoryCard = () =>
  render(<CategoryCard category={{ imageUrl, name }} />);

describe("<CategoryCard /> component", () => {
  describe("receives a category named headphones", () => {
    it("should render a heading named 'headphones'", () => {
      const { getByRole } = renderCategoryCard();

      expect(
        getByRole("heading", {
          name,
        }),
      ).toBeInTheDocument();
    });

    it("should render an image called 'headphones category image'", () => {
      const { getByRole } = renderCategoryCard();

      expect(
        getByRole("img", {
          name: "headphones category image",
        }),
      ).toBeInTheDocument();
    });
  });
});
