import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("<Footer /> component", () => {
  it("should show four links to the four main pages: 'home', 'headphones', 'speakers' and 'earphones'", () => {
    const { getAllByRole } = render(<Footer />);

    const [home, headphones, speakers, earphones] = getAllByRole("link");

    expect(home).toHaveAccessibleName("home");
    expect(headphones).toHaveAccessibleName("headphones");
    expect(speakers).toHaveAccessibleName("speakers");
    expect(earphones).toHaveAccessibleName("earphones");
  });

  it("should show three links to the three main social accounts: 'facebook', 'twitter' and 'instagram'", () => {
    const { getAllByRole } = render(<Footer />);

    const [facebook, twitter, instagram] = getAllByRole("link").slice(-3);

    expect(facebook).toHaveAccessibleName("facebook");
    expect(twitter).toHaveAccessibleName("twitter");
    expect(instagram).toHaveAccessibleName("instagram");
  });
});
