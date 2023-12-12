import { PrimaryProductOverView } from "@/app/_components/molecules";
import "./hero.scss";

const Hero = () => (
  <section className="hero flex items-flex-start content-center">
    <PrimaryProductOverView
      className="hero__content"
      title="XX99 Mark II
Headphones"
      headline="Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
    />
  </section>
);

export default Hero;
