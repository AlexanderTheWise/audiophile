import {
  H1,
  H2,
  LinkMainHomeProduct,
  LinkPrimary,
  OverBrand,
  OverWTrans,
  ParBTrans,
  ParWTrans,
  ResponsiveCenterToLeft,
} from "@/app/_components/atoms";
import { ProductOverview } from "@/app/models/Product";
import { CommonProps } from "../../types";

type Container = typeof H1;

type ProductOverviewHoc = {
  Name: Container;
  Description: Container;
  Link?: typeof LinkPrimary;
  OverText?: Container;
};

type ProductOverviewProps = { productOverview: ProductOverview } & CommonProps;

const productOverviewHoc = ({
  Name,
  Description,
  OverText,
  Link,
}: ProductOverviewHoc) => {
  return function ProductOverView({
    productOverview: { description, name, slug },
    className = "",
  }: ProductOverviewProps) {
    return (
      <ResponsiveCenterToLeft className={className}>
        {OverText && <OverText>new product</OverText>}
        <Name>{name}</Name>
        <Description>{description}</Description>
        {Link && <Link href={slug} />}
      </ResponsiveCenterToLeft>
    );
  };
};

export const PrimaryProductOverView = productOverviewHoc({
  OverText: OverWTrans,
  Name: H1,
  Description: ParWTrans,
  Link: LinkPrimary,
});

export const SecondaryProductOverview = productOverviewHoc({
  Name: H1,
  Description: ParWTrans,
  Link: LinkMainHomeProduct,
});

export const TerciaryProductOverview = productOverviewHoc({
  OverText: OverBrand,
  Name: H2,
  Description: ParBTrans,
  Link: LinkPrimary,
});

export const QuaternaryProductOverview = productOverviewHoc({
  Name: H2,
  Description: ParBTrans,
  Link: LinkPrimary,
});

export const QuinaryProductOverview = productOverviewHoc({
  OverText: OverBrand,
  Name: H2,
  Description: ParBTrans,
});

export const SenaryProductOverview = productOverviewHoc({
  Name: H2,
  Description: ParBTrans,
});
