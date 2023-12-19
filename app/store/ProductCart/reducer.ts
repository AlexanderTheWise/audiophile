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
  let resultedState: ProductCart;

  switch (action.type) {
    case ProductActions.loadProductCart:
      {
        const productCart = action.payload as ProductCart;

        resultedState = productCart;
      }
      break;

    case ProductActions.addProduct:
      {
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

        resultedState = newState;
      }
      break;

    case ProductActions.incrementProductSet:
      {
        const id = action.payload as number;
        const newState = deepCopy(state);

        newState[id].count++;

        resultedState = newState;
      }
      break;

    case ProductActions.decrementProductSet:
      {
        const id = action.payload as number;
        const newState = deepCopy(state);

        if (newState[id].count == 1) {
          delete newState[id];
        } else {
          newState[id].count--;
        }

        resultedState = newState;
      }
      break;

    default:
      resultedState = state;
  }

  localStorage.setItem("cart", JSON.stringify(resultedState));
  return resultedState;
};
