import { render } from "@testing-library/react";
import Item from ".";

const quantity = 1;
const item = "travel pouch";

describe("<Item /> component", () => {
  describe("receives an item", () => {
    it("should render a text with the item", () => {
      const { getByText } = render(<Item item={{ quantity, item }} />);

      const text = getByText(item);

      expect(text).toBeInTheDocument();
    });
  });
});
