import { render } from "@testing-library/react";
import Footer from ".";

describe("<Footer />", () => {
  it("should render a small print 'Copyright 2021. All Rights Reserved'", () => {
    const { getByText } = render(<Footer />);
    const copyrightInfo = "Copyright 2021. All Rights Reserved";

    const smallPrint = getByText(copyrightInfo);

    expect(smallPrint).toBeInTheDocument();
  });
});
