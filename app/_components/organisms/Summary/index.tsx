"use client";

import { useContext } from "react";
import { ButtonPrimary, ParBTrans, WhiteBox } from "@/_components/atoms";
import { ProductCartContext } from "@/_context/ProductCart";
import { ProductTile } from "@/_components/molecules";
import { getTotalPrice, getVat } from "@/lib/products";
import "./summary.scss";

const shipping = 50;

const Summary = () => {
  const { state } = useContext(ProductCartContext);

  const totalPrice = getTotalPrice(state);
  const vat = getVat(totalPrice);

  return (
    <WhiteBox className="summary">
      <h2 className="text--uppercase">summary</h2>

      <ul className="flex-col row-gap-24px">
        {Object.entries(state).map(([id, productTile]) => (
          <li key={id}>
            <ProductTile productTile={productTile}>
              <ParBTrans className="text--bold">x{productTile.count}</ParBTrans>
            </ProductTile>
          </li>
        ))}
      </ul>

      <div className="flex-col row-gap-8px">
        <div className="flex items-center content-space-between">
          <ParBTrans className="text--uppercase">total</ParBTrans>
          <p className="text--bold">$ {totalPrice.toLocaleString("en-US")}</p>
        </div>
        <div className="flex items-center content-space-between">
          <ParBTrans className="text--uppercase">shipping</ParBTrans>
          <p className="text--bold">$ {shipping.toLocaleString("en-US")}</p>
        </div>
        <div className="flex items-center content-space-between">
          <ParBTrans className="text--uppercase">vat (included)</ParBTrans>
          <p className="text--bold">$ {vat.toLocaleString("en-US")}</p>
        </div>
        <div className="summary__grand-total flex items-center content-space-between">
          <ParBTrans className="text--medium text--uppercase">
            grand total
          </ParBTrans>
          <p className="text--bold text--brand">
            $ {(shipping + totalPrice).toLocaleString("en-US")}
          </p>
        </div>
      </div>

      <ButtonPrimary
        onClick={() => {}}
        className="summary__submit-button"
        type="submit"
        form="checkout-form"
      >
        continue & pay
      </ButtonPrimary>
    </WhiteBox>
  );
};

export default Summary;
