import {
  AddProductAction,
  AddProductActionPayload,
  DecrementProductSetAction,
  IncrementProductSetAction,
  LoadProductCartAction,
  ProductActions,
  ProductCart,
  RemoveAllProductsAction,
} from "./types";

export const loadProductCartActionCreator = (
  payload: ProductCart,
): LoadProductCartAction => ({ type: ProductActions.loadProductCart, payload });

export const addProductActionCreator = (
  payload: AddProductActionPayload,
): AddProductAction => ({ type: ProductActions.addProduct, payload: payload });

export const incrementProductSetActionCreator = (
  payload: number,
): IncrementProductSetAction => ({
  type: ProductActions.incrementProductSet,
  payload,
});

export const decrementProductSetActionCreator = (
  payload: number,
): DecrementProductSetAction => ({
  type: ProductActions.decrementProductSet,
  payload,
});

export const removeAllProductsActionCreator = (): RemoveAllProductsAction => ({
  type: ProductActions.removeAllProducts,
});
