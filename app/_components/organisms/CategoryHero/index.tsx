import { H2White } from "../../atoms";
import { CommonProps } from "../../types";
import "./category-hero.scss";

type CategoryHeroProps = Record<"category", string> & CommonProps;

const CategoryHero = ({ category, className = "" }: CategoryHeroProps) => (
  <section
    className={`${className} category-hero flex content-center items-flex-end`}
  >
    <H2White>{category}</H2White>
  </section>
);

export default CategoryHero;
