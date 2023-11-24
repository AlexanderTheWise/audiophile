import Link from "next/link";
import ArrowRight from "../../Icons/ArrowRight";

const CategoryLink = ({ href }: { href?: string }) => (
  <Link href="" role="menuitem" className="flex btn--4 category-card__link">
    <div className="flex category-card__link-content">
      shop <ArrowRight />
    </div>
  </Link>
);

export default CategoryLink;
