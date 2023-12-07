import {
  H1,
  H2,
  LinkPrimary,
  OverBrand,
  OverWTrans,
  ParBTrans,
  ParWTrans,
  ResponsiveCenterToLeft,
} from "@/components/atoms";
import { CommonContainerProps, ProductOverview } from "@/components/types";

type Container = (props: CommonContainerProps) => JSX.Element;

const productOverviewHoc = (
  OverText: Container,
  Title: Container,
  Headline: Container,
) =>
  function ProductOverView({ headline, title, className }: ProductOverview) {
    return (
      <ResponsiveCenterToLeft className={className}>
        <OverText>new product</OverText>
        <Title>{title}</Title>
        <Headline>{headline}</Headline>
        <LinkPrimary />
      </ResponsiveCenterToLeft>
    );
  };

export const PrimaryProductOverView = productOverviewHoc(
  OverWTrans,
  H1,
  ParWTrans,
);
export const SecondaryProductOverview = productOverviewHoc(
  OverBrand,
  H2,
  ParBTrans,
);
