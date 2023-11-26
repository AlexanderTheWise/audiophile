import { userEvent } from "@testing-library/user-event";
import { render } from "@testing-library/react";
import SlideNav from "./SlideNav";

describe("<SideNav /> component", () => {
  it("should show a collapsed burger menu button", () => {
    const { getByRole } = render(<SlideNav />);

    expect(getByRole("button", { expanded: false })).toBeInTheDocument();
  });

  it("should show a slide when the burger menu button is clicked", async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<SlideNav />);
    const getButton = (expanded: boolean) => getByRole("button", { expanded });

    await user.click(getButton(false));

    expect(getButton(true)).toBeInTheDocument();
  });

  it("should close the slide when the button is clicked two times", async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<SlideNav />);
    const getButton = (expanded: boolean) => getByRole("button", { expanded });

    await user.click(getButton(false));
    await user.click(getButton(true));

    expect(getButton(false)).toBeInTheDocument();
  });

  it("should close the slide when the button is clicked, one of the links receives focus and 'Escape' is clicked", async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<SlideNav />);
    const getButton = (expanded: boolean) => getByRole("button", { expanded });

    await user.click(getButton(false));
    await user.tab();

    await user.keyboard("{Escape}");

    expect(getButton(false)).toBeInTheDocument();
  });
});
