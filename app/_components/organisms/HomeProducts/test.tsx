import { render } from "@testing-library/react";
import HomeProducts from ".";

describe("<HomeProducts /> component", () => {
  it("should render a level one heading called 'zx9 speaker'", () => {
    const { getByRole } = render(<HomeProducts />);
    const level = 1;
    const name = "zx9 speaker";

    const heading = getByRole("heading", { level, name });

    expect(heading).toBeInTheDocument();
  });

  it("should render an image called 'zx9 speaker'", () => {
    const { getByRole } = render(<HomeProducts />);
    const name = "zx9 speaker";

    const img = getByRole("img", { name });

    expect(img).toBeInTheDocument();
  });

  it("should render two level two headings called 'zx7 speaker' and 'yx1 earphones'", () => {
    const { getAllByRole } = render(<HomeProducts />);
    const names = ["zx7 speaker", "yx1 earphones"];
    const level = 2;

    const headings = getAllByRole("heading", { level });

    headings.forEach((heading, index) =>
      expect(heading).toHaveAccessibleName(names[index]),
    );
  });
});
