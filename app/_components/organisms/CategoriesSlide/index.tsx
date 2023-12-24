import { CategoriesLinks } from "@/_components/molecules";
import "./categories-slide.scss";

type CategoriesSlideProps = {
  isOpen: boolean;
};

const CategoriesSlide = ({ isOpen }: CategoriesSlideProps) => {
  return (
    <div
      aria-labelledby="categories-menu-button"
      id="categories-slide"
      className={`categories-slide${isOpen ? "--open" : ""} position-absolute`}
    >
      <CategoriesLinks />
    </div>
  );
};

export default CategoriesSlide;
