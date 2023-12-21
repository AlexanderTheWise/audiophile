export interface ProductTile {
  name: string;
  count: number;
  cartImage: string;
  price: number;
}

export enum ProductActions {
  loadProductCart,
  addProduct,
  incrementProductSet,
  decrementProductSet,
  removeAllProducts,
}

interface ProductAction<P> {
  type: ProductActions;
  payload: P;
}

export type AddProductActionPayload = [number, ProductTile];

export type LoadProductCartAction = ProductAction<ProductCart>;
export type AddProductAction = ProductAction<AddProductActionPayload>;
export type IncrementProductSetAction = ProductAction<number>;
export type DecrementProductSetAction = IncrementProductSetAction;
export type RemoveAllProductsAction = { type: ProductActions };

export type UnionProductActions =
  | AddProductAction
  | IncrementProductSetAction
  | DecrementProductSetAction
  | LoadProductCartAction
  | RemoveAllProductsAction;

export type ProductCart = Record<number, ProductTile>;
