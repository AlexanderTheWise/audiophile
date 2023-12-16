import { act } from "react-dom/test-utils";
import { useContext } from "react";
import renderHookWithProviders from "@/app/_testUtils/renderHookWithProviders";
import { ProductCartContext } from "@/app/_context/ProductCart";
import useProductDetail, { UseProductDetailTile } from ".";

const initialProps: UseProductDetailTile = {
  id: 1,
  name: "YX1 Wireless Earphones",
  price: 2999,
  cartImage: "/images/cart/image-yx1-earphones.jpg",
};

const useProductDetailTest = (initialCount?: number) => {
  const result = useProductDetail(initialProps, initialCount);
  const { state } = useContext(ProductCartContext);

  return { ...result, state };
};

describe("useProductDetail hook", () => {
  it("should return an increment function that increments the count by one", async () => {
    const expectedCount = 2;
    const result = renderHookWithProviders(useProductDetailTest);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(expectedCount);
  });

  it("should return a decrement function that decrements count by one when count is greater than one", () => {
    const expectedCount = 1;
    const result = renderHookWithProviders(() => useProductDetailTest(2));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(expectedCount);
  });

  it("should return a decrement function that doesn't change count if count is equal to one", () => {
    const expectedCount = 1;
    const result = renderHookWithProviders(useProductDetailTest);

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(expectedCount);
  });

  it("should return an addToCart function that adds products to cart when it doesn't exists", () => {
    const id = initialProps.id;
    const result = renderHookWithProviders(useProductDetailTest);

    act(() => {
      result.current.addToCart();
    });

    expect(result.current.state[id]);
  });
});
