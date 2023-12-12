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
import { ProductOverview } from "@/app/_components/types";

type Container = typeof H1;

type ProductOverviewHoc = {
  Title: Container;
  Headline: Container;
  Link?: typeof LinkPrimary;
  OverText?: Container;
};

const productOverviewHoc = ({
  Headline,
  Title,
  Link = LinkPrimary,
  OverText,
}: ProductOverviewHoc) =>
  function ProductOverView({ headline, title, className }: ProductOverview) {
    return (
      <ResponsiveCenterToLeft className={className}>
        {OverText && <OverText>new product</OverText>}
        <Title>{title}</Title>
        <Headline>{headline}</Headline>
        <Link />
      </ResponsiveCenterToLeft>
    );
  };

export const PrimaryProductOverView = productOverviewHoc({
  Title: H1,
  OverText: OverWTrans,
  Headline: ParWTrans,
});

export const SecondaryProductOverview = productOverviewHoc({
  Title: H1,
  Headline: ParWTrans,
  Link: LinkMainHomeProduct,
});

export const TerciaryProductOverview = productOverviewHoc({
  OverText: OverBrand,
  Title: H2,
  Headline: ParBTrans,
});
