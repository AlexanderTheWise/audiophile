import products from "@/app/lib/products.json";
import { render } from "@testing-library/react";
import Gallery from ".";

const product = products[0];
const productName = product.name;

const renderGallery = () =>
  render(<Gallery gallery={product.gallery} name={productName} />);

describe("<Gallery /> component", () => {
  it("should render three images named with the product name followed by 'gallery image'", () => {
    const expectedLength = 3;
    const name = `${productName} gallery image`;
    const { getAllByRole } = renderGallery();

    const images = getAllByRole("img", { name });

    expect(images).toHaveLength(expectedLength);
  });
});
