import Image from "next/image";
import { GreyBox, LinkTertiary } from "@/app/_components/atoms";
import { CategoryLinkProps } from "@/app/_components/types";
import "./category-link.scss";

const CategoryLink = ({
  className = "",
  category: { imageUrl, name },
}: CategoryLinkProps) => (
  <div className={`${className} category-link`}>
    <GreyBox className="category-link__grey-box flex-col items-center content-flex-end row-gap-16px">
      <Image
        src={imageUrl}
        alt={name}
        width="150"
        height="154"
        className="category-link__image"
      />

      <p className="text--category">{name}</p>
      <LinkTertiary />
    </GreyBox>
  </div>
);

export default CategoryLink;
