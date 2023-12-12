import { render } from "@testing-library/react";
import PagesLinks from ".";

describe("<PagesLinks /> component", () => {
  it("should render four links named 'home', 'headphones', 'speakers' and 'earphones'", () => {
    const linkNames = ["home", "headphones", "speakers", "earphones"];
    const { getAllByRole } = render(<PagesLinks />);

    const links = getAllByRole("link");

    links.forEach((link, index) => {
      expect(link).toHaveAccessibleName(linkNames[index]);
    });
  });
});
