import { render } from "@testing-library/react";
import Hero from ".";

describe("<Hero /> component", () => {
  it("should render a heading called 'XX99 Mark II Headphones'", () => {
    const { getByRole } = render(<Hero />);
    const name = "XX99 Mark II Headphones";

    const heading = getByRole("heading", { name });

    expect(heading).toBeInTheDocument();
  });

  it("should render a paragraph with text: 'new product'", () => {
    const { getByText } = render(<Hero />);
    const text = "new product";

    const paragraph = getByText(text);

    expect(paragraph).toBeInTheDocument();
  });

  it("should render a paragraph with text: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'", () => {
    const { getByText } = render(<Hero />);
    const text =
      "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.";

    const paragraph = getByText(text);

    expect(paragraph).toBeInTheDocument();
  });
});
