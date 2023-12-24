import { useContext } from "react";
import {
  H5,
  LinkPrimary,
  ParBTrans,
  TextButton,
  WhiteBox,
} from "@/_components/atoms";
import { ProductCartContext } from "@/_context/ProductCart";
import { getTotalPrice, getTotalProducts } from "@/lib/products";
import { CommonProps } from "@/_components/types";
import { ProductCounter, ProductTile } from "@/_components/molecules";
import {
  decrementProductSetActionCreator,
  incrementProductSetActionCreator,
  removeAllProductsActionCreator,
} from "@/store/ProductCart/actions";
import "./cart.scss";

const Cart = ({ className = "" }: CommonProps) => {
  const { state, dispatch } = useContext(ProductCartContext);
  const totalProducts = getTotalProducts(state);
  const totalPrice = getTotalPrice(state);

  const increment = (id: number) => {
    dispatch(incrementProductSetActionCreator(id));
  };

  const decrement = (id: number) =>
    dispatch(decrementProductSetActionCreator(id));

  const removeAll = () => {
    dispatch(removeAllProductsActionCreator());
  };

  return (
    <WhiteBox className={`${className} cart`}>
      <div className="flex items-center content-space-between">
        <H5 className="text--black-transparent">cart ({totalProducts})</H5>
        <TextButton onClick={removeAll}>Remove all</TextButton>
      </div>

      <ul className="flex-col row-gap-24px">
        {Object.entries(state).map(([id, productTile]) => (
          <li key={id}>
            <ProductTile productTile={productTile}>
              <ProductCounter
                increment={() => increment(+id)}
                decrement={() => decrement(+id)}
              >
                {productTile.count}
              </ProductCounter>
            </ProductTile>
          </li>
        ))}
      </ul>

      <div className="flex-col row-gap-24px">
        <div className="flex items-center content-space-between">
          <ParBTrans className="text--uppercase">total</ParBTrans>
          <p className="text--bold">$ {totalPrice.toLocaleString("en-US")}</p>
        </div>

        <LinkPrimary href="/checkout" className="cart__checkout">
          checkout
        </LinkPrimary>
      </div>
    </WhiteBox>
  );
};

export default Cart;
