"use client";

import { Product, ProductOverview } from "@/app/models/Product";
import { ButtonPrimary, SecondaryImageDetail } from "../../atoms";
import { CommonProps } from "../../types";
import {
  ProductCounter,
  QuinaryProductOverview,
  SenaryProductOverview,
} from "../../molecules";
import useProductDetail from "@/app/hooks/useProductDetail";

type ProductDetailProps = Record<"product", Product> & CommonProps;

const ProductDetail = ({
  product: { id, image, name, new: isNew, description, slug, price },
  className = "",
}: ProductDetailProps) => {
  const productOverview: ProductOverview = {
    name,
    description,
    slug,
  };

  const { addToCart, decrement, increment, count } = useProductDetail({
    id,
    name,
    cartImage: `/images/cart/image-${slug}.jpg`,
    price,
  });

  return (
    <SecondaryImageDetail className={className} image={image} name={name}>
      <div className="flex-col items-flex-start row-gap-32px">
        {isNew ? (
          <QuinaryProductOverview productOverview={productOverview} />
        ) : (
          <SenaryProductOverview productOverview={productOverview} />
        )}

        <p className="text--category">$ {price}</p>

        <div className="flex column-gap-16px">
          <ProductCounter decrement={decrement} increment={increment}>
            {count}
          </ProductCounter>
          <ButtonPrimary onClick={addToCart}>add to cart</ButtonPrimary>
        </div>
      </div>
    </SecondaryImageDetail>
  );
};

export default ProductDetail;
