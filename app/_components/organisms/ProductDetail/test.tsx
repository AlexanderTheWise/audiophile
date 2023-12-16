import renderWithProviders from "@/app/_testUtils/renderWithProviders";
import products from "@/app/lib/products.json";
import ProductDetail from ".";
import userEvent from "@testing-library/user-event";

const product = products[0];

const renderProductDetail = (isNew = false) => {
  const { getByRole, queryByText, debug } = renderWithProviders(
    <ProductDetail product={{ ...product, new: isNew }} />,
  );

  const queryOverText = () => queryByText("new product");
  const getHeading = () =>
    getByRole("heading", { level: 2, name: product.name });
  const getImage = () => getByRole("img", { name: product.name });
  const getRegion = (name?: string) => getByRole("region", { name });
  const getIncrementButton = () => getByRole("button", { name: "+" });
  const getDecrementButton = () => getByRole("button", { name: "-" });

  return {
    getHeading,
    getImage,
    getRegion,
    getIncrementButton,
    getDecrementButton,
    queryOverText,
  };
};

describe("<ProductDetail /> component", () => {
  describe("receives a product", () => {
    it("shouldn't render text 'new product' when the product isn't new", () => {
      const { queryOverText } = renderProductDetail();

      expect(queryOverText()).toBeNull();
    });

    it("should render text 'new product' when the product is new", () => {
      const { queryOverText } = renderProductDetail(true);

      expect(queryOverText()).toBeInTheDocument();
    });

    it("should render a level two heading with the product name", () => {
      const { getHeading } = renderProductDetail();

      expect(getHeading()).toBeInTheDocument();
    });

    it("should render an image with product name", () => {
      const { getImage } = renderProductDetail();

      expect(getImage()).toBeInTheDocument();
    });

    it("should render a region that shows the number of units of the product", () => {
      const { getRegion } = renderProductDetail();

      expect(getRegion("1 item")).toBeInTheDocument();
    });

    it("should render a button that increments the units of the product by one when is clicked", async () => {
      const { getRegion, getIncrementButton } = renderProductDetail();

      await userEvent.click(getIncrementButton());

      expect(getRegion("2 items")).toBeInTheDocument();
    });

    it("should render a decrement button that decrements the units of the product by one when is clicked", async () => {
      const { getRegion, getIncrementButton, getDecrementButton } =
        renderProductDetail();

      const region = getRegion();
      const incrementButton = getIncrementButton();
      const decrementButton = getDecrementButton();

      await userEvent.click(incrementButton);
      expect(region).toHaveAccessibleName("2 items");

      await userEvent.click(decrementButton);
      expect(region).toHaveAccessibleName("1 item");
    });

    it("should render a decrement button that doesn't decrements the units of the product when is clicked and the current count is one", async () => {
      const name = "1 item";
      const { getRegion, getDecrementButton } = renderProductDetail();

      const region = getRegion();
      const decrementButton = getDecrementButton();

      expect(region).toHaveAccessibleName(name);
      await userEvent.click(decrementButton);
      expect(region).toHaveAccessibleName(name);
    });
  });
});
