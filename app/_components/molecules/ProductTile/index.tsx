import Image from "next/image";
import { ParBTrans } from "@/_components/atoms";
import { CommonContainerProps } from "@/_components/types";
import { ProductTile } from "@/store/ProductCart/types";

type ProductTileProps = {
  productTile: ProductTile;
} & CommonContainerProps;

const ProductTile = ({
  children,
  productTile: { cartImage, name, price },
}: ProductTileProps) => (
  <article className="flex items-center content-space-between">
    <div className="flex items-center column-gap-16px">
      <Image src={cartImage} alt={name} width="64" height="64" />

      <div className="flex-col row-gap-4px">
        <p className="text--uppercase text--bold">
          {name.replace(/earphones|speaker|headphones/gi, "").trimEnd()}
        </p>
        <ParBTrans className="text--bold">$ {price}</ParBTrans>
      </div>
    </div>
    {children}
  </article>
);

export default ProductTile;
