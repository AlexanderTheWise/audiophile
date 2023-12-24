import { userEvent } from "@testing-library/user-event";
import renderWithProviders from "@/_testUtils/renderWithProviders";
import Banner from ".";

const renderBanner = () => {
  const expanded = false;
  const { getByRole } = renderWithProviders(<Banner />);

  const getCategoriesButton = () =>
    getByRole("button", { name: "categories menu", expanded });
  const getCartButton = () =>
    getByRole("button", { name: "open the cart", expanded });

  return { getCategoriesButton, getCartButton };
};

describe("<Banner /> component", () => {
  const expanded = "true";

  it("should render a collapsed button called 'categories menu'", () => {
    const { getCategoriesButton } = renderBanner();

    const button = getCategoriesButton();

    expect(button).toBeInTheDocument();
  });

  it("should expand the 'categories menu' button when it is clicked", async () => {
    const { getCategoriesButton } = renderBanner();

    const button = getCategoriesButton();
    await userEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", expanded);
  });

  it("should render a collapsed button called 'open the cart'", () => {
    const { getCartButton } = renderBanner();

    const button = getCartButton();

    expect(button).toBeInTheDocument();
  });

  it("should expanded the cart button when it is clicked", async () => {
    const { getCartButton } = renderBanner();

    const button = getCartButton();
    await userEvent.click(button);

    expect(button).toHaveAttribute("aria-expanded", expanded);
  });
});
