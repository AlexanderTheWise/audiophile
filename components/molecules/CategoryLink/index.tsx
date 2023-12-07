import Image from "next/image";
import { GreyBox, LinkTertiary } from "@/components/atoms";
import { CategoryLinkProps } from "@/components/types";
import "./category-link.scss";

const CategoryLink = ({
  className = "",
  category: { imageUrl, name },
}: CategoryLinkProps) => (
  <GreyBox
    className={`${className} category-link flex-col items-center content-flex-end row-gap-16px position-relative`}
  >
    <Image
      src={imageUrl}
      alt={name}
      width="438"
      height="380"
      className="category-link__image position-absolute"
    />
    <p className="text--category">{name}</p>
    <LinkTertiary />
  </GreyBox>
);

export default CategoryLink;
