import { render } from "@testing-library/react";
import { Category } from "@/_components/types";
import CategoryLink from ".";

const category: Omit<Category, "id"> = {
  imageUrl: "/image.png",
  name: "earphones",
};

describe("<CategoryLink /> component", () => {
  describe("when it receives a category named 'earphones'", () => {
    const renderCategoryLink = () =>
      render(<CategoryLink category={category} />);
    const name = category.name;

    it("should render an image with the name 'earphones'", () => {
      const { getByRole } = renderCategoryLink();

      const img = getByRole("img", { name });

      expect(img).toBeInTheDocument();
    });

    it("should render a paragraph with the text 'earphones'", () => {
      const { getByText } = renderCategoryLink();

      const paragraph = getByText(name);

      expect(paragraph).toBeInTheDocument();
    });
  });
});
