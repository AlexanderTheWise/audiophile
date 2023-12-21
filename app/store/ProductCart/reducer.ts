import {
  AddProductAction,
  DecrementProductSetAction,
  IncrementProductSetAction,
  LoadProductCartAction,
  ProductActions,
  ProductCart,
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
        const productCart = (<LoadProductCartAction>action).payload;

        resultedState = productCart;
      }
      break;

    case ProductActions.addProduct:
      {
        const [id, productTile] = (<AddProductAction>action).payload;
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
        const id = (<IncrementProductSetAction>action).payload;
        const newState = deepCopy(state);

        newState[id].count++;

        resultedState = newState;
      }
      break;

    case ProductActions.decrementProductSet:
      {
        const id = (<DecrementProductSetAction>action).payload;
        const newState = deepCopy(state);

        if (newState[id].count == 1) {
          delete newState[id];
        } else {
          newState[id].count--;
        }

        resultedState = newState;
      }
      break;

    case ProductActions.removeAllProducts:
      {
        resultedState = initialProducts;
      }
      break;

    default:
      resultedState = state;
  }

  localStorage.setItem("cart", JSON.stringify(resultedState));
  return resultedState;
};
