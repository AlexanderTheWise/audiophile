import { PrimaryProductOverView } from "@/_components/molecules";
import { ProductOverview } from "@/models/Product";
import "./hero.scss";

const productOverview: ProductOverview = {
  name: "XX99 Mark II Headphones",
  description:
    "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  slug: "headphones/xx99-mark-two-headphones",
};

const Hero = () => (
  <section className="hero flex items-flex-start content-center">
    <PrimaryProductOverView
      productOverview={productOverview}
      className="hero__content"
    />
  </section>
);

export default Hero;
