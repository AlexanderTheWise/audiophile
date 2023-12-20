import Image from "next/image";
import { GreyBox, H2, LinkSecondary } from "@/_components/atoms";
import { SecondaryProductOverview } from "@/_components/molecules";
import { CommonProps } from "@/_components/types";
import "./home-products.scss";
import { ProductOverview } from "@/models/Product";

const productOverview: ProductOverview = {
  name: "ZX9 Speaker",
  description:
    "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
  slug: "speakers/zx9-speaker",
};

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
          priority={true}
        />
      </picture>
      <SecondaryProductOverview productOverview={productOverview} />
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
