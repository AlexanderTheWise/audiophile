import { LinkQuaternary } from "@/app/_components/atoms";
import { CommonProps } from "@/app/_components/types";

const pageslinks = ["home", "headphones", "speakers", "earphones"];

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
