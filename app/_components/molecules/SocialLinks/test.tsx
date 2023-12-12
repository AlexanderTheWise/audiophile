import { render } from "@testing-library/react";
import SocialLinks from ".";

describe("<SocialLinks /> component", () => {
  it("should render three links named facebook, twitter and instagram", () => {
    const linkNames = ["facebook", "twitter", "instagram"];
    const { getAllByRole } = render(<SocialLinks />);

    const links = getAllByRole("link");

    links.forEach((link, index) => {
      expect(link).toHaveAccessibleName(linkNames[index]);
    });
  });
});
