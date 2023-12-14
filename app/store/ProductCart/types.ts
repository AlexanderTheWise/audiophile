export interface ProductTile {
  name: string;
  count: number;
  cartImage: string;
  price: number;
}

export enum ProductActions {
  addProduct,
  incrementProductSet,
  decrementProductSet,
}

interface ProductAction<P> {
  type: ProductActions;
  payload: P;
}

export type AddProductActionPayload = [number, ProductTile];

export type AddProductAction = ProductAction<AddProductActionPayload>;
export type IncrementProductSetAction = ProductAction<number>;
export type DecrementProductSetAction = IncrementProductSetAction;

export type UnionProductActions =
  | AddProductAction
  | IncrementProductSetAction
  | DecrementProductSetAction;

export type ProductCart = Record<number, ProductTile>;