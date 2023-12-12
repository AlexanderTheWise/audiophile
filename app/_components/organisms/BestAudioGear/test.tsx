import { render } from "@testing-library/react";
import BestAudioGear from ".";

describe("<BestAudioGear /> component", () => {
  it("should render a level 2 heading called 'bringing you the best audio gear'", () => {
    const { getByRole } = render(<BestAudioGear />);
    const level = 2;
    const name = "bringing you the best audio gear";

    const heading = getByRole("heading", { level, name });

    expect(heading).toBeInTheDocument();
  });
});
1;
