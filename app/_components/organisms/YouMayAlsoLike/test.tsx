import { render } from "@testing-library/react";
import products from "@/lib/products.json";
import YouMayAlsoLike from ".";

const others = products[0].others;

const renderYouMayLike = () => render(<YouMayAlsoLike others={others} />);

describe("<YouMayAlsoLike /> component", () => {
  describe("receives a list of others products", () => {
    it("should render a level 3 heading called 'you may also like'", () => {
      const level = 3;
      const name = "you may also like";
      const { getByRole } = renderYouMayLike();

      const heading = getByRole("heading", { level, name });

      expect(heading).toBeInTheDocument();
    });

    it("should render images with the names of the others products", () => {
      const { getByRole } = renderYouMayLike();

      others.forEach(({ name }) => {
        const image = getByRole("img", { name });

        expect(image).toBeInTheDocument();
      });
    });

    it("should render level 4 headings with the names of the others products", () => {
      const level = 4;
      const { getByRole } = renderYouMayLike();

      others.forEach(({ name }) => {
        const heading = getByRole("heading", { name, level });

        expect(heading).toBeInTheDocument();
      });
    });
  });
});
