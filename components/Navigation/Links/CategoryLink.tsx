import Link from "next/link";
import ArrowRight from "../../Icons/ArrowRight";

type CategoryLinkProps = {
  href: string;
  label: string;
};

const CategoryLink = ({ href, label }: CategoryLinkProps) => {
  return (
    <Link
      id="category_card_link"
      href={href}
      aria-label={label}
      className="flex btn--4 category-card__link"
    >
      <div className="flex category-card__link-content">
        shop <ArrowRight />
      </div>
    </Link>
  );
};

export default CategoryLink;
