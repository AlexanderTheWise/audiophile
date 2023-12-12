import { userEvent } from "@testing-library/user-event";
import { render } from "@testing-library/react";
import SliderNav from ".";

const getButton = () => {
  const { getByRole } = render(<SliderNav />);
  const button = getByRole("button");

  return button;
};

describe("<SliderNav /> component", () => {
  it("should render a collapsed menu button called 'categories menu'", () => {
    const button = getButton();

    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(button).toHaveAccessibleName("categories menu");
  });

  it("should expand the menu button when it is clicked", async () => {
    const button = getButton();

    await userEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", "true");
  });

  it("should collapse the menu button when it is double clicked", async () => {
    const button = getButton();

    await userEvent.dblClick(button);

    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  it("should render a slide menu called 'categories menu'", () => {
    const { getByLabelText } = render(<SliderNav />);
    const slide = getByLabelText("categories menu");

    expect(slide).toBeInTheDocument();
  });
});
