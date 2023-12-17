import { CategoriesGroupBox } from "@/_components/atoms";
import { Categories } from "@/_components/types";
import CategoryLink from "../CategoryLink";

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

const CategoriesLinks = () => (
  <CategoriesGroupBox>
    {categories.map(({ id, ...rest }) => (
      <li key={id}>
        <CategoryLink category={rest} />
      </li>
    ))}
  </CategoriesGroupBox>
);

export default CategoriesLinks;
