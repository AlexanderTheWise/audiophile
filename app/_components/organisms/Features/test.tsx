import { render } from "@testing-library/react";
import Features from ".";

const features = "This earphones have noise cancelation";
const renderFeatures = () => render(<Features>{features}</Features>);

describe("<Features /> component", () => {
  it("should render a level 3 heading called features", () => {
    const level = 3;
    const { getByRole } = renderFeatures();

    const heading = getByRole("heading", { level });

    expect(heading).toBeInTheDocument();
  });

  it("should render a text with the features passed", () => {
    const { getByText } = renderFeatures();

    const text = getByText(features);

    expect(text).toBeInTheDocument();
  });
});
