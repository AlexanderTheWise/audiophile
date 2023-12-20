import { LinkQuaternary } from "@/_components/atoms";
import { CommonProps } from "@/_components/types";

export const pageslinks = [
  "home",
  "headphones",
  "speakers",
  "earphones",
  "checkout",
];

const PagesLinks = ({ className = "" }: CommonProps) => (
  <nav className={className}>
    <ul className="flex column-gap-34px row-gap-24px">
      {pageslinks.map((link) => (
        <li key={link}>
          <LinkQuaternary href={link === "home" ? "/" : `/${link}`}>
            {link}
          </LinkQuaternary>
        </li>
      ))}
    </ul>
  </nav>
);

export default PagesLinks;
