import {
  addProductActionCreator,
  decrementProductSetActionCreator,
  incrementProductSetActionCreator,
  loadProductCartActionCreator,
} from "./actions";
import { productCartReducer } from "./reducer";
import { AddProductActionPayload, ProductCart, ProductTile } from "./types";

const productTile: ProductTile = {
  name: "XXII Earphones",
  cartImage: "/images/cart/image.png",
  count: 1,
  price: 10,
};
const id = 1;
const payload: AddProductActionPayload = [id, productTile];
const initialState: ProductCart = Object.fromEntries([payload]);

describe("product cart reducer", () => {
  describe("receives an action to load the cart", () => {
    it("should return a new product cart with the received cart", () => {
      const productCart: ProductCart = { [id]: productTile };

      const newState = productCartReducer(
        {},
        loadProductCartActionCreator(productCart),
      );

      expect(newState).toStrictEqual(productCart);
    });
  });

  describe("receives an action to add one unit of a product", () => {
    it("should return a new product cart with the product added when it doesn't exists", () => {
      const newState = productCartReducer({}, addProductActionCreator(payload));

      expect(newState[id]).toStrictEqual(productTile);
    });

    it("should return a new product cart with the product units incremented with specified count when it exists", () => {
      const expectedCount = 2;

      const newState = productCartReducer(
        initialState,
        addProductActionCreator(payload),
      );

      expect(newState[id]).toHaveProperty("count", expectedCount);
    });
  });

  describe("receives an action to increment the units of a product", () => {
    it("should return a new product cart with the product units incremented by one", () => {
      const expectedCount = 2;

      const newState = productCartReducer(
        initialState,
        incrementProductSetActionCreator(id),
      );

      expect(newState[id]).toHaveProperty("count", expectedCount);
    });
  });

  describe("receives an action to decrement the units of a product", () => {
    it("should return a new product cart without the product when the current units of the product are one", () => {
      const newState = productCartReducer(
        initialState,
        decrementProductSetActionCreator(id),
      );

      expect(newState[id]).toBeUndefined();
    });

    it("should return a new product card with the product units decremented by one ", () => {
      const expectedCount = 1;

      const newState = productCartReducer(
        { [id]: { ...initialState[id], count: 2 } },
        decrementProductSetActionCreator(id),
      );

      expect(newState[id]).toHaveProperty("count", expectedCount);
    });
  });
});
