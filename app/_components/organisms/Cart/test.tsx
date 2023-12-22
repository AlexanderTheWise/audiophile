import { userEvent } from "@testing-library/user-event";
import renderWithProviders from "@/_testUtils/renderWithProviders";
import { getTotalProducts } from "@/lib/products";
import { initialState } from "@/_testUtils/data";
import Cart from ".";

const renderCart = () => renderWithProviders(<Cart />, { initialState });
const totalProducts = getTotalProducts(initialState);
const units = Object.values(initialState).map(({ count }) => count);
const names = ["YX1 Wireless", "XX59"];

describe("<Cart /> component", () => {
  it("should render a level 5 heading called 'cart' followed by the total number of products", () => {
    const level = 5;
    const name = `cart (${totalProducts})`;
    const { getByRole } = renderCart();

    const heading = getByRole("heading", { level, name });

    expect(heading).toBeInTheDocument();
  });

  it("should render a link called checkout", () => {
    const name = "checkout";
    const { getByRole } = renderCart();

    const link = getByRole("link", { name });

    expect(link).toBeInTheDocument();
  });

  it("should render texts with the names of products of the cart without their categories", () => {
    const { getByText } = renderCart();

    names.forEach((name) => {
      const text = getByText(name);

      expect(text).toBeInTheDocument();
    });
  });

  it("should render texts with the units of the products of the cart", () => {
    const { getByRole } = renderCart();

    units.forEach((units) => {
      const name = `${units} item${units > 1 ? "s" : ""}`;

      const text = getByRole("region", { name });

      expect(text).toBeInTheDocument();
    });
  });

  it("should render a button called 'Remove all' that empties the product cart", async () => {
    const name = "Remove all";
    const { getByRole } = renderCart();

    const heading = getByRole("heading");
    const button = getByRole("button", { name });

    expect(heading).toHaveAccessibleName(`cart (${totalProducts})`);
    await userEvent.click(button);
    expect(heading).toHaveAccessibleName(`cart (0)`);
  });

  it("should render an increment button for each product that increments its units by one", async () => {
    const name = "+";
    const { getByRole, getAllByRole } = renderCart();

    const text = getByRole("region", { name: `1 item` });
    const [button] = getAllByRole("button", { name });

    await userEvent.click(button);
    expect(text).toHaveAccessibleName("2 items");
  });

  it("should render a decrement button for each product that deletes the product of the cart when it has one unit", async () => {
    const { queryByText, getAllByRole } = renderCart();
    const getProductName = () => queryByText(names[0]);

    expect(getProductName()).toBeInTheDocument();
    const [button] = getAllByRole("button", { name: "-" });

    await userEvent.click(button);
    expect(getProductName()).not.toBeInTheDocument();
  });

  it("should render a decrement button for each product that decreases the units of the product by one when it has more than one unit", async () => {
    const { getAllByRole, getByRole } = renderCart();

    const text = getByRole("region", { name: "2 items" });
    const [_, button] = getAllByRole("button", { name: "-" });

    await userEvent.click(button);

    expect(text).toHaveAccessibleName("1 item");
  });
});
