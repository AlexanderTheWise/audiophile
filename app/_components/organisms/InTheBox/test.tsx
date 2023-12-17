import { render } from "@testing-library/react";
import products from "@/lib/products.json";
import InTheBox from ".";

const items = products[0].includes;

const renderInTheBox = () => render(<InTheBox items={items} />);

describe("<InTheBox /> component", () => {
  describe("receives a list of items", () => {
    it("should render a level 2 heading called 'in the box'", () => {
      const level = 3;
      const name = "in the box";
      const { getByRole } = renderInTheBox();

      const heading = getByRole("heading", { level, name });

      expect(heading).toBeInTheDocument();
    });

    it("should render a list with names of the names of the items", () => {
      const { getByText } = renderInTheBox();

      items.forEach(({ item }) => {
        const text = getByText(item);

        expect(text).toBeInTheDocument();
      });
    });
  });
});
