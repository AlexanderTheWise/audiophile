import { render } from "@testing-library/react";
import CategoriesLinks from ".";

const accessibleNames = ["headphones", "speakers", "earphones"];

describe("<CategoriesLinks /> component", () => {
  it("should render three images named 'headphones', 'speakers', 'earphones'", () => {
    const { getAllByRole } = render(<CategoriesLinks />);

    const images = getAllByRole("img");

    images.forEach((image, index) => {
      expect(image).toHaveAccessibleName(accessibleNames[index]);
    });
  });

  it("should render three paragraphs with the texts 'headphones', 'speakers', 'earphones'", () => {
    const { getByText } = render(<CategoriesLinks />);

    accessibleNames.forEach((name) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
