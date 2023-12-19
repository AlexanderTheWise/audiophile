import {
  AddProductAction,
  AddProductActionPayload,
  DecrementProductSetAction,
  IncrementProductSetAction,
  LoadProductCart,
  ProductActions,
  ProductCart,
} from "./types";

export const loadProductCartActionCreator = (
  payload: ProductCart,
): LoadProductCart => ({ type: ProductActions.loadProductCart, payload });

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
