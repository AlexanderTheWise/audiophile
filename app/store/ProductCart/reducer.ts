import {
  ProductActions,
  ProductCart,
  ProductTile,
  UnionProductActions,
} from "./types";

export const initialProducts: ProductCart = {};

const deepCopy = (obj: ProductCart): ProductCart =>
  JSON.parse(JSON.stringify(obj));

export const productCartReducer = (
  state: ProductCart = initialProducts,
  action: UnionProductActions,
): ProductCart => {
  switch (action.type) {
    case ProductActions.addProduct: {
      const [id, productTile] = action.payload as [number, ProductTile];
      const newState = deepCopy(state);
      const oldProductTile = newState[id];

      if (oldProductTile) {
        newState[id] = {
          ...oldProductTile,
          count: oldProductTile.count + productTile.count,
        };
      } else {
        newState[id] = productTile;
      }

      return newState;
    }

    case ProductActions.incrementProductSet: {
      const id = action.payload as number;
      const newState = deepCopy(state);

      newState[id].count++;

      return newState;
    }

    case ProductActions.decrementProductSet: {
      const id = action.payload as number;
      const newState = deepCopy(state);

      if (newState[id].count == 1) {
        delete newState[id];
      } else {
        newState[id].count--;
      }

      return newState;
    }

    default:
      return state;
  }
};
