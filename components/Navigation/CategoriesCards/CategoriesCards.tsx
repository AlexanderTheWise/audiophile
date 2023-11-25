import CategoryCard, { Category } from "../CategoryCard/CategoryCard";
import "./categoriescards.scss";

type Categories = Category[];

const categories: Categories = [
  {
    id: 1,
    name: "headphones",
    imageUrl: "/images/shared/desktop/image-category-thumbnail-headphones.png",
  },
  {
    id: 2,
    name: "speakers",
    imageUrl: "/images/shared/desktop/image-category-thumbnail-speakers.png",
  },
  {
    id: 3,
    name: "earphones",
    imageUrl: "/images/shared/desktop/image-category-thumbnail-earphones.png",
  },
];

const CategoriesCards = () => {
  return (
    <ul className="categories-cards">
      {categories.map(({ id, ...rest }) => (
        <li key={id}>
          <CategoryCard category={rest} />
        </li>
      ))}
    </ul>
  );
};

export default CategoriesCards;
