import Image from "next/image";
import { GreyBox, H2, LinkSecondary } from "@/app/_components/atoms";
import { SecondaryProductOverview } from "@/app/_components/molecules";
import { CommonProps } from "@/app/_components/types";
import "./home-products.scss";

const HomeProducts = ({ className = "" }: CommonProps) => (
  <section className={`${className} home-products`}>
    <div className="home-products__box-one flex-col items-center content-center">
      <picture>
        <source
          srcSet="/images/home/desktop/image-speaker-zx9.png"
          width="400"
          media="(min-width: 1440px)"
        />
        <source
          srcSet="/images/home/tablet/image-speaker-zx9.png"
          width="197"
          media="(min-width: 768px)"
        />
        <Image
          src="/images/home/mobile/image-speaker-zx9.png"
          alt="zx9 speaker"
          width="172"
          height="207"
        />
      </picture>
      <SecondaryProductOverview
        title="zx9 speaker"
        headline="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
      />
    </div>
    <div className="home-products__box-two flex-col content-center items-flex-start row-gap-32px">
      <H2>zx7 speaker</H2>
      <LinkSecondary />
    </div>
    <div className="home-products__box-three"></div>
    <GreyBox className="home-products__box-four flex-col content-center items-flex-start row-gap-32px">
      <H2>yx1 earphones</H2>
      <LinkSecondary />
    </GreyBox>
  </section>
);

export default HomeProducts;
