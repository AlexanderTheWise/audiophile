import { render } from "@testing-library/react";
import PagesLinks, { pageslinks } from ".";

describe("<PagesLinks /> component", () => {
  it("should render four links named 'home', 'headphones', 'speakers' and 'earphones'", () => {
    const { getAllByRole } = render(<PagesLinks />);

    const links = getAllByRole("link");

    links.forEach((link, index) => {
      expect(link).toHaveAccessibleName(pageslinks[index]);
    });
  });
});
