import { render } from "@testing-library/react";
import CategoriesCards from "./CategoriesCards";

const commonNames = ["headphones", "speakers", "earphones"];

describe("<CategoriesCards /> component", () => {
  it("should render three headings named 'headphones', 'speakers' and 'earphones'", () => {
    const { getAllByRole } = render(<CategoriesCards />);

    const [headphones, speakers, earphones] = getAllByRole("heading");

    expect(headphones).toHaveAccessibleName(commonNames[0]);
    expect(speakers).toHaveAccessibleName(commonNames[1]);
    expect(earphones).toHaveAccessibleName(commonNames[2]);
  });
});
