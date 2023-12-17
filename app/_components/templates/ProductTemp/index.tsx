import { Product } from "@/models/Product";
import { CommonProps } from "../../types";
import { WrapperProduct } from "../../atoms";
import {
  Features,
  ProductDetail,
  InTheBox,
  Gallery,
  YouMayAlsoLike,
} from "../../organisms";
import "./product-temp.scss";

type ProductDetailTempProps = Record<"product", Product> & CommonProps;

const ProductDetailTemp = ({
  product,
  className = "",
}: ProductDetailTempProps) => {
  return (
    <WrapperProduct className={`${className} product-temp`}>
      <ProductDetail product={product} />
      <div className="product-temp__features-items flex-col row-gap-120px column-gap-125px content-space-between">
        <Features>{product.features}</Features>
        <InTheBox items={product.includes} />
      </div>
      <Gallery gallery={product.gallery} name={product.name} />
      <YouMayAlsoLike others={product.others} />
    </WrapperProduct>
  );
};

export default ProductDetailTemp;
