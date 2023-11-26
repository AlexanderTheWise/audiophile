import Image from "next/image";
import CategoryLink from "@/components/Navigation/Links/CategoryLink";
import "./categorycard.scss";

export type Category = {
  id: number;
  name: string;
  imageUrl: string;
};

const CategoryCard = ({
  category: { imageUrl, name },
}: {
  category: Omit<Category, "id">;
}) => {
  return (
    <div className="flex category-card">
      <Image
        src={imageUrl}
        className="category-card__image"
        alt={`${name} category image`}
        width="151"
        height="150"
      />
      <h3 className="category-card__title text--h">{name}</h3>
      <CategoryLink href="#" label={name} />
    </div>
  );
};

export default CategoryCard;
