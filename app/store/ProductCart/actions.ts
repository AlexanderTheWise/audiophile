import {
  AddProductAction,
  AddProductActionPayload,
  DecrementProductSetAction,
  IncrementProductSetAction,
  ProductActions,
} from "./types";

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
